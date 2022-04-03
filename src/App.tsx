import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/shared/ErrorBoundary';
import { HomePage } from './components/HomePage/HomePage';
import { MovieDetailsPage } from './components/MovieDetailsPage/MovieDetailsPage';
import { NotFoundPage } from './components/404/NotFoundPage';

export const App: FC = () => (
  <ErrorBoundary>
    <HomePage />
    {/* <MovieDetailsPage /> */}
    {/* <NotFoundPage/> */}
  </ErrorBoundary>
);
