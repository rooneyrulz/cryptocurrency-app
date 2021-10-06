import axios from "axios";

export const fetchCoins = async () => {
  const config = {
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "a312e590d3mshc33cdd642cd7523p186fedjsnd80b69a508d6",
    },
  };
  try {
    const res = await axios.get(
      "https://coinranking1.p.rapidapi.com/coins",
      config
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchNews = async () => {
  const config = {
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "a312e590d3mshc33cdd642cd7523p186fedjsnd80b69a508d6",
    },
  };
  try {
    const res = await axios.get(
      "https://bing-news-search1.p.rapidapi.com/news",
      config
    );
    return res;
  } catch (error) {
    throw error;
  }
};
