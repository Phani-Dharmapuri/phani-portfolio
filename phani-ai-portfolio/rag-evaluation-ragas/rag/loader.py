"""
rag/loader.py
Load documents from a directory and split them into chunks for indexing.
"""

import os
from pathlib import Path

from dotenv import load_dotenv
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

load_dotenv()

DOCS_DIR = os.getenv("DOCS_DIR", "./data/docs")
CHUNK_SIZE = int(os.getenv("CHUNK_SIZE", 512))
CHUNK_OVERLAP = int(os.getenv("CHUNK_OVERLAP", 64))


def load_documents(docs_dir: str = DOCS_DIR):
    """Load all .txt files from *docs_dir* and return raw LangChain Documents."""
    loader = DirectoryLoader(
        docs_dir,
        glob="**/*.txt",
        loader_cls=TextLoader,
        show_progress=True,
    )
    return loader.load()


def split_documents(documents):
    """Split documents into overlapping chunks suitable for embedding."""
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE,
        chunk_overlap=CHUNK_OVERLAP,
    )
    return splitter.split_documents(documents)


def load_and_split(docs_dir: str = DOCS_DIR):
    """Convenience wrapper: load then split."""
    docs = load_documents(docs_dir)
    chunks = split_documents(docs)
    print(f"[loader] {len(docs)} document(s) → {len(chunks)} chunk(s)")
    return chunks
