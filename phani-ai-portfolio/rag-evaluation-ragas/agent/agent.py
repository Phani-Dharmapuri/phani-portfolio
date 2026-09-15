"""
agent/agent.py
Agentic RAG extension — LangChain AgentExecutor with tools.
All LLM calls are routed through the GitHub Copilot proxy.
"""

import os

from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_openai_tools_agent
from langchain.tools import tool
from langchain import hub

load_dotenv()

OPENAI_API_BASE = os.getenv("OPENAI_API_BASE", "http://localhost:5000/v1")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "copilot")


# ── Tools ────────────────────────────────────────────────────────────────────

@tool
def calculator(expression: str) -> str:
    """Evaluate a simple arithmetic expression and return the result."""
    try:
        result = eval(expression, {"__builtins__": {}})  # noqa: S307
        return str(result)
    except Exception as exc:
        return f"Error: {exc}"


@tool
def rag_lookup(question: str) -> str:
    """
    Look up an answer from the RAG knowledge base.
    Use this whenever the question concerns documents in the corpus.
    """
    from rag.loader import load_and_split
    from rag.vectorstore import build_vectorstore, get_retriever
    from rag.chain import build_chain, query_chain

    chunks = load_and_split()
    store = build_vectorstore(chunks)
    retriever = get_retriever(store)
    chain = build_chain(retriever)
    result = query_chain(chain, question)
    return result["answer"]


# ── Agent factory ─────────────────────────────────────────────────────────────

def build_agent() -> AgentExecutor:
    llm = ChatOpenAI(
        openai_api_base=OPENAI_API_BASE,
        openai_api_key=OPENAI_API_KEY,
        model_name="gpt-4o",
        temperature=0,
    )

    tools = [calculator, rag_lookup]

    # Uses the standard OpenAI tools agent prompt from LangChain Hub
    prompt = hub.pull("hwchase17/openai-tools-agent")

    agent = create_openai_tools_agent(llm, tools, prompt)
    return AgentExecutor(agent=agent, tools=tools, verbose=True)


def run_agent(question: str) -> str:
    executor = build_agent()
    result = executor.invoke({"input": question})
    return result["output"]


if __name__ == "__main__":
    answer = run_agent("What is 17 * 42, and what is RAG?")
    print(answer)
