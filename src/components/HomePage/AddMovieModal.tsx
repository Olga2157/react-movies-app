import * as React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import AppButton from '../shared/Buttons/AppButton';

const AddMovieModal: React.FC<{}> = () => {

  const [modal, setModal] = useState(false);
  const handleShow = () => setModal(!modal);
  const resetFunction = () => {
    // todo: add logic later
  }
  const submitFunction = () => {
    // todo: add logic later
  }

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
        {/* todo: add form */}
      </ModalBody>
      <ModalFooter>
        <Button type="reset"
          color="outline-danger"  className="text-uppercase"
          onClick={resetFunction}
        >
          Reset
        </Button>
        <Button type="submit"
          color="danger"  className="text-uppercase"
          onClick={submitFunction}
        >
          Submit
        </Button>
        {/* <AppButton buttonId="submit-btn" listener={submitFunction} buttonText="Submit" /> */}
      </ModalFooter>
    </Modal>
  </div>
  </>
  );
};

export default AddMovieModal;
