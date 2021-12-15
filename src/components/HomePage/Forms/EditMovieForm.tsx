import { FC } from 'react';
import {
  Button, Form, FormGroup, Input, Label,
} from 'reactstrap';
import { MovieInfo } from '../../../types';

export const EditMovieForm: FC<{movieInfo: MovieInfo}> = (movieInfo) => {
  const movieGenres = ['Action', 'Adventure', 'Animation',
    'Comedy', 'Drama', 'Family',
    'Fantasy', 'Horror', 'Music',
    'Mystery', 'Romance', 'Science Fiction',
    'Thriller'];
    // todo: this edit form will be updated with relevant data later (in next tasks)
  const { id, title } = movieInfo.movieInfo;
  return (
    <Form id="editMovieFormId">
      <FormGroup>
        <Label for="movieId">
          Movie ID
        </Label>
        <Input
          id="movieId"
          // type="textarea"
          placeholder={id.toString()}
          bsSize="sm"
          readonly="readonly"
        />
      </FormGroup>

      <FormGroup>
        <Label for="movieTitle">
          Title
        </Label>
        <Input
          id="movieTitle"
          type="textarea"
          placeholder={title}
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
          multiple
        >

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
          Save
        </Button>
      </div>

    </Form>
  );
};
