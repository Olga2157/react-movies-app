import React, { FC } from 'react';
import classNames from 'classnames';
import { MovieInfo } from '../../../types';
import { AppText } from '../../shared/Text/AppText';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Movie.css';

type MovieProps = {
  movieInfo: MovieInfo
};

export const Movie: FC<MovieProps> = function (props) {
  const { movieInfo } = props;
  const {
    posterPath, title, genre, year,
  } = movieInfo;
  const movieClass = classNames({
    'd-flex': true,
    'flex-row': true,
    'justify-content-between': true,
    'movie-details': true,
  });
  return (
    <>
      <div>
        <img src={posterPath} alt="poster" />
        <BurgerMenu movieInfo={movieInfo} />
      </div>
      <div className={movieClass}>
        <div className="p-2">
          <AppText text={title} />
        </div>
        <div className="p-2">
          <AppText text={year.toString()} />
        </div>
      </div>
      <div className="p-2 movie-details-genre">
        <AppText text={genre} />
      </div>
    </>
  );
};
