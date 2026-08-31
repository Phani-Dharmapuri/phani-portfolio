"""
rag/app.py
FastAPI wrapper exposing the RAG chain over HTTP.
"""

import os
from contextlib import asynccontextmanager
from typing import Optional

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from rag.loader import load_and_split
from rag.vectorstore import build_vectorstore, get_retriever
from rag.chain import build_chain, query_chain

load_dotenv()

DOCS_DIR = os.getenv("DOCS_DIR", "./data/docs")

_chain = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    global _chain
    chunks = load_and_split(DOCS_DIR)
    store = build_vectorstore(chunks)
    retriever = get_retriever(store)
    _chain = build_chain(retriever)
    print("[app] RAG chain ready.")
    yield


app = FastAPI(
    title="RAG Evaluation Demo",
    description="LangChain RAG app routed through GitHub Copilot proxy.",
    version="1.0.0",
    lifespan=lifespan,
)


class QueryRequest(BaseModel):
    question: str
    top_k: Optional[int] = None


class QueryResponse(BaseModel):
    question: str
    answer: str
    sources: list[str]


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/query", response_model=QueryResponse)
def query(req: QueryRequest):
    if _chain is None:
        raise HTTPException(status_code=503, detail="Chain not initialised yet.")
    result = query_chain(_chain, req.question)
    sources = [
        doc.metadata.get("source", "unknown")
        for doc in result["source_documents"]
    ]
    return QueryResponse(
        question=req.question,
        answer=result["answer"],
        sources=list(dict.fromkeys(sources)),
    )
