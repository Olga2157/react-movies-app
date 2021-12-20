import React, { FC } from 'react';

type AppTextProps = {
  text: string
}
export const AppText: FC<AppTextProps> = (props) => {
  const { text } = props;
  return (
    <p>{text}</p>
  );
};
