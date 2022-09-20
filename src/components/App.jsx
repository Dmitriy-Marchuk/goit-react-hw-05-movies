import { useState, useEffect } from 'react';
// import './_app.scss';
import * as API from '../services/api';
import HeaderNav from './HeaderNav/HeaderNav';
import { Routes, Route } from 'react-router-dom';

export const App = () => {

  useEffect(() => {
    API.getFetchFilms().then(console.log)
  },[])
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderNav />}>
        </Route>
      </Routes>
    </>
  );
};
