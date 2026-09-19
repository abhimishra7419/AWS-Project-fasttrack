from pydantic import BaseModel
from typing import List


class AnalysisResult(BaseModel):
    title: str
    organization: str
    deadline: str
    eligibility: List[str]
    required_documents: List[str]
    application_steps: List[str]
    important_information: List[str]
    action_plan: List[str]