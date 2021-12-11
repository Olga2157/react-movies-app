import * as React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import AppButton from '../../shared/Buttons/AppButton';
import AddMovieForm from '../Forms/AddMovieForm';

const AddMovieModal: React.FC<{}> = () => {

  const [modal, setModal] = useState(false);
  const handleShow = () => setModal(!modal);

  return (
    <>
    <div>
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
        ADD MOVIE
      </ModalHeader>
      <ModalBody>
        <AddMovieForm/>
      </ModalBody>
    </Modal>
  </div>
  </>
  );
};

export default AddMovieModal;
