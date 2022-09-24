import './_home.scss';
import MovieGallery from '../MovieGallery/MovieGallery';
import * as API from '../../services/api';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movieTrending, setMovieTrending] = useState('');
  useEffect(() => {
    API.getMovieTrending().then(data => setMovieTrending(data.results));
  }, []);

  return (
    <div>
      <h1 className="title">Trending today</h1>
      <MovieGallery movies={movieTrending} />
    </div>
  );
};

export default Home;
