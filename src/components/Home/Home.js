import * as API from '../../services/api';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './_home.scss';
import styled from 'styled-components';

const Home = () => {
  const [movieTrending, setMovieTrending] = useState('');

  useEffect(() => {
    API.getMovieTrending().then(data => setMovieTrending(data.results));
  }, []);

  console.log(movieTrending);
  return (
    <div>
      <h1 className="title">Trending today</h1>
      <ul className="movieList">
        {movieTrending &&
          movieTrending.map(movie => (
            <li className="movieItem" key={movie.id}>
              <NavLink className="navLink" to={`/movies/${movie.id}`}>
                <img
                  alt={movie.name ?? movie.title}
                  width="200"
                  src="http://risovach.ru/upload/2016/10/mem/kakoy-pacan_125835952_orig_.jpg"
                />
                {movie.name ?? movie.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
