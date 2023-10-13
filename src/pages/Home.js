import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//컴포넌트, 데이터
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import GenreMovie from "../components/GenreMovie";
//로딩스피너
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  //영화정보 받아오기
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector(
      (state) => state.movie
      //상태값을 movie라고 지정해서 사용
      //근데 궁금한 점 : movie로 지정했는데 왜 아래는 movies로 써주지?
      //답변 : movie나 movies나 다 임의로 지정한 이름이라 상관없고 중요한건 뒤에 들어오는 값임. movies는 MovieSlide에서 인기영화, 순위영화,개봉예정영화 세개를 다 묶어서 전달할거라 걍 movie랑 비슷한 이름으로 movies라고 지정한것임. 그래서 {movies} 하나만 전달해도 popularMovies, topRatedMovies, upComingMovies를 MovieSlide에서 다 가져다 쓸수있는것임.
      //다만 이때 모든 값들을 다 불러오려면 movieReducer의 return 안에 payload값을 전부 잘 적어줘야함
    );
  console.log("인기영화", popularMovies);
  useEffect(() => {
    //useEffect는 아래에 있는 요소들까지 다 읽힌 다음에 읽히기 때문에, 조건부 렌더링 필수
    //조건부 렌더링 하려면 아래와 같이 '(popularMovies.results) ~있다면 ##컴포넌트의 ##을 불러와라' 이런 식으로 작성
    dispatch(movieAction.getMovies());
  }, []);
  //로딩스피너는 loading이 true면 스피너 보여주고, false면 데이터 보여줌
  //true인 상태는 데이터 도착 전, false면 데이터 도착 후 이거나 에러발생
  if (loading) {
    return <ClipLoader color="#be123c" loading={loading} size={150} />;
  }
  return (
    <div>
      {/* 로딩스피너 */}
      <ClipLoader color="#BE123C" loading={loading} size={150} />
      {/* 배너영역 */}
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      {/* 슬라이드 영역 */}
      <div className="movieSlideWrap">
        <h2>Popular Movies</h2>
        {popularMovies.results && <MovieSlide movies={popularMovies} />}
        <h2>Top Rated Movies</h2>
        {topRatedMovies.results && <MovieSlide movies={topRatedMovies} />}
        <h2>Upcoming Movies</h2>
        {upComingMovies.results && <MovieSlide movies={upComingMovies} />}
      </div>
      <div className="movieGenre">
        <h2>How About Movies in These Genres?</h2>
        <GenreMovie />
      </div>
    </div>
  );
};

export default Home;
