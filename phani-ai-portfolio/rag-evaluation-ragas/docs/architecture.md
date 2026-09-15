# Architecture — RAG Evaluation with Ragas & Jenkins

## Overview

This project implements a **production-grade RAG evaluation pipeline** that demonstrates:

- Zero-cost LLM usage via a local GitHub Copilot API Gateway proxy
- Automated Ragas metric scoring integrated into a Jenkins CI/CD pipeline
- Agentic RAG using LangChain's `AgentExecutor`

---

## Architecture Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                        Jenkins Pipeline                          │
│  Install → Start RAG App → Run Evaluation → Publish Report       │
└───────────────────────────────┬──────────────────────────────────┘
                                │
              ┌─────────────────▼─────────────────┐
              │         FastAPI RAG App            │
              │  POST /query  ·  GET /health       │
              └──────┬─────────────────────────────┘
                     │
         ┌───────────▼────────────┐
         │   LangChain RetrievalQA│
         │   chain (LCEL / stuff) │
         └───┬───────────────┬────┘
             │               │
    ┌────────▼───┐   ┌───────▼──────────┐
    │  FAISS     │   │  ChatOpenAI LLM  │
    │  Vector    │   │  (gpt-4o)        │
    │  Store     │   └──────┬───────────┘
    └────────────┘          │
                            │  All API calls
                   ┌────────▼────────────────┐
                   │ GitHub Copilot Proxy     │
                   │ http://localhost:5000/v1 │
                   └─────────────────────────┘

              ┌─────────────────────────────────┐
              │       Ragas Evaluation Engine    │
              │  faithfulness · answer_relevancy │
              │  context_recall · context_prec.  │
              └──────────────┬──────────────────┘
                             │
                   ┌─────────▼──────────┐
                   │  evaluation/       │
                   │  report.json       │
                   │  (pass / fail)     │
                   └────────────────────┘
```

---

## Component Breakdown

| Module | Responsibility |
|---|---|
| `rag/loader.py` | Load `.txt` docs from `data/docs/`, split into chunks |
| `rag/vectorstore.py` | Embed chunks with proxy embeddings, build FAISS index |
| `rag/chain.py` | `RetrievalQA` chain using Copilot proxy as LLM backend |
| `rag/app.py` | FastAPI wrapper exposing `/query` and `/health` |
| `evaluation/dataset.json` | Golden Q&A pairs for deterministic evaluation |
| `evaluation/evaluator.py` | Run chain + Ragas metrics, all via Copilot proxy |
| `evaluation/report.py` | Write structured JSON report with per-metric pass/fail |
| `agent/agent.py` | Agentic RAG with `calculator` + `rag_lookup` tools |
| `Jenkinsfile` | CI pipeline: install → serve → evaluate → gate |

---

## Cost-Zero Strategy

All LangChain and Ragas LLM/embedding calls are directed to
`http://localhost:5000/v1` — a local GitHub Copilot API Gateway proxy that
authenticates with the developer's existing Copilot subscription.  
**No OpenAI or cloud API spend is required.**

---

## Ragas Metrics & Thresholds

| Metric | Default Threshold | What it measures |
|---|---|---|
| `faithfulness` | 0.70 | Answer grounded in retrieved context |
| `answer_relevancy` | 0.70 | Answer on-topic to the question |
| `context_recall` | 0.60 | Ground truth covered by retrieved chunks |
| `context_precision` | 0.60 | Signal-to-noise of retrieved chunks |

Thresholds are configurable via `.env` / environment variables.

---

## Quick Start

```bash
# 1. Start your Copilot proxy on port 5000
# 2. Clone this repo and enter the project folder
cp .env.example .env
make install
make serve          # terminal 1 — RAG API on :8000
make evaluate       # terminal 2 — run Ragas, writes evaluation/report.json
```
