import React, { FC } from 'react';
import {
  FormGroup, Input, Label,
} from 'reactstrap';
import './Form.scss';

export const SelectInputGenre: FC = () => {
  const movieGenres = ['Action', 'Adventure', 'Animation',
    'Comedy', 'Drama', 'Family',
    'Fantasy', 'Horror', 'Music',
    'Mystery', 'Romance', 'Science Fiction',
    'Thriller'];

  return (
    <FormGroup>
      <Label for="movieGenre">
        Genre
      </Label>
      <Input
        id="movieGenre"
        name="select"
        type="select"
        bsSize="sm"
      >
        <option value="" disabled selected className="display:none;">Select Genre</option>

        {movieGenres.map((genre) => (
          <option key={genre}>{genre}</option>
        ))}
      </Input>
    </FormGroup>
  );
};
