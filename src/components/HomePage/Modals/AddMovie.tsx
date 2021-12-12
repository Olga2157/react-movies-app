import * as React from 'react';
import { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import AppButton from '../../shared/Buttons/AppButton';
import Heading from '../../shared/Text/Heading';
import AddMovieForm from '../Forms/AddMovieForm';

const AddMovie: React.FC<{}> = () => {

  const [modal, setModal] = useState(false);
  const handleShow = () => setModal(!modal);

  return (
    <>
    <AppButton buttonId="add-movie-btn" listener={handleShow} buttonText="+ Add movie" />
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
        <Heading headingText="ADD MOVIE"/>
      </ModalHeader>
      <ModalBody>
        <AddMovieForm/>
      </ModalBody>
    </Modal>
  </>
  );
};

export default AddMovie;
