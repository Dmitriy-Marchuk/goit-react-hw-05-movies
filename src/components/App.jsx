import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from 'components/Home/Home';
import {NavItem} from './App.styled';
import './_app.scss';
import MovieInfo from './MovieInfo/MovieInfo'

export const App = () => {
  return (
    <>
    <nav className='HeaderNavPanel'>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Movies</NavItem>
    </nav>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/movies/:movieId" element={<MovieInfo />}>
            
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
