import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import './app.scss';
import './images/favicon.ico';
import store from './store';

const root = document.getElementById('root');

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
