import React, { FC } from 'react';
import classNames from 'classnames';
import './Text.scss';

type HeadingProps = {
  headingText: string,
  upperCase?: boolean
}

export const Heading: FC<HeadingProps> = (props) => {
  const { headingText, upperCase } = props;
  const headingClass = classNames(
    {
      'text-uppercase': upperCase,
    }
  );
  return (
    <h2 className={headingClass}>{headingText}</h2>
  );
};
