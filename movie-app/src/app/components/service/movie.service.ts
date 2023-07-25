import axios from "axios";

const API_KEY = "4f298a53e552283bee957836a529baec";
const API_URL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_URL,
  params: { api_key: API_KEY },
});

export const searchMovies = async (query: string) => {
  try {
    const response = await client.get("/movie/popular");
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("Couldn't get the movies");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const searchUpcomingMovies = async (query: string) => {
  try {
    const response = await client.get("/movie/upcoming");
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("Couldn't get the movies");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getQueryParam = (url: string, param: string) => {
  const urlSearchParams = new URLSearchParams(url);
  return urlSearchParams.get(param);
};

export const getTopRatedMovies = async () => {
  try {
    const response = await client.get("/movie/top_rated");
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("Couldn't get the top rated movies");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
