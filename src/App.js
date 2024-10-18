import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveDrawer from "./components/Sidebar";
import Header from "./components/Header";
import MovieGridRedux from "./components/MovieGridRedux";
import MovieDetail from "./components/MovieDetail";
import SearchResults from "./components/SearchResults";
import LoginPage from "./page/LoginPage";
import CreateAccountPage from "./page/CreateAccountPage";
import ForgotPasswordPage from "./page/ForgotPasswordPage";
// import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
        <ResponsiveDrawer />
        <div style={{ flex: 1 }}>
          <Header />
          <main style={{ padding: "20px", marginLeft: "240px", marginTop: "64px" }}>
            <Routes>
              <Route path="/action" element={<MovieGridRedux category="action" />} />
              <Route path="/adventure" element={<MovieGridRedux category="adventure" />} />
              <Route path="/comedy" element={<MovieGridRedux category="comedy" />} />
              <Route path="/drama" element={<MovieGridRedux category="drama" />} />
              <Route path="/fantasy" element={<MovieGridRedux category="fantasy" />} />
              <Route path="/horror" element={<MovieGridRedux category="horror" />} />
              <Route path="/romance" element={<MovieGridRedux category="romance" />} />
              <Route path="/sci-fi" element={<MovieGridRedux category="sci-fi" />} />
              <Route path="/music" element={<MovieGridRedux category="music" />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-account" element={<CreateAccountPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/movie/:movieId" element={<MovieDetail />} />
            </Routes>
          </main>
        </div>
        {/* <Footer /> Add the Footer component */}
      </div>
    </Router>
  );
}

export default App;
