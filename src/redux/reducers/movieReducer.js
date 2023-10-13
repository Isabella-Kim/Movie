let initialState = {
  //초기값 설정
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  genreList: [],
  MovieDetails: {},
};
function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    //조건문을 통한 값 반환
    case "GET_MOVIE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MOVIES":
      return {
        ...state,
        //...은 복사하겠다는 의미. 복사해서 새롭게 로드해주기 위함.
        //...으로 새롭게 로드 꼭 시켜줘야함
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList,
        MovieDetail: payload.MovieDetail,
        loading: false,
      };
    case "GET_MOVIES_DETAIL_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_DETAIL_SUCCESS":
      return { ...state, MovieDetail: payload.MovieDetails };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}
export default movieReducer;
