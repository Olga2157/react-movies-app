import React, { FC } from 'react';
import { MovieInfoDetails } from '../../../types';

type DurationProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const Duration: FC<DurationProps> = ({ chosenMovieDetails }) => {
  const { runtime } = chosenMovieDetails;

  return (
    <p className="mt-2 text-danger fs-5">
      <strong id="movies-counter" className="fw-bold">
        {runtime}
      </strong>
      {' min'}
    </p>
  );
};
