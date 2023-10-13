import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  //무비카드 클릭시 페이지 이동
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/movies/${item.id}`);
  };
  console.log("goDetail", goDetail);
  //int로 표현된 장르를 string 형식의 name으로 바꾸기 위한 genreList
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
      className="MovieCard"
      style={{
        backgroundImage:
          "url(" +
          `	https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}` +
          ")",
      }}
      onClick={goDetail}
    >
      <div className="overlay">
        <p>{item.release_date}</p>
        <h2>{item.title}</h2>
        <h3>
          <span className="badge_01">IMDB</span>
          {item.vote_average}/100
        </h3>
        <div className="genreWrap">
          {item.genre_ids.map((id, index) => (
            <p className="genre">
              {genreList.find((item) => item.id == id).name}
            </p>
          ))}
        </div>
        <span>{item.adult ? "Over 18" : "All"}</span>
      </div>
    </div>
  );
};

export default MovieCard;
