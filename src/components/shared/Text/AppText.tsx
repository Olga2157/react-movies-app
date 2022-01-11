import React, { FC } from 'react';
import classNames from 'classnames';
import { FontSize } from '../../../model/enums/FontSize';
import './Text.scss';

type AppTextProps = {
  text: string | number,
  color?: string,
  fontSize?: FontSize,
}
export const AppText: FC<AppTextProps> = ({ text, color, fontSize }) => {

  const textClass = classNames(
    (fontSize ? `${fontSize}` : ''),
    (color ? `${color}-text` : ''),
  );

  return (
    <p className={textClass}>{text}</p>
  );
};
