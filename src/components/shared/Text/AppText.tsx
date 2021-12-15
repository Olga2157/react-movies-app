import { FC } from 'react';

type AppTextProps = {
  textClass?: string,
  text: string
}
export const AppText: FC<AppTextProps> = (props) => {
  const { textClass, text } = props;
  return (
    <p className={textClass}>{text}</p>
  );
};
