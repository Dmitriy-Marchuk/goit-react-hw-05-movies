import SearchBar from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import * as API from '../../services/api';
import MovieGallery from 'components/MovieGallery/MovieGallery';

const Movies = () => {
  const [searchName, setSearchName] = useState(null);
  const [moviesFound, setMoviesFound] = useState(null);

  const onSubmit = query => {
    setSearchName(query);
  };

  useEffect(() => {
    API.getMovieSearch(searchName).then(data => setMoviesFound(data.results));
  }, [searchName]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} searchName={searchName} />
      {moviesFound &&
        (moviesFound.length > 0 ? (
          <MovieGallery movies={moviesFound} />
        ) : (
          <div>Films not found!</div>
        ))}
    </>
  );
};
export default Movies;
