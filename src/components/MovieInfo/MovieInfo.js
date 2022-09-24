import MovieAdditional from 'components/MovieAdditional/MovieAdditional';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import './_movieInfo.scss';
import CirclePercentage from 'components/CirclePercentage/CirclePercentage';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const imageNotFound =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

  useEffect(() => {
    API.getMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  const {
    title,
    vote_average,
    overview,
    tagline,
    poster_path,
    backdrop_path,
    genres,
  } = movie;

  const backdropStyle = {
    backgroundImage: `linear-gradient(to right, rgb(18, 18, 23) 150px, rgba(32, 32, 32, 0.84) 55%), url("https://image.tmdb.org/t/p/w500/${backdrop_path}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  console.log(movie);

  const vote = (vote_average * 10).toFixed(0);

  return (
    <div>
      <div style={backdropStyle} className="movieInfoContainer">
        <img
          className="moviePoster"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : imageNotFound
          }
          alt={tagline}
        />
        <div className="movieInfoBox">
          <h1 className="movieInfoTitle">{title}</h1>
          <CirclePercentage className="circle" vote={vote} />
          <h2 className="movieOverview">Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <MovieAdditional />
    </div>
  );
};

export default MovieInfo;
