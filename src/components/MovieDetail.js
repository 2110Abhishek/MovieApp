// src/components/MovieDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress, Button } from '@mui/material';

const API_KEY = "49a5508b99e54cbf67438655e1565e32"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

const MovieDetail = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const movieResponse = await axios.get(`${API_BASE_URL}/movie/${movieId}`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
          },
        });

        setMovie(movieResponse.data);

        const trailerResponse = await axios.get(`${API_BASE_URL}/movie/${movieId}/videos`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
          },
        });

        const trailerData = trailerResponse.data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        setTrailer(trailerData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!movie) {
    return <Typography>No movie found.</Typography>;
  }

  return (
    <Box 
      sx={{ 
        maxWidth: 600, 
        mx: 'auto', 
        mt: 4, 
        p: 3, 
        backgroundColor: '#121212', 
        color: '#e0e0e0',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
        Go Back
      </Button>
      <Typography variant="h4" gutterBottom>
        {movie.title}
      </Typography>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '100%', borderRadius: 8, border: '1px solid #333' }}
      />
      <Typography variant="h6" mt={2}>
        Release Date: {movie.release_date}
      </Typography>
      <Typography variant="body1" mt={1}>
        {movie.overview}
      </Typography>
      {trailer ? (
        <Box sx={{ mt: 2, position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={movie.title + " Trailer"}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
              borderRadius: 8,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      ) : (
        <Typography mt={2}>No trailer available</Typography>
      )}
    </Box>
  );
};

export default MovieDetail;
