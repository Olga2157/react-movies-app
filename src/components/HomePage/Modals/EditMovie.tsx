import * as React from 'react';
import { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { MovieInfo } from '../../../types';
import Heading from '../../shared/Text/Heading';
import EditMovieForm from '../Forms/EditMovieForm';

const EditMovie: React.FC<{movieInfo: MovieInfo}> = (movieInfo) => {
  
  const [modal, setModal] = useState(false);
  const handleShow = () => setModal(!modal);

  return (
    <>
    <button type="button" onClick={handleShow} className="btn btn-light btn-block border-bottom m-0">Edit</button>
     
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
      <Heading headingText="EDIT MOVIE"/>
      </ModalHeader>
      <ModalBody>
        <EditMovieForm movieInfo={movieInfo.movieInfo} />
      </ModalBody>
    </Modal>
  </>
  );
};

export default EditMovie;
