import React, { FC, FormEvent } from 'react';
import { Form } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { MovieInfo } from '../../../types';
import { SubmitButton } from '../../shared';
import './Form.scss';
import { deleteMovieCreator } from '../../../redux/actions/actionCreators/actionCreators';

export const DeleteMovieForm: FC<{ movieInfo: MovieInfo }> = ({ movieInfo }) => {

    const dispatch = useDispatch();
    const submit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(deleteMovieCreator(movieInfo.id));
    }

    return (
        <Form id="DeleteMovieFormId" className="text-right" onSubmit={e => { submit(e); }}>
            <SubmitButton buttonText="Confirm" />
        </Form>
    );
}
