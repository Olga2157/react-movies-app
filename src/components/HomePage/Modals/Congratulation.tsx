import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { AppText, Heading } from '../../shared';
import './Modal.scss';
import { toggleCurrentGenresCreator } from '../../../redux/actions/actionCreators/actionCreators';
import { congratsModalStatusSelector } from '../../../redux/selector/selectors';
import SvgCircleIcon from "../../../images/checkCircle.svg";

export const Congratulation: FC = () => {
    const dispatch = useDispatch();
    const open = useSelector(congratsModalStatusSelector);
    const toggleModal = () => {
        dispatch(toggleCurrentGenresCreator());
    };

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
                    <img src={SvgCircleIcon} alt="done"></img>
                    {/* importing svg as an image */}
                    <Heading headingText="Congratulations!" upperCase />
                </div>
            </ModalHeader>
            <ModalBody>
                <AppText text="The movie has been added to database successfully" />
            </ModalBody>
        </Modal>
    );
};
