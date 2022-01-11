import React, { FC, MouseEventHandler } from 'react';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import { ButtonType } from '../../../model/enums/ButtonType';
import './AppButton.scss';

type AppButtonProps = {
  buttonId?: string;
  buttonText: string,
  buttonType?: ButtonType,
  buttonClass?: string,
  listener?: MouseEventHandler<HTMLButtonElement>
}
export const AppButton: FC<AppButtonProps> = ({
  buttonId, listener, buttonText, buttonType, buttonClass,
}) => {
  const btnClass = classNames({
    'text-uppercase': buttonType !== ButtonType.BURGER_MENU_ITEM,
    'burger-menu-btn': buttonType === ButtonType.BURGER_MENU || buttonType === ButtonType.BURGER_MENU_ITEM,
    'btn-light btn-block border-bottom m-0': buttonType === ButtonType.BURGER_MENU_ITEM,
    'add-movie-btn': buttonType === ButtonType.ADD_MOVIE,
    chosen: false,
  }, 'btn', 'btn-danger', buttonClass);
  return (
    <Button id={buttonId} type="button" onClick={listener} className={btnClass}>{buttonText}</Button>
  );
};
