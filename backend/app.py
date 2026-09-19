from fastapi import FastAPI
from backend.routes.upload import router as upload_router
from backend.routes.analyze import router as analyze_router

app = FastAPI(
    title="ActionLens API",
    description="AI-powered opportunity and action management platform",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "ActionLens API is running 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


app.include_router(upload_router)
app.include_router(analyze_router)