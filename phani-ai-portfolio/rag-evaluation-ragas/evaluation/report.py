"""
evaluation/report.py
Serialize Ragas scores to a structured JSON report with pass/fail status.
"""

import json
import os
from datetime import datetime, timezone

REPORT_PATH = os.path.join(os.path.dirname(__file__), "report.json")


def write_report(scores: dict, thresholds: dict, path: str = REPORT_PATH) -> dict:
    """
    Build and write a report JSON.

    Parameters
    ----------
    scores:     {metric_name: float} from Ragas evaluation
    thresholds: {metric_name: float} minimum acceptable values
    path:       output file path
    """
    metrics = {}
    all_passed = True

    for metric, score in scores.items():
        threshold = thresholds.get(metric, 0.0)
        passed = score >= threshold
        all_passed = all_passed and passed
        metrics[metric] = {
            "score": round(score, 4),
            "threshold": threshold,
            "passed": passed,
        }

    report = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "passed": all_passed,
        "metrics": metrics,
    }

    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        json.dump(report, f, indent=2)

    status = "PASSED ✅" if all_passed else "FAILED ❌"
    print(f"[report] Evaluation {status} → {path}")
    return report
