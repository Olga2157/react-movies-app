import React, { FC } from 'react';
import { MovieInfoDetails } from '../../../types';
import './Cover.scss';

type CoverProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const Cover: FC<CoverProps> = (props) => {
  const { chosenMovieDetails } = props;
  const { posterPath } = chosenMovieDetails;
  return (
    <div>
      <img src={posterPath} alt="poster" />
    </div>
  );
};
