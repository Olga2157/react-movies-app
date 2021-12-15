import * as React from 'react';
import BurgerMenu from './BurgerMenu';

type MovieProps = {
  movieName: string;
  movieGenre: string;
  movieYear: number;
  moviePath: string;
};
type MovieState = {
};

class Movie extends React.Component<MovieProps, MovieState> {
  render() {
    const {
      moviePath, movieName, movieYear, movieGenre,
    } = this.props;
    return (
      <>
        <div>
          <img src={moviePath} alt="" />
          <BurgerMenu />
        </div>
        <div className="d-flex flex-row justify-content-between movie-details">
          <div className="p-2">
            <p>{movieName}</p>
          </div>
          <div className="p-2">{movieYear}</div>
        </div>
        <div className="p-2 movie-details-genre">
          <p>{movieGenre}</p>
        </div>
      </>
    );
  }
}

export default Movie;
