import React, { FC, useCallback } from 'react';
import {
  Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { useToggle } from 'react-use';
import { ButtonType } from '../../../model/enums/ButtonType';
import { MovieInfo } from '../../../types';
import { AppButton, AppText, Heading } from '../../shared';
import { DeleteMovieForm } from '../Forms/DeleteMovieForm';
import './Modal.scss';

export const DeleteMovie: FC<{ movieInfo: MovieInfo, 
  onClickCallBack: Function }> = ({ movieInfo, onClickCallBack }) => {
  const [isOpen, toggleModal] = useToggle(false);
  const onClick = useCallback(() => {
    onClickCallBack();
    toggleModal();
  }, [onClickCallBack, toggleModal]);

  return (
    <>
      <AppButton listener={onClick} buttonText="Delete" buttonType={ButtonType.BURGER_MENU_ITEM} />
      <Modal
        backdrop={false}
        centered
        fullscreen="md"
        scrollable
        size="md"
        className="special-modal"
        isOpen={isOpen}
      >
        <ModalHeader toggle={toggleModal}>
          <Heading headingText="DELETE MOVIE" upperCase />
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
