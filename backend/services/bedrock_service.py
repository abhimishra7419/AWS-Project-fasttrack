from pathlib import Path


PROMPT_PATH = Path("ai/prompts/notice_analysis.txt")


def load_analysis_prompt(notice_text: str) -> str:
    if not PROMPT_PATH.exists():
        raise FileNotFoundError("Analysis prompt file not found.")

    prompt_template = PROMPT_PATH.read_text(encoding="utf-8")

    return prompt_template + "\n" + notice_text