import * as React from 'react';
import { MovieInfo } from '../../types';
import AppText from '../shared/Text/AppText';
import BurgerMenu from './BurgerMenu';

type MovieProps = {
  movieInfo: MovieInfo
};
type MovieState = {
};

class Movie extends React.Component<MovieProps, MovieState> {
  render() {
    const {
      posterPath, title, genre, year
      //  movieInfo
    } = this.props.movieInfo;

    return (
      <>
        <div>
          <img src={posterPath} alt="" />
          <BurgerMenu movieInfo={this.props.movieInfo} />
        </div>
        <div className="d-flex flex-row justify-content-between movie-details">
          <div className="p-2">
            <AppText text={title} />
          </div>
          <div className="p-2">
            <AppText text={year.toString()} /></div>
        </div>
        <div className="p-2 movie-details-genre">
          <AppText text={genre} />
        </div>
      </>
    );
  }
}

export default Movie;
