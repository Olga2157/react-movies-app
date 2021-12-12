import * as React from 'react';
import Logo from './Logo';

const Header: React.FC<{}> = function () {
  return (
    <header>
      <Logo />
    </header>
  );
};

export default Header;
