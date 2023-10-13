import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const MoviePageCard = ({ item }) => {
  //const { genreList } = useSelector((state) => state.movie);
  //무비페이지카드 클릭시 페이지 이동
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/movies/${item.id}`);
  };
  return (
    <div>
      <div
        className="moviePageCard"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
            ")",
          backgroundSize: "cover",
          display: "block",
        }}
        onClick={goDetail}
      ></div>
    </div>
  );
};

export default MoviePageCard;
