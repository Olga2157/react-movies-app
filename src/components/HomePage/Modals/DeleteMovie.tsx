import React, { FC, useState } from 'react';
import {
  Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { MovieInfo } from '../../../types';
import { AppText } from '../../shared/Text/AppText';
import { Heading } from '../../shared/Text/Heading';
import { DeleteMovieForm } from '../Forms/DeleteMovieForm';

export const DeleteMovie: FC<{ movieInfo: MovieInfo }> = function (movieInfo) {
  const [modal, setModal] = useState(false);
  const handleShow = () => setModal(!modal);

  return (
    <>
      <button type="button" onClick={handleShow} className="btn btn-light btn-block border-bottom m-0">Delete</button>

      <Modal
        backdrop={false}
        centered
        fullscreen="md"
        scrollable
        size="md"
        className="my-modal"
        isOpen={modal}
      >
        <ModalHeader toggle={handleShow}>
          <Heading headingText="DELETE MOVIE" />
        </ModalHeader>
        <ModalBody>
          <AppText text="Are you shure you want to delete this movie?" />
        </ModalBody>
        <ModalFooter>
          <DeleteMovieForm movieInfo={movieInfo.movieInfo} />
        </ModalFooter>
      </Modal>
    </>
  );
};
