import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import './_movieAdditional.scss';
import BeatLoader from 'react-spinners/BeatLoader';

const MovieAdditional = () => {
  const location = useLocation();

  return (
    <div className="additionalBox">
      <h1 className="additionalTitle">Additional information</h1>
      <ul className="additionalList">
        <li>
          <NavLink
            state={{ from: location.state?.from }}
            className="additionalItem"
            to="cast"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            state={{ from: location.state?.from }}
            className="additionalItem"
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense
        fallback={
          <div className="classLoader">
            <BeatLoader size={30} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieAdditional;
