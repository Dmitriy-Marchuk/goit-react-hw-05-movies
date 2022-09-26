import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import * as API from '../../services/api';
import MovieGallery from 'components/MovieGallery/MovieGallery';

const Movies = () => {
  const [moviesFound, setMoviesFound] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';

  const onSubmit = query => {
    setSearchParams(query !== '' ? { query: query } : {});
  };

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      API.getMovieSearch(queryParam).then(data => setMoviesFound(data.results));
    }
    setMoviesFound([]);
  }, [searchParams, queryParam]);

  return (
    <>
      <SearchBar queryParam={queryParam} onSubmit={onSubmit} />
      {moviesFound && <MovieGallery movies={moviesFound} />}
    </>
  );
};
export default Movies;
