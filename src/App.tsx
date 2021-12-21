import 'bootstrap/dist/css/bootstrap.min.css';
import React, { FC } from 'react';
import { HomePage } from './components/HomePage/HomePage';
import { MovieDetailsPage } from './components/MovieDetailsPage/MovieDetailsPage';
import ErrorBoundary from './components/shared/ErrorBoundary';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      {/* <HomePage /> */}
      <MovieDetailsPage />
    </ErrorBoundary>
  );
};
