import React, { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'reactstrap';
import { addMovieCreator, updateMovieCreator } from '../../../redux/actions/actionCreators/actionCreators';
import { MovieInfoDetails } from '../../../types';
import { ResetButton, SubmitButton } from '../../shared';
import './Form.scss';
import { InputWithLabel } from './InputWithLabel';
import { SelectInputGenre } from './SelectInputGenre';

export const MovieForm: FC<{ movieInfo?: MovieInfoDetails }> = ({ movieInfo }) => {
  const dispatch = useDispatch();

  const submit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    // todo check if mandatory fields filled
    const title = (document.getElementById('movieTitle') as HTMLTextAreaElement).value;
    const releaseDate = (document.getElementById('releaseDate') as HTMLInputElement).value;
    const posterPath = (document.getElementById('movieUrl') as HTMLInputElement).value;
    const runtime = Number((document.getElementById('movieRuntime') as HTMLInputElement).value);
    const overview = (document.getElementById('movieOverview') as HTMLTextAreaElement).value;
    const movieGenresSelecter = (document.getElementById('movieGenre') as HTMLSelectElement);
    const movieOptions = Array.prototype.filter.apply(
      movieGenresSelecter.options,
      [(option) => option.selected && option.value !== '']
    ) as HTMLOptionElement[];
    const genres = movieOptions.map(e => e.value);
    if (movieInfo?.id) {
      dispatch(updateMovieCreator({
        'id': movieInfo.id,
        title,
        releaseDate,
        posterPath,
        runtime,
        overview,
        genres
      }));
    } else {
      dispatch(addMovieCreator({
        title,
        releaseDate,
        posterPath,
        runtime,
        overview,
        genres
      }));
    }
  };

  let existedId = 0;
  let title = '';
  let releaseDate = '';
  let posterPath = '';
  let overview = '';
  let genres: string[] = [];
  let runtime = 0;
  if (movieInfo) {
    ({ id: existedId, title, releaseDate, posterPath, overview, runtime, genres } = movieInfo);
  }
  return (
    <Form id={existedId ? 'edit-movie-form-id' : 'add-movie-form-id'} onSubmit={e => { submit(e); }}>
      {existedId ? <InputWithLabel id='movieId' label='Movie ID' placeholder={existedId.toString()} size='sm' readonly /> : ''}
      <InputWithLabel
        id="movieTitle"
        label="Title"
        type="textarea"
        placeholder={existedId ? title : 'Title here'}
        defaultValue={title}
        size="sm" />
      <InputWithLabel id="releaseDate" label="Release Date" name="date" type="date" placeholder="Select Date" defaultValue={releaseDate} />
      <InputWithLabel id="movieUrl" label="Movie poster URL" type="url" placeholder="Movie URL here" size="sm" defaultValue={posterPath} />
      <SelectInputGenre defaultSelected={genres} />
      <InputWithLabel id="movieOverview" label="Overview" name="text" type="textarea" placeholder="Overview here" size="sm" defaultValue={overview} />
      <InputWithLabel id="movieRuntime" label="Runtime" type="number" placeholder="Runtime here" size="sm" defaultValue={runtime.toString()} />
      <div className="d-flex justify-content-md-end">
        <ResetButton />
        <SubmitButton buttonText={existedId ? 'Save' : 'Submit'} />
      </div>
    </Form>
  );
};
