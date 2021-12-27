import React, { FC } from 'react';
import classNames from 'classnames';
import './Logo.css';

export const Logo: FC = () => {
  const logoClass = classNames({
    'text-right': true,
    'text-lowercase': true,
    'logo-message': true,
  });

  return (
    <p className={logoClass}>
      <strong>neetflix</strong>
      roulette
    </p>
  );
};
