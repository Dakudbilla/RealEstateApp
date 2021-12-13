import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const baseURL = "bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": url,
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    },
  });
  return data;
};
