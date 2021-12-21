import React, { FC } from 'react';
import { MovieInfoDetails } from '../../../types';
import { AppText } from '../../shared/Text/AppText';

type TaglineProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const Tagline: FC<TaglineProps> = (props) => {
  const { chosenMovieDetails } = props;
  const { tagline } = chosenMovieDetails;
  return (
    <AppText text={tagline} />
  );
};
