import React, {FC, FormEvent, useState} from 'react';
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
  const [title, setTitle] = useState(movieInfo ? movieInfo.title : "");
  const [releaseDate, setReleaseDate] = useState(movieInfo ? movieInfo.releaseDate : "");
  const [posterPath, setPosterPath] = useState(movieInfo ? movieInfo.posterPath : "");
  const [overview, setOverview] = useState(movieInfo ? movieInfo.overview : "");
  const [runtime, setRuntime] = useState(movieInfo ? movieInfo.runtime : "");
  const [genres, setGenres] = useState(movieInfo ? movieInfo.genres : []);

  const submit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    // todo check if mandatory fields filled
    if (movieInfo?.id) {
      dispatch(updateMovieCreator({
        'id': movieInfo.id,
        title,
        releaseDate,
        posterPath,
        runtime : +runtime,
        overview,
        genres
      }));
    } else {
      dispatch(addMovieCreator({
        title,
        releaseDate,
        posterPath,
        runtime : +runtime,
        overview,
        genres
      }));
    }
  };

  let existedId = 0;
  if (movieInfo) {
    ({ id: existedId } = movieInfo);
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
        size="sm"
        onChangeCallBack={setTitle}
      />
      <InputWithLabel id="releaseDate" label="Release Date" name="date" type="date" placeholder="Select Date" defaultValue={releaseDate}
                      onChangeCallBack={setReleaseDate}/>
      <InputWithLabel id="movieUrl" label="Movie poster URL" type="url" placeholder="Movie URL here" size="sm" defaultValue={posterPath}
                      onChangeCallBack={setPosterPath}/>
      <SelectInputGenre defaultSelected={genres} onChangeCallBack={setGenres}/>
      <InputWithLabel id="movieOverview" label="Overview" name="text" type="textarea" placeholder="Overview here" size="sm" defaultValue={overview}
                      onChangeCallBack={setOverview}/>
      <InputWithLabel id="movieRuntime" label="Runtime" type="number" placeholder="Runtime here" size="sm" defaultValue={runtime.toString()}
                      onChangeCallBack={setRuntime}/>
      <div className="d-flex justify-content-md-end">
        <ResetButton />
        <SubmitButton buttonText={existedId ? 'Save' : 'Submit'} />
      </div>
    </Form>
  );
};
