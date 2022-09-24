import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from 'components/Home/Home';
import MovieInfo from './MovieInfo/MovieInfo'
import AppBar from './AppBar/AppBar'
import Movies from './Movies/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>
      <AppBar/>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
};
