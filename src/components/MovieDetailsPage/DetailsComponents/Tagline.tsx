import React, { FC } from 'react';
import { MovieInfoDetails } from '../../../types';
import { AppText } from '../../shared';

type TaglineProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const Tagline: FC<TaglineProps> = function (props) {
  const { chosenMovieDetails } = props;
  const { tagline } = chosenMovieDetails;
  return (
    <AppText text={tagline} />
  );
};
