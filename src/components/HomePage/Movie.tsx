import * as React from "react";
import BurgerMenu from "./BurgerMenu";

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
    return (
      <React.Fragment>
        <div>
          <img src={this.props.moviePath} alt="" />
          <BurgerMenu />
        </div>
        <div className="d-flex flex-row justify-content-between movie-details">
          <div className="p-2">
            <p>{this.props.movieName}</p>
          </div>
          <div className="p-2">{this.props.movieYear}</div>
        </div>
        <div className="p-2 movie-details-genre">
          <p>{this.props.movieGenre}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Movie;
