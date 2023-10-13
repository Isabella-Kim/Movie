import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
/* components */
import MoviePageCard from "../components/MoviePageCard";
import Pagenation from "../components/Pagenation";
import { movieAction } from "../redux/actions/movieAction";
// 로딩스피너
import ClipLoader from "react-spinners/ClipLoader";
//api
import api from "../redux/api";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

const API_KEY = process.env.REACT_APP_API_KEY;
let loading = true;

const Movie = ({ item }) => {
  const dispatch = useDispatch();
  const { genreList } = useSelector((state) => state.movie);
  console.log("장르", genreList);
  const [movieList, setMovieList] = useState(null);
  const [goGenre, setGoGenre] = useState("");
  const [genreFilter, setGenreFilter] = useState([]);
  const [page, setPage] = useState(1);

  const getMovieList = async () => {
    let url = `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    let response = await api.get(url);
    let data = response.data;
    setMovieList(data);
    loading = false;
    console.log("무비리스트", data, "apiPage", data.page);
  };
  console.log("Movie", movieList && movieList.results);

  const handlePageChange = (page) => {
    setPage(page);
    getMovieList();
    console.log("페이지?", page);
  };

  const getGenre = (genreId) => {
    setGoGenre(Number(genreId));
  };

  const moviesByGenre = (genreId) => {
    return (
      movieList &&
      movieList.results.filter(({ genre_ids }) => genre_ids.includes(genreId))
    );
  };

  useEffect(() => {
    getMovieList();
    dispatch(movieAction.getMovies());
  }, [page, goGenre]);

  if (loading) {
    return (
      <div className="loading">
        <ClipLoader
          color="red"
          loading={loading}
          size={300}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }
  return (
    <div>
      <div>
        {goGenre > 0
          ? movieList.results
              .filter(({ genre_ids }) => genre_ids.includes(goGenre))
              .map((item) => <MoviePageCard item={item}></MoviePageCard>)
          : movieList &&
            movieList.results.map((item) => (
              <MoviePageCard item={item}></MoviePageCard>
            ))}
      </div>
      <div>
        <Pagenation
          page={page}
          setPage={setPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Movie;
