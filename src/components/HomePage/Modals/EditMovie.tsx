import React, { FC, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { MovieInfo } from '../../../types';
import { Heading } from '../../shared/Text/Heading';
import { EditMovieForm } from '../Forms/EditMovieForm';
import { ButtonType } from '../../../model/enums/ButtonType';
import { AppButton } from '../../shared/Buttons/AppButton';
import './Modal.css';

export const EditMovie: FC<{movieInfo: MovieInfo}> = function (props) {
  const [modal, setModal] = useState(false);
  const handleShow = () => setModal(!modal);
  const { movieInfo } = props;
  return (
    <>
      <AppButton listener={handleShow} buttonText="Edit" buttonType={ButtonType.BURGER_MENU_ITEM} />
      <Modal
        backdrop={false}
        centered
        fullscreen="md"
        scrollable
        size="md"
        className="special-modal"
        isOpen={modal}
      >
        <ModalHeader toggle={handleShow}>
          <Heading headingText="EDIT MOVIE" />
        </ModalHeader>
        <ModalBody>
          <EditMovieForm movieInfo={movieInfo} />
        </ModalBody>
      </Modal>
    </>
  );
};
