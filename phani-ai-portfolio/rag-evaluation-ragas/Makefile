.PHONY: install serve evaluate ci clean

PYTHON := python3
PIP    := $(PYTHON) -m pip
APP_MODULE := rag.app:app

install:
	$(PIP) install --upgrade pip
	$(PIP) install -r requirements.txt

serve:
	uvicorn $(APP_MODULE) --host $${APP_HOST:-0.0.0.0} --port $${APP_PORT:-8000} --reload

evaluate:
	$(PYTHON) -m evaluation.evaluator

ci: install evaluate
	@echo "CI pipeline complete."

clean:
	find . -type d -name __pycache__ -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	rm -f evaluation/report.json
