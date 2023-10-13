import React, { useEffect, useRef } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouTube from "react-youtube";

const Modal = ({ setIsOpen, video, movies }) => {
  //모달 닫기
  const closeModal = () => {
    setIsOpen(false);
  };
  //모달 외부 클릭시 모달 닫기
  const modalRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", clickModalOutside);
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  });

  const clickModalOutside = (event) => {
    if (!modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  //react-youtube로 영상재생
  const opts = {
    height: "640px",
    width: "1200px",
    playerVars: {
      //videoId : https://www.youtube.com/watch?v={videoId},

      autoplay: 1,
    },
  };
  return (
    <div className="Modal" ref={modalRef}>
      <div className="modalTop">
        <h2>{movies?.title}</h2>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeModal}
          className="closeModal"
        />
      </div>
      <div className="modalVideo">
        <YouTube
          videoId={video.results && video.results ? video.results[7].key : null}
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
          opts={opts}
        />
      </div>
    </div>
  );
};

export default Modal;
