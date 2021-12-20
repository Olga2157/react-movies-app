import React, { FC, MouseEventHandler } from 'react';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import './FilterButton.css';

type FilterButtonProps = {
  buttonId: string;
  buttonText: string,
  listener?: MouseEventHandler<HTMLButtonElement>
}

export const FilterButton: FC<FilterButtonProps> = (props) => {
  const { buttonId, listener, buttonText } = props;
  const btnClass = classNames({
    btn: true,
    'text-uppercase': true,
    'btn-primary': true,
    'active w-auto': true,
    chosen: false,
    // 'btn-over': false,
  });
  return (
    <Button id={buttonId} color="dark" onClick={listener} data-bs-toggle="button" aria-pressed="true" autoComplete="off" className={btnClass}>{buttonText}</Button>
  );
};
