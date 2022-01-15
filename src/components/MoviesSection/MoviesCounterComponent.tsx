import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { moviesDataSelector } from '../../redux/selector/selectors';

export const MoviesCounterComponent: FC = () => {

  const { totalAmount } = useSelector(moviesDataSelector);

  return (
    <p className="mt-2">
      <strong id="movies-counter" className="fw-bold">
        {totalAmount}
      </strong>
      {' movies found'}
    </p>
  );
};
