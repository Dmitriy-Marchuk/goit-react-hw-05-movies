import { NavLink, useLocation } from 'react-router-dom';
import './_movieGallery.scss';

const imageNotFound =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

const MovieGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className="movieList">
        {movies &&
          movies.map(movie => (
            <li className="movieItem" key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <img
                  className="movieImage"
                  alt={movie.name ?? movie.title}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : imageNotFound
                  }
                />
                <div className="movieThumb">
                  <h2 className="movieTitle">{movie.name ?? movie.title}</h2>
                </div>
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieGallery;
