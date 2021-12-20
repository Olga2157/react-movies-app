import React, { FC, useState } from 'react';
import {
  Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { ButtonType } from '../../../model/enums/ButtonType';
import { MovieInfo } from '../../../types';
import { AppButton } from '../../shared/Buttons/AppButton';
import { AppText } from '../../shared/Text/AppText';
import { Heading } from '../../shared/Text/Heading';
import { DeleteMovieForm } from '../Forms/DeleteMovieForm';
import './Modal.css';

export const DeleteMovie: FC<{ movieInfo: MovieInfo }> = function (props) {
  const [modal, setModal] = useState(false);
  const handleShow = () => setModal(!modal);
  const { movieInfo } = props;
  return (
    <>
      <AppButton listener={handleShow} buttonText="Delete" buttonType={ButtonType.BURGER_MENU_ITEM} />
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
          <Heading headingText="DELETE MOVIE" />
        </ModalHeader>
        <ModalBody>
          <AppText text="Are you shure you want to delete this movie?" />
        </ModalBody>
        <ModalFooter>
          <DeleteMovieForm movieInfo={movieInfo} />
        </ModalFooter>
      </Modal>
    </>
  );
};
