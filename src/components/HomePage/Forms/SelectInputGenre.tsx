import React, { FC } from 'react';
import {
  FormGroup, Input, Label,
} from 'reactstrap';
import './Form.scss';

export const SelectInputGenre: FC<{ defaultSelected?: string[],
    onChangeCallBack: Function }> = ({ defaultSelected, onChangeCallBack }) => {
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
        multiple
        onInput={e => {
            const selectedOptions = Array.from((e.target as HTMLSelectElement).selectedOptions);
            onChangeCallBack(selectedOptions.map(item => item.text));
        }
        }
      >
        <option value="" disabled className="display:none;">Select Genre</option>
        {movieGenres.map((genre) => (
          <option key={genre} selected={defaultSelected?.includes(genre)}>{genre}</option>
        ))}
      </Input>
    </FormGroup>
  );
};
