from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def health_check():
    return {
        "message": (
            "AllLife Bank is a US bank that has a growing customer base. "
            "The majority of these customers are liability customers (depositors) "
            "with varying sizes of deposits. The number of customers who are also "
            "borrowers (asset customers) is quite small, and the bank is interested "
            "in expanding this base rapidly to bring in more loan business and in the "
            "process, earn more through the interest on loans.\n\n"
            "In particular, the management wants to explore ways of converting its "
            "liability customers to personal loan customers (while retaining them "
            "as depositors).\n\n"
            "A campaign that the bank ran last year for liability customers showed "
            "a healthy conversion rate of over 9% success. This has encouraged the "
            "retail marketing department to devise campaigns with better target "
            "marketing to increase the success ratio.\n\n"
            "Me as a Data Scientist at AllLife Bank have built a machine learning "
            "model that helps the marketing department identify potential customers "
            "who have a higher probability of purchasing a personal loan."
        )
    }
