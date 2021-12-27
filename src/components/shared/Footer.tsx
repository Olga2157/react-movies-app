import React, { FC } from 'react';
import { Logo } from '.';
import './Footer.scss';

export const Footer: FC = () => {
  return (
    <footer className="text-center">
      <div className="mt-2">
        <Logo />
      </div>
    </footer>
  );
};
