import http from "./httpService";
import config from "../config.json";

const apiEndpoints = config.apiUrl + "/movies";
function movieUrl(id) {
  return `${apiEndpoints}/${id}`;
}
export function getMovies() {
  return http.get(apiEndpoints);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    const movieId = body._id;
    delete body._id;
    return http.put(movieUrl(movieId), body);
  }

  return http.post(apiEndpoints, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieUrl));
}
