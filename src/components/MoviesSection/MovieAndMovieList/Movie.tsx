import React, { FC } from 'react';
import classNames from 'classnames';
import { MovieInfoDetails } from '../../../types';
import { AppText } from '../../shared';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { FontSize } from '../../../model/enums/FontSize';
import './Movie.scss';
import '../../../app.scss';

type MovieProps = {
  movieInfo: MovieInfoDetails
};

export const Movie: FC<MovieProps> = ({ movieInfo }) => {
  const {
    title, genres, releaseDate, posterPath
  } = movieInfo;
  const movieClass = classNames('d-flex', 'flex-row', 'justify-content-between', 'p-2', 'movie-details');
  const year = releaseDate ? releaseDate.substring(0, 4) : 'n/a';
  let movieGenres = '';
  if (genres) {
    for (let i = 0; i < genres.length; i += 1) {
      movieGenres += `${genres[i]  } `;
    }
  }
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
        <AppText text={movieGenres} fontSize={FontSize.EXTRA_SMALL} />
      </div>
    </>
  );
};
