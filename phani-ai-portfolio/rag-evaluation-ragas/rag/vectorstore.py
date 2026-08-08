"""
rag/vectorstore.py
Build and persist a FAISS vector store via the Copilot proxy embeddings endpoint.
"""

import os

from dotenv import load_dotenv
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

load_dotenv()

OPENAI_API_BASE = os.getenv("OPENAI_API_BASE", "http://localhost:5000/v1")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "copilot")
TOP_K = int(os.getenv("TOP_K", 4))

_embeddings = None


def get_embeddings() -> OpenAIEmbeddings:
    """Return a cached OpenAIEmbeddings client pointing at the local proxy."""
    global _embeddings
    if _embeddings is None:
        _embeddings = OpenAIEmbeddings(
            openai_api_base=OPENAI_API_BASE,
            openai_api_key=OPENAI_API_KEY,
            model="text-embedding-3-small",
        )
    return _embeddings


def build_vectorstore(chunks) -> FAISS:
    """Create an in-memory FAISS store from document chunks."""
    print(f"[vectorstore] Embedding {len(chunks)} chunk(s)…")
    store = FAISS.from_documents(chunks, get_embeddings())
    print("[vectorstore] FAISS index built.")
    return store


def get_retriever(store: FAISS):
    """Return a retriever with TOP_K results."""
    return store.as_retriever(search_kwargs={"k": TOP_K})
