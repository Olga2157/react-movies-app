import React, { FC } from 'react';
import { Form } from 'reactstrap';
import { MovieInfo } from '../../../types';
import { ResetButton, SubmitButton } from '../../shared';
import './Form.scss';
import { InputWithLabel } from './InputWithLabel';
import { SelectInputGenre } from './SelectInputGenre';

export const MovieForm: FC<{ movieInfo?: MovieInfo }> = ({ movieInfo }) => {
  let existedId = 0;
  let title = '';
  if (movieInfo) {
    ({ id: existedId, title } = movieInfo);
  }
  // todo: edit form will be updated with relevant data later (in next tasks)
  return (
    <Form id={existedId ? 'edit-movie-form-id' : 'add-movie-form-id'}>
      {existedId ? <InputWithLabel id='movieId' label='Movie ID' placeholder={existedId.toString()} size='sm' readonly /> : ''}
      <InputWithLabel
        id="movieTitle"
        label="Title"
        type="textarea"
        placeholder={existedId ? title : 'Title here'}
        size="sm" />
      <InputWithLabel id="releaseDate" label="Release Date" name="date" type="date" placeholder="Select Date" />
      <InputWithLabel id="movieUrl" label="Movie URL" type="url" placeholder="Movie URL here" size="sm" />
      <SelectInputGenre />
      <InputWithLabel id="movieOverview" label="Overview" name="text" type="textarea" placeholder="Overview here" size="sm" />
      <InputWithLabel id="movieRuntime" label="Runtime" type="number" placeholder="Runtime here" size="sm" />
      <div className="d-flex justify-content-md-end">
        <ResetButton />
        <SubmitButton buttonText={existedId ? 'Save' : 'Submit'} />
      </div>
    </Form>
  );
};
