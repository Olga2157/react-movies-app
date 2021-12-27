import React, { FC } from 'react';
import {
  Button, Form, FormGroup, Input, Label,
} from 'reactstrap';
import './Form.scss';
import { InputWithLabel } from './InputWithLabel';
import { SelectInputGenre } from './SelectInputGenre';

export const AddMovieForm: FC = () => {

  return (
    <Form id="add-movie-form-id">

      <InputWithLabel id="movieTitle" label="Title" type="textarea"
        placeholder="Title here" size="sm" />
      <InputWithLabel id="releaseDate" label="Release Date" name="date" type="date" placeholder="Select Date" />
      <InputWithLabel id="movieUrl" label="Movie URL" type="url" placeholder="Movie URL here" size="sm" />
      <SelectInputGenre />
      <InputWithLabel id="movieOverview" label="Overview" name="text" type="textarea" placeholder="Overview here" size="sm" />
      <InputWithLabel id="movieRuntime" label="Runtime" type="textarea" placeholder="Runtime here" size="sm" />
      {/* tothink: or better type="number" ? */}

      <div className="d-flex justify-content-md-end">
        <Button
          type="reset"
          color="outline-danger"
          className="text-uppercase"
        >
          Reset
        </Button>
        <Button
          type="submit"
          color="danger"
          className="text-uppercase"
        >
          Submit
        </Button>
      </div>

    </Form>
  );
};
