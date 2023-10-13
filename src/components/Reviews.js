import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../redux/api";
//coomponents
import ReviewCard from "./ReviewCard";

const API_KEY = process.env.REACT_APP_API_KEY;

//movieAction, movieReducder에 작성 언제 하고, 언제는 안 하나?
//부모에서 props를 가져올 때는 굳이 작성 안 해도 됨. 이 경우에도 부모인 MovieDetail에서 id={id}로 props 전달하고 useParams로 id를 받았기 때문에 movieAction, movieReducder에 따로 함수를 작성하지 않아도 됨
//그러나 부모에서 전달받을 props가 없거나 새로운 api를 받아야할 때(예를들어 장르리스트의 int를 string형식의 name으로 받을때 새롭게 받아온 api)때는 movieAction, movieReducder에 함수를 새롭게 작성해주어야함
const Reviews = ({ item }) => {
  const { id } = useParams();
  console.log("아이디가 뭐지", id);
  const [review, getReview] = useState([]);
  const getReviews = async () => {
    let url = `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await api.get(url);
    let data = response.data;
    getReview(data);
    console.log("리뷰?", data);
  };
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div>
      <h3
        className="reviewTab"
        style={{ fontSize: "2rem", color: "#E6B91E", fontWeight: 900 }}
      >
        REVIEWS &#40;{review.results && review.results.length}&#41;
      </h3>
      <div className="reviewTotal">
        {/* 조건부렌더링 필수 */}
        {review.results
          ? review.results.map((review) => <ReviewCard review={review} />)
          : null}
      </div>
    </div>
  );
};
export default Reviews;
