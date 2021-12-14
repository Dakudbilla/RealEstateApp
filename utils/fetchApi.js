import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    },
  });
  return data;
};

export const baseURl = "https://bayut.p.rapidapi.com";
