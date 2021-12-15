import { FC, MouseEventHandler } from 'react';
import { Button } from 'reactstrap';

type AppButtonProps = {
  buttonId: string;
  buttonText: string,
  listener?: MouseEventHandler<HTMLButtonElement>
}
export const AppButton: FC<AppButtonProps> = (props) => {
  const { buttonId, listener, buttonText } = props;
  return (
    <Button id={buttonId} onClick={listener} color="danger" className="text-uppercase">{buttonText}</Button>
  );
}
