// src/redux/movieActions.js
import axios from "axios";

const API_KEY = "49a5508b99e54cbf67438655e1565e32";
const API_BASE_URL = "https://api.themoviedb.org/3";

// Action creator to fetch movies based on category
export const fetchMovies = (category) => async (dispatch) => {
  try {
    let endpoint;
    switch (category) {
      case "action":
        endpoint = "/discover/movie?with_genres=28"; // Action genre ID
        break;
      case "adventure":
        endpoint = "/discover/movie?with_genres=12"; // Adventure genre ID
        break;
      case "comedy":
        endpoint = "/discover/movie?with_genres=35"; // Comedy genre ID
        break;
      case "drama":
        endpoint = "/discover/movie?with_genres=18"; // Drama genre ID
        break;
      case "fantasy":
        endpoint = "/discover/movie?with_genres=14"; // Fantasy genre ID
        break;
      case "horror":
        endpoint = "/discover/movie?with_genres=27"; // Horror genre ID
        break;
      case "romance":
        endpoint = "/discover/movie?with_genres=10749"; // Romance genre ID
        break;
      case "sci-fi":
        endpoint = "/discover/movie?with_genres=878"; // Sci-Fi genre ID
        break;
      case "music":
        endpoint = "/discover/movie?with_genres=10402"; // Music genre ID
        break;
      case "popular":
      default:
        endpoint = "/movie/popular"; // Correct endpoint for popular movies
        break;
    }

    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });

    // Dispatch the fetched movies to the Redux store
    dispatch({
      type: "SET_MOVIES",
      payload: { category, movies: response.data.results },
    });
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
  }
};

// Action creator to search movies
export const searchMovies = (query) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        query: query,
        page: 1,
      },
    });

    // Dispatch the search results to the Redux store
    dispatch({
      type: "SET_SEARCH_RESULTS",
      payload: response.data.results,
    });
  } catch (error) {
    console.error("Error searching movies:", error);
  }
};
