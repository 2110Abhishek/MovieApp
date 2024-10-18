// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} <Link href="#" color="inherit">YourSiteName</Link>. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Made by <Link href="https://yourwebsite.com" color="inherit">Your Name</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
