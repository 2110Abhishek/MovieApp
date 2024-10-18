import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { searchMovies } from "../redux/movieActions";

// Styled components
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: '#ffffff', // Change text color to white
  backgroundColor: '#007bff', // New background color (e.g., a blue shade)
  '&:hover': {
    backgroundColor: '#0056b3', // Darker blue for hover
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease',
  },
  marginLeft: theme.spacing(2),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: { xs: "none", sm: "block" },
  fontWeight: 'bold',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#d500f9',
  },
}));

const AvatarWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease',
  },
}));

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      dispatch(searchMovies(searchQuery));
      navigate("/search");
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate('/profile');
    handleCloseMenu();
  };

  const handleLogout = () => {
    // Implement logout functionality
    handleCloseMenu();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: 'linear-gradient(135deg, #e50914, #1aad4b)', boxShadow: 'none' }}>
        <Toolbar>
          <HeaderTitle variant="h6" noWrap component="div">
            MovieApp
          </HeaderTitle>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <form onSubmit={handleSearch}>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </Search>
          <LoginButton variant="contained" onClick={handleLogin}>
            Login
          </LoginButton>
          <AvatarWrapper>
            <UserAvatar onClick={handleAvatarClick} alt="User Avatar" src="/static/images/avatar/1.jpg" />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </AvatarWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
