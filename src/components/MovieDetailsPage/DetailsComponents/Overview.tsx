import React, { FC } from 'react';
import { MovieInfoDetails } from '../../../types';
import { AppText } from '../../shared/Text/AppText';

type OverviewProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const Overview: FC<OverviewProps> = (props) => {
  const { chosenMovieDetails } = props;
  const { overview } = chosenMovieDetails;
  return (
    <AppText text={overview} />
  );
};
