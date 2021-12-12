import * as React from 'react';
import { MovieInfo } from '../../types';
import BurgerMenu from './BurgerMenu';

type MovieProps = {
  // movieName: string;
  // movieGenre: string;
  // movieYear: number;
  // moviePath: string;
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
          <BurgerMenu movieInfo={this.props.movieInfo}/>
        </div>
        <div className="d-flex flex-row justify-content-between movie-details">
          <div className="p-2">
            <p>{title}</p>
          </div>
          <div className="p-2">{year}</div>
        </div>
        <div className="p-2 movie-details-genre">
          <p>{genre}</p>
        </div>
      </>
    );
  }
}

export default Movie;
