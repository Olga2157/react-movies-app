import React, { FC } from 'react';

type HeadingProps = {
  headingText: string
}

export const Heading: FC<HeadingProps> = ({ headingText }) => {
  return (
    <h2 className="text-uppercase">{headingText}</h2>
  );
};
