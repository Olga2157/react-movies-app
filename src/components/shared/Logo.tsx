import * as React from 'react';

const Logo: React.FC<{}> = function () {
  const logoClass = 'text-right  text-lowercase logo-message';
  const boldClass = 'fw-bold';

  return (
    <p className={logoClass}>
      <strong className={boldClass}>neetflix</strong>
      roulette
    </p>
  );
};

export default Logo;
