import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import Home from 'components/Home/Home';
// import MovieInfo from './MovieInfo/MovieInfo'
import SharedLayout from './SharedLayout/SharedLayout'
// import Movies from './Movies/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews'

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieInfo = lazy(() => import('./MovieInfo/MovieInfo'));


export const App = () => {
  return (

    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
            <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
      </>
  );
};
