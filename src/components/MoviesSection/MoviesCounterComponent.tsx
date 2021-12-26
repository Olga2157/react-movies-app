import React, { FC } from 'react';

export const MoviesCounterComponent: FC = () => {
  const moviesCounter = '15';
  // mock data, later it will be data from (db results)

  return (
    <p className="mt-2">
      <strong id="movies-counter" className="fw-bold">
        {moviesCounter}
      </strong>
      {' movies found'}
    </p>
  );
};
