import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import api from "../redux/api";
import ClipLoader from "react-spinners/ClipLoader";
//comonents
import Trailer from "../components/Trailer";
import Casts from "../components/Casts";
import Reviews from "../components/Reviews";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetail = ({ item }) => {
  const dispatch = useDispatch();
  const { loading, MovieDetail } = useSelector((state) => state.movie);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  //console.log("영화번호", id)
  const [moviesGenre, setMoviesGenre] = useState(null);
  const getAPI = async () => {
    const url = `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    const { data } = await api.get(url);
    setMoviesGenre(data);
  };
  const getMoviesDetail = async () => {
    let url = `/movie/${id}?api_key=${API_KEY}&language=en-US`;
    let response = await api.get(url);
    let data = response.data;
    setMovies(data);
    console.log("영화디테일?", data);
  };
  useEffect(() => {
    //getMoviesDetail,getAPI 호출
    getMoviesDetail();
    getAPI();
  }, []);
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
  } else {
    return (
      <div className="detailBox">
        <div className="detailTop">
          <div className="detailPoster">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movies?.poster_path}`}
            />
          </div>
          <div className="detailCard">
            <div className="detailTitle">{movies?.title}</div>
            <div className="detailGenre">
              {movies.genres &&
                movies.genres.map((genre) => <span>{genre.name}</span>)}
            </div>
            <div className="detailInfoTop">
              <div>⭐: {Math.floor(movies?.vote_average)}</div>
              <div>Age : {movies.adult ? "청불" : "Under 18"}</div>
            </div>
            <div className="detailInfoBottom">{movies?.overview}</div>
            <p>Release Day : {movies?.release_date}</p>
            <p>Time : {movies?.runtime} minutes</p>
            <Trailer movies={movies} />
          </div>
        </div>
        <div className="detailBottom">
          <Casts id={id} />
          <br />
          <Reviews id={id} />
        </div>
      </div>
    );
  }
};
export default MovieDetail;
