import React, { useState, useEffect } from "react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import api from "../redux/api";
//components
import Modal from "./Modal";

const API_KEY = process.env.REACT_APP_API_KEY;

const Trailer = ({ item, movies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
    setIsOpen(!isOpen);
  };

  //api 가져오기
  const { id } = useParams();
  const [video, getVideo] = useState([]);
  console.log("트레일러를 보고싶어", id);
  const getVideos = async () => {
    let url = `/movie/${id}/videos?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await api.get(url);
    let data = response.data;
    getVideo(data);
    console.log("트레일러영상?", data);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="Trailer">
      <button onClick={openModalHandler}>
        Watch Trailer &nbsp; <FontAwesomeIcon icon={faCirclePlay} />
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} video={video} movies={movies} />}
    </div>
  );
};

export default Trailer;
