import React, { FC } from 'react';
import {
  Button, Form, FormGroup, Input, Label,
} from 'reactstrap';
import './Form.css';

export const AddMovieForm: FC = () => {
  const movieGenres = ['Action', 'Adventure', 'Animation',
    'Comedy', 'Drama', 'Family',
    'Fantasy', 'Horror', 'Music',
    'Mystery', 'Romance', 'Science Fiction',
    'Thriller'];

  return (
    <Form id="add-movie-form-id">
      <FormGroup>
        <Label for="movieTitle">
          Title
        </Label>
        <Input
          id="movieTitle"
          type="textarea"
          placeholder="Title here"
          bsSize="sm"
        />
      </FormGroup>

      <FormGroup>
        <Label for="releaseDate">
          Release Date
        </Label>
        <Input
          id="releaseDate"
          name="date"
          placeholder="Select Date"
          type="date"
        />
      </FormGroup>

      <FormGroup>
        <Label for="movieUrl">
          Movie URL
        </Label>
        <Input
          id="movieUrl"
          type="url"
          placeholder="Movie URL here"
          bsSize="sm"
        />
      </FormGroup>

      <FormGroup>
        <Label for="movieGenre">
          Genre
        </Label>
        <Input
          id="movieGenre"
          name="select"
          type="select"
          bsSize="sm"
          // multiple
        >
          <option value="" disabled selected className="display:none;">Select Genre</option>

          {movieGenres.map((genre) => (
            <option key={genre}>{genre}</option>
          ))}

        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="movieOverview">
          Overview
        </Label>
        <Input
          id="movieOverview"
          name="text"
          type="textarea"
          placeholder="Overview here"
          bsSize="sm"
        />
      </FormGroup>

      <FormGroup>
        <Label for="movieRuntime">
          Runtime
        </Label>
        <Input
          id="movieRuntime"
          type="textarea"
          // think: or better type="number" ?
          placeholder="Runtime here"
          bsSize="sm"
        />
      </FormGroup>

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
