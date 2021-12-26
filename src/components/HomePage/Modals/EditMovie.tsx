import React, { FC, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { MovieInfo } from '../../../types';
import { AppButton, Heading } from '../../shared'
import { EditMovieForm } from '../Forms/EditMovieForm';
import { ButtonType } from '../../../model/enums/ButtonType';
import './Modal.scss';

export const EditMovie: FC<{movieInfo: MovieInfo}> = (props) => {
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
          <Heading headingText="EDIT MOVIE" upperCase={true} />
        </ModalHeader>
        <ModalBody>
          <EditMovieForm movieInfo={movieInfo} />
        </ModalBody>
      </Modal>
    </>
  );
};
