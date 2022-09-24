import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import './_cast.scss';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');
  const imageNotFound =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

  useEffect(() => {
    API.getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  console.log(cast);

  return (
    <ul className="castList">
      {cast &&
        cast.map(({ name, id, profile_path, character }) => (
          <li className="castItem" key={id}>
            <img
              alt={name}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : imageNotFound
              }
            />
            <div className="castThumb">
              <p className="castName">{name}</p>
              <p className="castCharacter">Character: {character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};
export default Cast;
