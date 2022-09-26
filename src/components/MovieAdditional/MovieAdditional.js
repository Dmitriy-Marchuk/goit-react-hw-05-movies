import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import './_movieAdditional.scss';
import BeatLoader from 'react-spinners/BeatLoader';

const MovieAdditional = () => {
  return (
    <div className="additionalBox">
      <h1 className="additionalTitle">Additional information</h1>
      <ul className="additionalList">
        <li>
          <NavLink className="additionalItem" to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className="additionalItem" to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<BeatLoader size={30} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieAdditional;
