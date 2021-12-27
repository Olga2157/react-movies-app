import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useToggle } from 'react-use';
import { ButtonType } from '../../../model/enums/ButtonType';
import { AppButton, Heading } from '../../shared';
import { AddMovieForm } from '../Forms/AddMovieForm';
import './Modal.scss';

export const AddMovie: FC = () => {
  const [on, toggle] = useToggle(false);

  return (
    <>
      <AppButton buttonId="add-movie-btn" listener={toggle} buttonText="+ Add movie" buttonType={ButtonType.ADD_MOVIE} />
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
          <Heading headingText="ADD MOVIE" upperCase />
        </ModalHeader>
        <ModalBody>
          <AddMovieForm />
        </ModalBody>
      </Modal>
    </>
  );
};
