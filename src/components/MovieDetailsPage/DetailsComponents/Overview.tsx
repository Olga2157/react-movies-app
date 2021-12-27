import React, { FC } from 'react';
import { MovieInfoDetails } from '../../../types';
import { AppText } from '../../shared';

type OverviewProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const Overview: FC<OverviewProps> = function (props) {
  const { chosenMovieDetails } = props;
  const { overview } = chosenMovieDetails;
  return (
    <AppText text={overview} />
  );
};
