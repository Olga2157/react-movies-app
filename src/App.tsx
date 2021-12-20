import 'bootstrap/dist/css/bootstrap.min.css';
import React, { FC } from 'react';
import HomePage from './components/HomePage/HomePage';
import ErrorBoundary from './components/shared/ErrorBoundary';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
};
