import React, { FC } from 'react';
import classNames from 'classnames';
import { MovieInfo } from '../../../types';
import { AppText } from '../../shared/Text/AppText';
import './Movie.css';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { FontSize } from '../../../model/enums/FontSize';

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
    'p-2': true,
    'movie-details': true,
  });
  return (
    <>
      <div>
        <img src={posterPath} alt="poster" />
        <BurgerMenu movieInfo={movieInfo} />
      </div>
      <div className={movieClass}>
        <div>
          <AppText text={title} fontSize={FontSize.SMALL} />
        </div>
        <div>
          <AppText text={year.toString()} fontSize={FontSize.SMALL} />
        </div>
      </div>
      <div className="p-2">
        <AppText text={genre} fontSize={FontSize.EXTRA_SMALL} />
      </div>
    </>
  );
};
