import React, { FC } from 'react';
import { FontSize } from '../../../model/enums/FontSize';
import { MovieInfoDetails } from '../../../types';
import { AppText } from '../../shared';

type ReleaseYearProps = {
  chosenMovieDetails: MovieInfoDetails
};

export const ReleaseYear: FC<ReleaseYearProps> = ({ chosenMovieDetails }) => {
  const { releaseDate } = chosenMovieDetails;
  const year = releaseDate.substring(0, 4);
  return (
    <AppText text={year} color="red" fontSize={FontSize.MEDIUM} />
  );
};
