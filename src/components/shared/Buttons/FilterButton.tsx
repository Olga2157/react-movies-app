import React, { FC, MouseEventHandler } from 'react';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import './FilterButton.scss';

type FilterButtonProps = {
  buttonId: string;
  buttonText: string,
  listener?: MouseEventHandler<HTMLButtonElement>
}

export const FilterButton: FC<FilterButtonProps> = (props) => {
  const { buttonId, listener, buttonText } = props;
  const btnClass = classNames('btn', 'text-uppercase', 'btn-primary', 'active w-auto');
  return (
    <Button id={buttonId} color="dark" onClick={listener} data-bs-toggle="button" aria-pressed="true" autoComplete="off" className={btnClass}>{buttonText}</Button>
  );
};
