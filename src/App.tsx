import React, { FC } from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/shared/ErrorBoundary';
import { HomePage } from './components/HomePage/HomePage';
import { MovieDetailsPage } from './components/MovieDetailsPage/MovieDetailsPage';
import { NotFoundPage } from './components/404/NotFoundPage';

export const App: FC = () => (
  <ErrorBoundary>
    <Router>
      <Switch>
        <Route path="/film/:id" component={ MovieDetailsPage } />
        <Route path="/search" component={ HomePage } />
        <Route exact path="/" component={ HomePage } />
        <Route path="*" component={ NotFoundPage } />
      </Switch>
    </Router>
  </ErrorBoundary>
);
