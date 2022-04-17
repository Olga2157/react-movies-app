import React, { FC } from 'react';
import { Heading } from '../shared';

export const NoMovie: FC = () => (
  <div className="d-flex justify-content-center py-5">
    <Heading headingText="No movie found" upperCase/>
  </div>
);
