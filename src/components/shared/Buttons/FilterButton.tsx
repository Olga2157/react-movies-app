import { FC, MouseEventHandler } from 'react';
import { Button } from 'reactstrap';

type FilterButtonProps = {
  buttonId: string;
  buttonText: string,
  listener?: MouseEventHandler<HTMLButtonElement>
}

export const FilterButton: FC<FilterButtonProps> = (props) => {
  const { buttonId, listener, buttonText } = props;
  return (
    <Button id={buttonId} color="dark" onClick={listener} data-bs-toggle="button" aria-pressed="true" autoComplete="off" className="text-uppercase btn btn-primary  active w-auto">{buttonText}</Button>
  );
};
