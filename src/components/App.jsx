import { lazy } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { AppStyle } from "./App.styled";
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails/'));
// const Cast = lazy(() => import('./components/Cast'));
// const Reviews = lazy(() => import('./components/Reviews'));

export const App = () => {
  return (
    <div>
      <AppStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          {/* <Route path="movies/:movieId" element={<MovieDetails />}> */}
            {/* <Route path="cast" element={<Cast />} /> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
