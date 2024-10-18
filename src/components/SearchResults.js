// src/components/SearchResults.js
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./MovieGrid.css";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.movies.searchResults);
  const navigate = useNavigate(); // Initialize the navigate function

  // Placeholder function for getting recommendations (could be replaced with real API call)
  const getRecommendations = (movie) => {
    return searchResults.filter((rec) => rec.id !== movie.id).slice(0, 5); // Example: exclude the current movie and show up to 5 recommendations
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`); // Navigate to the movie details page
  };

  return (
    <div className="search-results-container">
      <h2>Search Results</h2>
      <div className="movie-grid">
        {searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie.id)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <h3>Recommended for You</h3>
      <div className="recommendations-grid">
        {searchResults.map((movie) => (
          <div key={movie.id} className="recommendation-card">
            <h4>{movie.title}</h4>
            <div className="recommendations">
              {getRecommendations(movie).map((rec) => (
                <div key={rec.id} className="recommendation-item" onClick={() => handleMovieClick(rec.id)}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${rec.poster_path}`}
                    alt={rec.title}
                  />
                  <p>{rec.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
