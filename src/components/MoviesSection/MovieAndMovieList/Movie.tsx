import React, { FC } from 'react';
import classNames from 'classnames';
import { MovieInfo } from '../../../types';
import { AppText } from '../../shared';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { FontSize } from '../../../model/enums/FontSize';
import './Movie.scss';

type MovieProps = {
  movieInfo: MovieInfo
};

export const Movie: FC<MovieProps> = ({ movieInfo }) => {
  const {
    posterPath, title, genre, year,
  } = movieInfo;
  const movieClass = classNames('d-flex', 'flex-row', 'justify-content-between', 'p-2', 'movie-details');
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
          <AppText text={year} fontSize={FontSize.SMALL} />
        </div>
      </div>
      <div className="p-2">
        <AppText text={genre} fontSize={FontSize.EXTRA_SMALL} />
      </div>
    </>
  );
};
