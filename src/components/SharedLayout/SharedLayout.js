import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavItem } from '../App.styled';
import './_appBar.scss';
import BeatLoader from 'react-spinners/BeatLoader';
import '../SharedLayout/_appBar.scss';

const SharedLayout = () => {
  return (
    <div className="mainContainer">
      <header className="headerNavPanel">
        <nav className="navigation">
          <NavItem end to="/">
            Home
          </NavItem>
          <NavItem to="movies">Movies</NavItem>
        </nav>
      </header>
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

export default SharedLayout;
