import React, { FC } from 'react';
import { Logo } from './Logo';

export const Footer: FC = function () {
  const footerClass = 'text-center';
  const marginClass = 'mt-2';

  return (
    <footer className={footerClass}>
      <div className={marginClass}>
        <Logo />
      </div>
    </footer>
  );
};
