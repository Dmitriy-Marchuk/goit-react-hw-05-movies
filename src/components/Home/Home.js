import { useState, useEffect } from 'react';
import './_home.scss';
import MovieGallery from '../MovieGallery/MovieGallery';
import * as API from '../../services/api';

const Home = () => {
  const [movieTrending, setMovieTrending] = useState('');
  useEffect(() => {
    API.getMovieTrending().then(data => setMovieTrending(data.results));
  }, []);

  console.log(movieTrending);

  return (
    <div>
      <h1 className="title">Trending today</h1>
      <MovieGallery movies={movieTrending} />
    </div>
  );
};

export default Home;
