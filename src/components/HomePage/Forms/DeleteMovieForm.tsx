import React, { FC } from 'react';
import { Form } from 'reactstrap';
import { MovieInfo } from '../../../types';
import { SubmitButton } from '../../shared';
import './Form.scss';

export const DeleteMovieForm: FC<{ movieInfo: MovieInfo }> = () =>
// todo: add function for confirm button onclick
// delete movie from db for id = {movieInfo.movieInfo.id.toString()}
// update data in the next tasks with State and Redux
(
  <Form id="DeleteMovieFormId" className="text-right">
    <SubmitButton buttonText="Confirm" />
  </Form>
);
