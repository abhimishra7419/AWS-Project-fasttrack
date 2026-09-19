from fastapi import APIRouter, HTTPException
from pathlib import Path
from pypdf import PdfReader

from backend.services.bedrock_service import load_analysis_prompt

router = APIRouter()

UPLOAD_DIR = Path("uploads")


@router.get("/analyze")
def analyze(filename: str):

    file_path = UPLOAD_DIR / filename

    if not file_path.exists():
        raise HTTPException(
            status_code=404,
            detail="File not found"
        )

    try:
        reader = PdfReader(file_path)

        text = ""

        for page in reader.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

        if not text.strip():
            raise HTTPException(
                status_code=400,
                detail="Could not extract text from PDF"
            )

        prompt = load_analysis_prompt(text)

        return {
            "filename": filename,
            "pages": len(reader.pages),
            "prompt": prompt
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Analysis failed: {str(e)}"
        )