import React, { useState, useEffect } from "react";
import api from "../redux/api";
import { UseSelector } from "react-redux";
import Card from "./Card";

const API_KEY = process.env.REACT_APP_API_KEY;

const GenreMovie = () => {
  const [movieGenreList, setMovieGenreList] = useState();
  const getMovieGenreList = async () => {
    let url = `/movie/popular?api_key=${API_KEY}&language=en-US&page=5`;
    let response = await api.get(url);
    let data = response.data;
    setMovieGenreList(data);
  };
  console.log("무비장르리스트", movieGenreList);

  useEffect(() => {
    getMovieGenreList();
  }, []);
  return (
    <div className="GenreMovie">
      <h2 className="genreTitle">Horror</h2>
      <div className="genrePartList">
        {movieGenreList?.results
          .filter(({ genre_ids }) => genre_ids.includes(27))
          .slice(0, 5)
          .map((item) => (
            <Card item={item}></Card>
          ))}
      </div>
      <h2 className="genreTitle">Animation</h2>
      <div className="genrePartList">
        {movieGenreList?.results
          .filter(({ genre_ids }) => genre_ids.includes(16))
          .slice(0, 5)
          .map((item) => (
            <Card item={item}></Card>
          ))}
      </div>
      <h2 className="genreTitle">Drama</h2>
      <div className="genrePartList">
        {movieGenreList?.results
          .filter(({ genre_ids }) => genre_ids.includes(18))
          .slice(0, 5)
          .map((item) => (
            <Card item={item}></Card>
          ))}
      </div>
      <h2 className="genreTitle">Fantasy</h2>
      <div className="genrePartList">
        {movieGenreList?.results
          .filter(({ genre_ids }) => genre_ids.includes(14))
          .slice(0, 5)
          .map((item) => (
            <Card item={item}></Card>
          ))}
      </div>
    </div>
  );
};

export default GenreMovie;
