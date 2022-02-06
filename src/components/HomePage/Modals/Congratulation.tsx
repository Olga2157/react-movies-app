import React, { FC } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { AppText, Heading } from '../../shared';
import './Modal.scss';
import { toggleCurrentGenresCreator } from "../../../redux/actions/actionCreators/actionCreators";
import { congratsModalStatusSelector } from "../../../redux/selector/selectors";

export const Congratulation: FC = () => {
    const dispatch = useDispatch();
    const open = useSelector(congratsModalStatusSelector);
    const toggleModal = () => {
        dispatch(toggleCurrentGenresCreator());
    }

    return (
        <Modal
            backdrop={false}
            centered
            fullscreen="md"
            scrollable
            size="md"
            className="special-modal"
            isOpen={open}
        >
            <ModalHeader toggle={toggleModal}>
                <div className="d-flex flex-row align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#f65261"
                         className="bi bi-check-circle-fill m-2" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <Heading headingText="Congratulations!" upperCase/>
                </div>

            </ModalHeader>
            <ModalBody>
                <AppText text="The movie has been added to database successfully"/>
            </ModalBody>
        </Modal>
    );
};