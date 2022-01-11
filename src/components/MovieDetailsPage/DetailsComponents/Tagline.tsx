import React, { FC } from 'react';
import { MovieInfoDetails } from '../../../types';
import { AppText } from '../../shared';

type TaglineProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const Tagline: FC<TaglineProps> = ({ chosenMovieDetails }) => {
  const { tagline } = chosenMovieDetails;
  return (
    <AppText text={tagline} />
  );
};
