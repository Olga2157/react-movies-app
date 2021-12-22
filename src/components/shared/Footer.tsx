import React, { FC } from 'react';
import classNames from 'classnames';
import { Logo } from './Logo/Logo';
import './Footer.scss';

export const Footer: FC = () => {
  const footerClass = classNames({
    'text-center': true,
  });
  const marginClass = 'mt-2';

  return (
    <footer className={footerClass}>
      <div className={marginClass}>
        <Logo />
      </div>
    </footer>
  );
};
