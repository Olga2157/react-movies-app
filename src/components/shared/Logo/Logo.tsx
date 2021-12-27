import React, { FC } from 'react';
import classNames from 'classnames';
import './Logo.scss';

export const Logo: FC = function () {
  const logoClass = classNames('text-right', 'text-lowercase', 'logo-message');

  return (
    <p className={logoClass}>
      <strong>neetflix</strong>
      roulette
    </p>
  );
};
