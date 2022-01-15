import React, { FC } from 'react';
import classNames from 'classnames';
import { MovieInfo } from '../../../types';
import { AppText } from '../../shared';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { FontSize } from '../../../model/enums/FontSize';
import './Movie.scss';
import '../../../app.scss';

type MovieProps = {
  movieInfo: MovieInfo
};

export const Movie: FC<MovieProps> = ({ movieInfo }) => {
  const {
    title, genres, releaseDate, posterPath
  } = movieInfo;
    // api provided incorrect path for some posters
// https://media.istockphoto.com/vectors/cinema-and-movie-time-vector-id640312764
  // await ApiService.urlIsAvailable(posterPath)
  // if (posterPath === 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg') {
  //   posterPath = 'https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg';
  // }
  const movieClass = classNames('d-flex', 'flex-row', 'justify-content-between', 'p-2', 'movie-details');
  const year = releaseDate.substring(0, 4);
  let movieGenres = '';
  for (let i = 0; i < genres.length; i++) {
    movieGenres += genres[i] + " ";
  }
  const goToMovieDetails = (movie: MovieInfo) => {
    const homePage = document.getElementById('home-page');
    homePage?.classList.add('invisible');
    const movieDetailsPage = document.getElementById('movie-details-page');
    movieDetailsPage?.classList.remove('invisible');
  };
  return (
    <>
      <div>
        <img src={posterPath} onClick={() => goToMovieDetails(movieInfo)} alt="poster" />
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
