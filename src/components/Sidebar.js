import React from "react";
import { useNavigate } from "react-router-dom";
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

// Animation for the heading
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

// Animation for the gradient text
const gradientText = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

// Hover effect animation for list items
const hoverEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const drawerWidth = 240;

function ResponsiveDrawer() {
  const navigate = useNavigate();
  const categories = [
    { name: "Action", icon: <MovieIcon />, path: "/action" },
    { name: "Adventure", icon: <LocalMoviesIcon />, path: "/adventure" },
    { name: "Comedy", icon: <TheatersIcon />, path: "/comedy" },
    { name: "Drama", icon: <StarIcon />, path: "/drama" },
    { name: "Fantasy", icon: <SportsScoreIcon />, path: "/fantasy" },
    { name: "Horror", icon: <TvIcon />, path: "/horror" },
    { name: "Romance", icon: <FamilyRestroomIcon />, path: "/romance" },
    { name: "Sci-Fi", icon: <EmojiPeopleIcon />, path: "/sci-fi" },
    { name: "Music", icon: <MusicNoteIcon />, path: "/music" },
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
          bgcolor: '#34495e', // Darker background color for the drawer
          transition: 'background-color 0.3s ease', // Smooth transition for background color
        },
      }}
      open
    >
      <Box sx={{ width: drawerWidth, bgcolor: '#2c3e50', color: '#ecf0f1' }}>
        <Toolbar />
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              mt: -9,
              animation: `${slideIn} 0.5s, ${gradientText} 5s linear infinite`,
              background: 'linear-gradient(45deg, #ff6f61, #d500f9, #00e5ff, #76ff03)',
              backgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '2.5rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              transition: 'transform 0.3s ease', // Smooth transition
              '&:hover': {
                animation: `${hoverEffect} 0.6s ease`, // Hover animation
                cursor: 'pointer', // Add cursor pointer for clickability
              },
            }}
            onClick={handleTitleClick} // Add click handler
          >
            FilmFare
          </Typography>
        </Box>
        <List>
          {categories.map((category) => (
            <ListItem key={category.name} disablePadding>
              <ListItemButton
                onClick={() => navigate(category.path)}
                sx={{
                  color: '#ecf0f1',
                  '&:hover': {
                    backgroundColor: '#16a085', // Change background on hover
                    animation: `${hoverEffect} 0.6s ease`, // Apply hover animation
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#ecf0f1' }}>{category.icon}</ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default ResponsiveDrawer;
