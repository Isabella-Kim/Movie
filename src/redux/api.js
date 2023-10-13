import axios from "axios";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { "Content-type": "application/json" },
});
//axios의 장점 : baseURL을 지정하면 나중에 앞부분을 생략할 수 있음

//MovieAction으로 export

// api.interceptors.response.use(
//   function (response) {
//     console.log("interceptors >", response);
//     return response;
//   },
//   function (error) {
//     console.log("interceptors >", error);
//     return Promise.reject(error);}
// );
export default api;
