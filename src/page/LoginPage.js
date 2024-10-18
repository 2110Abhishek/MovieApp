import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import an icon for the "Go Back" button
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 2, position: 'relative' }}>
      {/* Go Back Button */}
      <IconButton
        onClick={handleGoBack}
        sx={{ position: 'absolute', top: 13, left: -30 }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
      <Button
        variant="text"
        color="secondary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleForgotPassword}
      >
        Forgot Password?
      </Button>
      <Button
        variant="text"
        color="secondary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleCreateAccount}
      >
        Create New Account
      </Button>
    </Box>
  );
}
