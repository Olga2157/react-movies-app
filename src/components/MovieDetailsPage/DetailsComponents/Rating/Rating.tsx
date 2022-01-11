import React, { FC } from 'react';
import { MovieInfoDetails } from '../../../../types';
import './Rating.scss';

type RatingProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const Rating: FC<RatingProps> = ({ chosenMovieDetails }) => {
  const { rating } = chosenMovieDetails;

  return (
    <div
      id="movie-rating"
      className="d-flex justify-content-center align-items-center
    text-center rounded-circle border-bottom-2 border"
    >
      {rating}
    </div>
  );
};
