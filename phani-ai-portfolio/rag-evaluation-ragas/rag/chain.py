"""
rag/chain.py
Assemble the RetrievalQA chain wired to the GitHub Copilot proxy.
"""

import os

from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

load_dotenv()

OPENAI_API_BASE = os.getenv("OPENAI_API_BASE", "http://localhost:5000/v1")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "copilot")

_PROMPT_TEMPLATE = """You are a helpful assistant. Use only the context below to answer.
If the answer is not in the context, say "I don't know."

Context:
{context}

Question: {question}

Answer:"""

PROMPT = PromptTemplate(
    input_variables=["context", "question"],
    template=_PROMPT_TEMPLATE,
)


def build_chain(retriever):
    """Build a RetrievalQA chain using the Copilot proxy as the LLM backend."""
    llm = ChatOpenAI(
        openai_api_base=OPENAI_API_BASE,
        openai_api_key=OPENAI_API_KEY,
        model_name="gpt-4o",
        temperature=0,
    )

    chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=retriever,
        return_source_documents=True,
        chain_type_kwargs={"prompt": PROMPT},
    )
    return chain


def query_chain(chain, question: str) -> dict:
    """Run a question through the chain and return answer + source docs."""
    result = chain.invoke({"query": question})
    return {
        "answer": result["result"],
        "source_documents": result.get("source_documents", []),
    }
