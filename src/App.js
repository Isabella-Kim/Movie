import * as React from "react";
import { Routes, Route } from "react-router-dom";
//style
import "./style/App.css";
import "./style/Header.css";
import "./style/Footer.css";
import "./style/Banner.css";
import "./style/MovieDetail.css";
import "./style/GenreBox.css";
import "./style/ReviewCard.css";
import "./style/CastCard.css";
import "./style/Trailer.css";
import "./style/Modal.css";
//components
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movie />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
