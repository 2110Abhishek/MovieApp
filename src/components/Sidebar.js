import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  Tooltip,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TheatersIcon from "@mui/icons-material/Theaters";
import StarIcon from "@mui/icons-material/Star";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import TvIcon from "@mui/icons-material/Tv";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { keyframes } from "@mui/system";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const hoverEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const drawerWidth = 240;

function ResponsiveDrawer() {
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { name: "Action", icon: <MovieIcon fontSize="large" />, path: "/action" },
    { name: "Adventure", icon: <LocalMoviesIcon fontSize="large" />, path: "/adventure" },
    { name: "Comedy", icon: <TheatersIcon fontSize="large" />, path: "/comedy" },
    { name: "Drama", icon: <StarIcon fontSize="large" />, path: "/drama" },
    { name: "Fantasy", icon: <SportsScoreIcon fontSize="large" />, path: "/fantasy" },
    { name: "Horror", icon: <TvIcon fontSize="large" />, path: "/horror" },
    { name: "Romance", icon: <FamilyRestroomIcon fontSize="large" />, path: "/romance" },
    { name: "Sci-Fi", icon: <EmojiPeopleIcon fontSize="large" />, path: "/sci-fi" },
    { name: "Music", icon: <MusicNoteIcon fontSize="large" />, path: "/music" },
  ];

  const handleTitleClick = () => {
    navigate('/'); // Navigate to the home page or dashboard
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          background: '#0076bf', // Solid blue color
          transition: 'background-color 0.3s ease',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      }}
      open
    >
      <Box sx={{ width: drawerWidth, color: '#ecf0f1' }}>
        <Toolbar />
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              mt: -9,
              animation: `${slideIn} 0.5s`,
              color: '#fff', // White text color for contrast
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '2.5rem',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)', // Strong shadow for visibility
              transition: 'transform 0.3s ease, background 0.3s ease',
              position: 'relative',
              '&:hover': {
                background: 'linear-gradient(45deg, #ff6f61, #d500f9, #00e5ff, #76ff03)', // Colorful gradient on hover
                backgroundClip: 'text',
                color: 'transparent',
                animation: `${hoverEffect} 0.6s ease`,
                cursor: 'pointer',
                // Adding a transition for a more dynamic feel
                transition: 'background 0.5s ease',
              },
            }}
            onClick={handleTitleClick}
          >
            Filmy Gallery
          </Typography>
        </Box>
        <List>
          {categories.map((category) => (
            <Tooltip title={category.name} key={category.name} placement="right">
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => navigate(category.path)}
                  sx={{
                    color: location.pathname === category.path ? '#2ecc71' : '#ecf0f1',
                    '&:hover': {
                      backgroundColor: '#16a085',
                      animation: `${hoverEffect} 0.6s ease`,
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {category.icon}
                  </ListItemIcon>
                  <ListItemText primary={category.name} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default ResponsiveDrawer;
