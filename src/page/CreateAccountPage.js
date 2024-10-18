import React from 'react';
import { Box, Typography, TextField, Button, IconButton, FormControlLabel, Checkbox } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

// Styled components
const BackButton = ({ onClick }) => (
  <IconButton onClick={onClick} sx={{ position: 'absolute', top: 20, left: 20, color: '#fff' }}>
    <ArrowBackIcon />
  </IconButton>
);

export default function CreateAccountPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 8,
        p: 3,
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        bgcolor: '#2c3e50', // Dark background for contrast
        color: '#ecf0f1', // Light text color
        position: 'relative',
      }}
    >
      {/* Go Back Button */}
      <BackButton onClick={handleGoBack} />

      <Typography variant="h5" gutterBottom textAlign="center">
        Create New Account
      </Typography>

      <TextField
        label="Full Name"
        fullWidth
        margin="normal"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#d500f9', // Color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d500f9', // Color when focused
            },
          },
        }}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#d500f9',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d500f9',
            },
          },
        }}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#d500f9',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d500f9',
            },
          },
        }}
      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#d500f9',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d500f9',
            },
          },
        }}
      />
      <FormControlLabel
        control={<Checkbox sx={{ color: '#d500f9' }} />}
        label="I agree to the Terms and Conditions"
        sx={{ mt: 2, color: '#ecf0f1' }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: '#d500f9',
          '&:hover': {
            bgcolor: '#c51162', // Darker shade on hover
            transform: 'scale(1.05)', // Scale effect on hover
            transition: 'transform 0.3s ease', // Smooth transition
          },
        }}
      >
        Create Account
      </Button>
    </Box>
  );
}
