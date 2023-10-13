import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../redux/api";
//components
import CastCard from "./CastCard";

const API_KEY = process.env.REACT_APP_API_KEY;

const Casts = ({ item }) => {
  const { id } = useParams();
  console.log("배우를 보고싶어", id);
  const [cast, getCast] = useState([]);
  const getCasts = async () => {
    let url = `/movie/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await api.get(url);
    let data = response.data;
    getCast(data);
    console.log("등장인물?", data);
  };
  useEffect(() => {
    getCasts();
  }, []);
  return (
    <div className="Casts">
      <h1>Main Casting</h1>
      <div className="CastList">
        {cast.cast && cast.cast.length > 0
          ? cast.cast.slice(0, 5).map((cast) => <CastCard cast={cast} />)
          : null}
      </div>
    </div>
  );
};

export default Casts;
