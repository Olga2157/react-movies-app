import React, { FC, useCallback } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useToggle } from 'react-use';
import { MovieInfo } from '../../../types';
import { AppButton, Heading } from '../../shared'
import { EditMovieForm } from '../Forms/EditMovieForm';
import { ButtonType } from '../../../model/enums/ButtonType';
import './Modal.scss';

export const EditMovie: FC<{ movieInfo: MovieInfo, callBack: Function }> = (props) => {
  const [on, toggle] = useToggle(false);
  const onClick = useCallback(() => {
    props.callBack();
    toggle();
  }, [props.callBack, toggle]);
  const { movieInfo } = props;
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
          <Heading headingText="EDIT MOVIE" upperCase={true} />
        </ModalHeader>
        <ModalBody>
          <EditMovieForm movieInfo={movieInfo} />
        </ModalBody>
      </Modal>
    </>
  );
};
