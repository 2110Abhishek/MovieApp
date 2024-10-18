import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import an icon for the "Go Back" button
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

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
        Forgot Password
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Reset Password
      </Button>
    </Box>
  );
}
