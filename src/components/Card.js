import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  //무비카드 클릭시 페이지 이동
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/movies/${item.id}`);
  };
  return (
    <div className="genreBox" onClick={goDetail}>
      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
      ></img>
      <h1>{item.title}</h1>
    </div>
  );
};

export default Card;
