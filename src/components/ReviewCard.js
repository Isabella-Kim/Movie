import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="ReviewCard" style={{ color: "#fff" }}>
      <div className="profile">
        <span className="userIcon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7153/7153150.png"
            alt=""
          />
        </span>
        <div>
          <div className="reviewAuthor">{review?.author}</div>
          <div className="reviewUpdate">{review?.updated_at}</div>
        </div>
      </div>
      <div className="reviewContent">{review?.content}</div>
    </div>
  );
};

export default ReviewCard;
