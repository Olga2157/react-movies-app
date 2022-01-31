import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import { MovieInfoDetails } from '../../../types';
import { ResetButton, SubmitButton } from '../../shared';
import './Form.scss';
import { InputWithLabel } from './InputWithLabel';
import {SelectInputGenre} from './SelectInputGenre';

export const MovieForm: FC<{ movieInfo?: MovieInfoDetails }> = ({movieInfo}) => {
    // todo check if mandatory fields filled
    let existedId = 0;
    if (movieInfo) {
        ({id: existedId} = movieInfo);
    }
    return (
        <Formik initialValues={{
            title: movieInfo ? movieInfo.title : "",
            releaseDate: movieInfo ? movieInfo.releaseDate : "",
            posterPath: movieInfo ? movieInfo.posterPath : "",
            overview: movieInfo ? movieInfo.overview : "",
            runtime: movieInfo ? movieInfo.runtime : "",
            genres: movieInfo ? movieInfo.genres : []
        }} onSubmit={(values) => {
            // console.log('values : ' + JSON.stringify(values))
        }}>
            <Form id={existedId ? 'edit-movie-form-id' : 'add-movie-form-id'}
                // onSubmit={e => { e.preventDefault(); }}
            >
                {existedId ?
                <InputWithLabel id='movieId' label='Movie ID' name="movieId" placeholder={existedId.toString()}
                                    size='sm' readonly /> : ''}
                <InputWithLabel id="title" label="title" name="title" type="textarea"
                    placeholder='Title here' size="sm" />
                <InputWithLabel id="releaseDate" label="Release Date" name="releaseDate" type="date"
                                placeholder="Select Date" />
                <InputWithLabel id="movieUrl" label="Movie poster URL" name="posterPath" type="url" placeholder="Movie URL here" size="sm" />
                {/*<SelectInputGenre defaultSelected={genres} onChangeCallBack={setGenres}/>*/}
                <InputWithLabel id="movieOverview" label="Overview" name="overview" type="textarea" placeholder="Overview here" size="sm" />
                <InputWithLabel id="movieRuntime" label="Runtime" name="runtime" type="number" placeholder="Runtime here" size="sm" />
                <div className="d-flex justify-content-md-end">
                    <ResetButton/>
                    <SubmitButton buttonText={existedId ? 'Save' : 'Submit'}/>
                </div>
            </Form>
        </Formik>
    );
};
