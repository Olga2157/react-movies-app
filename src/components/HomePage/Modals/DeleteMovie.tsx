import * as React from 'react';
import { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { MovieInfo } from '../../../types';
import DeleteMovieForm from '../Forms/DeleteMovieForm';

const DeleteMovie: React.FC<{movieInfo: MovieInfo}> = (movieInfo) => {
  
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
        DELETE MOVIE
      </ModalHeader>
      <ModalBody>
        <DeleteMovieForm movieInfo={movieInfo.movieInfo} />
      </ModalBody>
    </Modal>
  </>
  );
};

export default DeleteMovie;
