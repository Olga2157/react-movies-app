import React, { FC } from 'react';
import { Form } from 'reactstrap';
import { MovieInfo } from '../../../types';
import { ResetButton, SubmitButton } from '../../shared';
import './Form.scss';
import { InputWithLabel } from './InputWithLabel';
import { SelectInputGenre } from './SelectInputGenre';

export const EditMovieForm: FC<{movieInfo: MovieInfo}> = (props) => {
  const { movieInfo } = props;
  const { id, title } = movieInfo;
  // todo: this edit form will be updated with relevant data later (in next tasks)
  return (
    <Form id="edit-movie-form-id">
      <InputWithLabel id="movieId" label="Movie ID" placeholder={id.toString()} size="sm" readonly />
      <InputWithLabel
        id="movieTitle"
        label="Title"
        type="textarea"
        placeholder={title}
        size="sm" />
      <InputWithLabel id="releaseDate" label="Release Date" name="date" type="date" placeholder="Select Date" />
      <InputWithLabel id="movieUrl" label="Movie URL" type="url" placeholder="Movie URL here" size="sm" />
      <SelectInputGenre />
      <InputWithLabel id="movieOverview" label="Overview" name="text" type="textarea" placeholder="Overview here" size="sm" />
      <InputWithLabel id="movieRuntime" label="Runtime" type="textarea" placeholder="Runtime here" size="sm" />
      <div className="d-flex justify-content-md-end">
        <ResetButton />
        <SubmitButton buttonText="Save" />
      </div>
    </Form>
  );
};
