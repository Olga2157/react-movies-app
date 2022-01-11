import React, { FC } from 'react';
import { MovieInfoDetails } from '../../../types';
import { AppText } from '../../shared';

type OverviewProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const Overview: FC<OverviewProps> = ({ chosenMovieDetails }) => {
  const { overview } = chosenMovieDetails;
  return (
    <AppText text={overview} />
  );
};
