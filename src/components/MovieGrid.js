import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MovieGrid.css";
import { CircularProgress, Button } from "@mui/material";

const API_KEY = "49a5508b99e54cbf67438655e1565e32"; 
const API_BASE_URL = "https://api.themoviedb.org/3";

const MovieGrid = () => {
  const { category } = useParams(); 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const endpoint = category && category !== "/" ? `discover/movie?with_genres=${category}` : "movie/popular";
        const response = await axios.get(
          `${API_BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category, page]);

  if (loading) {
    return <CircularProgress style={{ margin: "20px auto", display: "block" }} />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="movie-grid">
      {movies.length > 0 ? (
        <>
          <div className="grid-container">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <div className="movie-rating">
                  <span>Rating: {movie.vote_average.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <Button 
              variant="contained" 
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))} 
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button 
              variant="contained" 
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </div>
        </>
      ) : (
        <p>No movies found for this category.</p>
      )}
    </div>
  );
};

export default MovieGrid;
