
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HomePage from "./components/HomePage/HomePage";
import ErrorBoundary from './components/shared/ErrorBoundary';

class App extends React.Component {

  render() {
      return (
        <ErrorBoundary>
          <HomePage/>
        </ErrorBoundary>
      );
  }
}

export default App;
