import { NavLink, Outlet } from 'react-router-dom';
import './_movieAdditional.scss';

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
      <Outlet />
    </div>
  );
};
export default MovieAdditional;
