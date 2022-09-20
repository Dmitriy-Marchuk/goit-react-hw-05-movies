import axios from 'axios';

const API_KEY = 'fe4b88b6e68a30f89cb8b35af00ef551';
const trendingMovies = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

export async function getFetchFilms() {
  return await axios.get(trendingMovies).then(response => response.data);
}
