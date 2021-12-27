import React, { FC } from 'react';
import { FontSize } from '../../../model/enums/FontSize';
import './Text.scss';

type AppTextProps = {
  text: string,
  color?: string,
  fontSize?: FontSize,
}
export const AppText: FC<AppTextProps> = (props) => {
  const { text, color, fontSize } = props;

  let textClass = '';

  if (fontSize) {
    textClass += `${fontSize} `;
  }

  if (color) {
    textClass += `${color}-text`;
  }

  return (
    <p className={textClass}>{text}</p>
  );
};
