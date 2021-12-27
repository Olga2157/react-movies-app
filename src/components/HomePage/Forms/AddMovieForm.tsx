import React, { FC } from 'react';
import { Form } from 'reactstrap';
import { ResetButton, SubmitButton } from '../../shared';
import './Form.scss';
import { InputWithLabel } from './InputWithLabel';
import { SelectInputGenre } from './SelectInputGenre';

export const AddMovieForm: FC = function () {
  return (
    <Form id="add-movie-form-id">

      <InputWithLabel
        id="movieTitle"
        label="Title"
        type="textarea"
        placeholder="Title here"
        size="sm"
      />
      <InputWithLabel id="releaseDate" label="Release Date" name="date" type="date" placeholder="Select Date" />
      <InputWithLabel id="movieUrl" label="Movie URL" type="url" placeholder="Movie URL here" size="sm" />
      <SelectInputGenre />
      <InputWithLabel id="movieOverview" label="Overview" name="text" type="textarea" placeholder="Overview here" size="sm" />
      <InputWithLabel id="movieRuntime" label="Runtime" type="textarea" placeholder="Runtime here" size="sm" />
      {/* tothink: or better type="number" ? */}
      <div className="d-flex justify-content-md-end">
        <ResetButton />
        <SubmitButton buttonText="Submit" />
      </div>
    </Form>
  );
};
