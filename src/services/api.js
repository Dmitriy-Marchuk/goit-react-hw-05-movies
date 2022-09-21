import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = 'fe4b88b6e68a30f89cb8b35af00ef551';

export async function getMovieTrending() {
  return await axios
    .get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    .then(response => response.data);
}

export async function getMovieSearch(query) {
  return await axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    )
    .then(response => response.data);
}

export async function getMovieInfo(movieId) {
  return await axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
}

export async function getMovieCredits(movieId) {
  return await axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(response => response.data);
}

export async function getMovieReviews(movieId) {
  return await axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(response => response.data);
}
