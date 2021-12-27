import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/shared/ErrorBoundary';
import { HomePage } from './components/HomePage/HomePage';
import { MovieDetailsPage } from './components/MovieDetailsPage/MovieDetailsPage';

export const App: FC = () => (
  <ErrorBoundary>
    {/* <HomePage /> */}
    <MovieDetailsPage />
  </ErrorBoundary>
);
