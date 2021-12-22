import React, { FC, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { ButtonType } from '../../../model/enums/ButtonType';
import { AppButton } from '../../shared/Buttons/AppButton';
import { Heading } from '../../shared/Text/Heading';
import { AddMovieForm } from '../Forms/AddMovieForm';
import './Modal.scss';

export const AddMovie: FC = () => {
  const [modal, setModal] = useState(false);
  const handleShow = () => setModal(!modal);

  return (
    <>
      <AppButton buttonId="add-movie-btn" listener={handleShow} buttonText="+ Add movie" buttonType={ButtonType.ADD_MOVIE} />
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
          <Heading headingText="ADD MOVIE" upperCase={true} />
        </ModalHeader>
        <ModalBody>
          <AddMovieForm />
        </ModalBody>
      </Modal>
    </>
  );
};
