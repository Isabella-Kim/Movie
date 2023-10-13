import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../redux/api";
import { movieAction } from "../redux/actions/movieAction";
import { ClipLoader } from "react-spinners/ClipLoader";
//Library
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
//component
import MoviePageCard from "../components/MoviePageCard";
import Pagenation from "../components/Pagenation";

//Movie List
///Pagenation

const API_KEY = process.env.REACT_APP_API_KEY;
let loading = true;

const Movie = () => {
  const dispatch = useDispatch();
  const { genreList } = useSelector((state) => state.movie);
  console.log("끼애애애액", genreList);
  const [movieList, setMovieList] = useState(null);
  const [page, setPage] = useState(1); //현재페이지 보여주기
  const getMovieList = async () => {
    let url = `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    let response = await api.get(url);
    let data = response.data;
    setMovieList(data);
  };
  return (
    <div className="movieListWrap">
      <div className="movieList">
        {/* <MoviePageCard movieList={movieList} /> */}
      </div>
      <div className="pagenation">
        <Pagenation />
      </div>
    </div>
  );
};

export default Movie;
