from fastapi import APIRouter
from app.schemas.request import ApplicantDetails
from app.services.model_service import predict_loan

router = APIRouter()

@router.post("/predict")
def predict(applicant: ApplicantDetails):
    prediction = predict_loan(applicant.dict())
    return {
        "loan_approval_prediction": prediction
    }
