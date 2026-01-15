import axios from "axios";

const BASE_URL = "https://personal-loan-campaign.onrender.com";

export const fetchLandingMessage = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const fetchPrediction = async (applicantData) => {
  const res = await axios.post(`${BASE_URL}/predict`, applicantData);
  return res.data;
};
