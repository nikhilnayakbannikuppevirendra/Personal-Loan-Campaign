from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.health import router as health_router
from app.routes.predict import router as predict_router

app = FastAPI(
    title="Personal Loan Campaign API",
    version="1.0.0"
)

origins = [
    "http://localhost:3000",
    "https://personal-loan-frontend.onrender.com",  # replace with your deployed FE URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # "*" allows all origins. Safe for now
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(predict_router)
