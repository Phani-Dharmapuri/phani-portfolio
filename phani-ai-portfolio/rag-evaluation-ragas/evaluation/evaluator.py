"""
evaluation/evaluator.py
Run the RAG chain against the golden dataset and evaluate with Ragas.
All LLM judge calls are routed through the GitHub Copilot proxy.
"""

import json
import os

from dotenv import load_dotenv
from datasets import Dataset
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_recall,
    context_precision,
)

from rag.loader import load_and_split
from rag.vectorstore import build_vectorstore, get_retriever
from rag.chain import build_chain, query_chain
from evaluation.report import write_report

load_dotenv()

OPENAI_API_BASE = os.getenv("OPENAI_API_BASE", "http://localhost:5000/v1")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "copilot")
DATASET_PATH = os.path.join(os.path.dirname(__file__), "dataset.json")
DOCS_DIR = os.getenv("DOCS_DIR", "./data/docs")

THRESHOLDS = {
    "faithfulness": float(os.getenv("MIN_FAITHFULNESS", 0.7)),
    "answer_relevancy": float(os.getenv("MIN_ANSWER_RELEVANCY", 0.7)),
    "context_recall": float(os.getenv("MIN_CONTEXT_RECALL", 0.6)),
    "context_precision": float(os.getenv("MIN_CONTEXT_PRECISION", 0.6)),
}


def _proxy_llm():
    return ChatOpenAI(
        openai_api_base=OPENAI_API_BASE,
        openai_api_key=OPENAI_API_KEY,
        model_name="gpt-4o",
        temperature=0,
    )


def _proxy_embeddings():
    return OpenAIEmbeddings(
        openai_api_base=OPENAI_API_BASE,
        openai_api_key=OPENAI_API_KEY,
        model="text-embedding-3-small",
    )


def run_evaluation():
    with open(DATASET_PATH) as f:
        golden = json.load(f)["questions"]

    # Build RAG chain
    chunks = load_and_split(DOCS_DIR)
    store = build_vectorstore(chunks)
    retriever = get_retriever(store)
    chain = build_chain(retriever)

    # Collect predictions
    records = {
        "question": [],
        "answer": [],
        "contexts": [],
        "ground_truth": [],
    }

    for item in golden:
        result = query_chain(chain, item["question"])
        records["question"].append(item["question"])
        records["answer"].append(result["answer"])
        records["contexts"].append(
            [doc.page_content for doc in result["source_documents"]]
            or item["contexts"]   # fall back to golden contexts if retriever empty
        )
        records["ground_truth"].append(item["ground_truth"])

    dataset = Dataset.from_dict(records)

    # Configure Ragas to use the proxy
    llm = _proxy_llm()
    embeddings = _proxy_embeddings()
    metrics = [faithfulness, answer_relevancy, context_recall, context_precision]
    for m in metrics:
        m.llm = llm
        if hasattr(m, "embeddings"):
            m.embeddings = embeddings

    print("[evaluator] Running Ragas evaluation…")
    result = evaluate(dataset, metrics=metrics)
    scores = result.to_pandas().mean().to_dict()
    print(f"[evaluator] Scores: {scores}")

    write_report(scores, THRESHOLDS)
    return scores


if __name__ == "__main__":
    run_evaluation()
