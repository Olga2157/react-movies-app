import React, { FC } from 'react';
import { FontSize } from '../../../model/enums/FontSize';
import { MovieInfoDetails } from '../../../types';
import { AppText } from '../../shared';

type ReleaseYearProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const ReleaseYear: FC<ReleaseYearProps> = function (props) {
  const { chosenMovieDetails } = props;
  const { year } = chosenMovieDetails;
  return (
    <AppText text={year.toString()} color="red" fontSize={FontSize.MEDIUM} />
  );
};
