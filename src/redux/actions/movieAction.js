import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIE_REQUEST",
      });
      //api는 api.js에서 변수로 baseURL을 저장했기 때문에 api.get이하에 뒤쪽의 주소(키 값)만 기입해주면 됨
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      //장르추가
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en`
      );
      let [popularMovies, topRatedMovies, upComingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);
      console.log("장르 : ", genreList);
      dispatch({
        //movieReducer로 전달하기 위한 dispatch
        type: "GET_MOVIES",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
        },
      });
      // console.log('인기영화', popularMovies);
      // console.log('등급별', topRatedApi);
      // console.log('돌아오는영화', upComingApi);
    } catch (error) {
      //에러문구
      dispatch({
        type: "GET_MOVIE_FAILED",
      });
    }
  };
}
//MovieDetail 가져오기
function getDetail({ id }) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_DETAIL_REQUEST", payload: { id } });
      const detailApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      let [MovieDetail] = await Promise.all([detailApi]);
      dispatch({
        type: "GET_MOVIES_DETAIL_SUCCESS",
        payload: { MovieDetail: MovieDetail.data },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}
export const movieAction = { getMovies, getDetail };
