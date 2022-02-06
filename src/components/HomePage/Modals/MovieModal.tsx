import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useToggle } from 'react-use';
import { ButtonType } from '../../../model/enums/ButtonType';
import { AppButton, Heading } from '../../shared';
import './Modal.scss';
import { MovieForm } from '../Forms/MovieForm';
import { MovieInfoDetails } from '../../../types';
import {getCurrentGenresCreator} from "../../../redux/actions/actionCreators/actionCreators";
import {useDispatch} from "react-redux";

export const MovieModal: FC<{
  newMovie: boolean,
  movieInfo?: MovieInfoDetails, onClickCallBack?: Function
}> = ({ newMovie,
  movieInfo, onClickCallBack }) => {
    const dispatch = useDispatch();
    const [isOpen, toggleModal] = useToggle(false);
    const onClick = () => {
      if (onClickCallBack) {
        onClickCallBack();
        dispatch(getCurrentGenresCreator(movieInfo ? movieInfo.genres : []));
      }
      toggleModal();
    };

    return (
      <div id="modal-movie">
        <AppButton buttonId={newMovie ? 'add-movie-btn' : 'edit-movie-btn'}
          listener={onClick}
          buttonText={newMovie ? '+ Add movie' : 'Edit'}
          buttonType={newMovie ? ButtonType.ADD_MOVIE : ButtonType.BURGER_MENU_ITEM} />
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
            <Heading headingText={newMovie ? 'ADD MOVIE' : 'EDIT MOVIE'} upperCase />
          </ModalHeader>
          <ModalBody>
            <MovieForm movieInfo={movieInfo} />
          </ModalBody>
        </Modal>
      </div>
    );
  };
