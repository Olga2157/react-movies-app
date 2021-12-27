import React, { FC, MouseEventHandler } from 'react';
import { Button } from 'reactstrap';
import classNames from 'classnames';
import './AppButton.css';
import { ButtonType } from '../../../model/enums/ButtonType';

type AppButtonProps = {
  buttonId?: string;
  buttonText: string,
  buttonType?: ButtonType,
  listener?: MouseEventHandler<HTMLButtonElement>
}
export const AppButton: FC<AppButtonProps> = (props) => {
  const { buttonId, listener, buttonText, buttonType } = props;
  const btnClass = classNames(
    {
      btn: true,
      'text-uppercase': buttonType !== ButtonType.BURGER_MENU_ITEM,
      'btn-danger': true,
      'burger-menu-btn': buttonType === ButtonType.BURGER_MENU || buttonType === ButtonType.BURGER_MENU_ITEM,
      'btn-light btn-block border-bottom m-0': buttonType === ButtonType.BURGER_MENU_ITEM,
      'add-movie-btn': buttonType === ButtonType.ADD_MOVIE,
      chosen: false,
      // 'btn-over': false,
    },
  );
  return (
    <Button id={buttonId} type="button" onClick={listener} className={btnClass}>{buttonText}</Button>
  );
};
