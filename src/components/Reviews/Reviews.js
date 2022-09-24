import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import './_reviews.scss';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');
  const imageNotFound =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

  useEffect(() => {
    API.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  console.log(reviews);

  if (reviews.length === 0) {
    return (
      <>
        <h1>No reviews yet!</h1>
      </>
    );
  }
  return (
    <ul className="reviewsList">
      {reviews &&
        reviews.map(({ author, id, content, author_details }) => (
          <li className="reviewsItem" key={id}>
            <img
              className="reviewsImage"
              alt={content}
              src={
                author_details.avatar_path
                  ? checkingAvatar(author_details.avatar_path)
                  : imageNotFound
              }
            />
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;

const checkingAvatar = url => {
  const BASE_URL = '/https://www.gravatar.com/';
  if (url.includes(BASE_URL)) {
    return url.slice(1);
  }
  return `https://image.tmdb.org/t/p/w500${url}`;
};
