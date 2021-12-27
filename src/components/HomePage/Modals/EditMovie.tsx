import React, { FC, useCallback } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useToggle } from 'react-use';
import { MovieInfo } from '../../../types';
import { AppButton, Heading } from '../../shared';
import { EditMovieForm } from '../Forms/EditMovieForm';
import { ButtonType } from '../../../model/enums/ButtonType';
import './Modal.scss';

export const EditMovie: FC<{ movieInfo: MovieInfo, callBack: Function }> = function (props) {
  const { movieInfo, callBack } = props;
  const [on, toggle] = useToggle(false);
  const onClick = useCallback(() => {
    callBack();
    toggle();
  }, [callBack, toggle]);
  
  return (
    <>
      <AppButton listener={onClick} buttonText="Edit" buttonType={ButtonType.BURGER_MENU_ITEM} />
      <Modal
        backdrop={false}
        centered
        fullscreen="md"
        scrollable
        size="md"
        className="special-modal"
        isOpen={on}
      >
        <ModalHeader toggle={toggle}>
          <Heading headingText="EDIT MOVIE" upperCase />
        </ModalHeader>
        <ModalBody>
          <EditMovieForm movieInfo={movieInfo} />
        </ModalBody>
      </Modal>
    </>
  );
};
