import http from "./httpService";
import config from "../config.json";

const apiEndPoint = `${config.apiUrl}/movies`;

function movieUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  const body = { ...movie };
  delete body._id;
  if (movie._id) {
    return http.put(movieUrl(movie._id), body);
  }
  return http.post(apiEndPoint, body);
}
