import joblib
import pandas as pd

model = joblib.load("models/model.joblib")

FEATURE_COLUMNS = [
    "Age",
    "Experience",
    "Income",
    "Family",
    "CCAvg",
    "Education",
    "Mortgage",
    "Securities_Account",
    "CD_Account",
    "Online",
    "CreditCard"
]

def predict_loan(applicant_data: dict):
    df = pd.DataFrame([applicant_data], columns=FEATURE_COLUMNS)
    prediction = model.predict(df)
    return int(prediction[0])
