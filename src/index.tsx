import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';
import './app.scss';
import './images/favicon.ico';

const root = document.getElementById('root');

ReactDom.render(<App />, root);
