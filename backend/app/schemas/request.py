from pydantic import BaseModel

class ApplicantDetails(BaseModel):
    Age: int
    Experience: int
    Income: float
    Family: int
    CCAvg: float
    Education: int
    Mortgage: float
    Securities_Account: int
    CD_Account: int
    Online: int
    CreditCard: int
