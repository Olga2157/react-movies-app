import React, {FC} from 'react';
import {Formik, Form} from 'formik';
import {MovieInfoDetails} from '../../../types';
import {ResetButton, SubmitButton} from '../../shared';
import './Form.scss';
import {InputWithLabel} from './InputWithLabel';
import {SelectInputGenre} from './SelectInputGenre';
import {useDispatch} from "react-redux";
import {
    addMovieCreator, toggleCurrentGenresCreator,
    updateMovieCreator
} from "../../../redux/actions/actionCreators/actionCreators";

export const MovieForm: FC<{ movieInfo?: MovieInfoDetails, onClickCallBack?: Function }> = ({movieInfo, onClickCallBack}) => {
    let existedId = 0;
    const dispatch = useDispatch();

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
        }} onSubmit={(values, formikHelpers) => {
            if (movieInfo?.id) {
                dispatch(updateMovieCreator({
                    id: movieInfo.id,
                    title: values.title,
                    releaseDate: values.releaseDate,
                    posterPath: values.posterPath,
                    runtime: +values.runtime,
                    overview: values.overview,
                    genres: values.genres
                }));
            } else {
                dispatch(addMovieCreator({
                    title: values.title,
                    releaseDate: values.releaseDate,
                    posterPath: values.posterPath,
                    runtime: +values.runtime,
                    overview: values.overview,
                    genres: values.genres
                }));
                dispatch(toggleCurrentGenresCreator());
            }
            if (onClickCallBack) {
                onClickCallBack();
            }
        }}
                onReset={(values, formikHelpers) => {
                    formikHelpers.setFieldValue("title", movieInfo ? movieInfo.title : "");
                    formikHelpers.setFieldValue("releaseDate", movieInfo ? movieInfo.releaseDate : "");
                    formikHelpers.setFieldValue("posterPath", movieInfo ? movieInfo.posterPath : "");
                    formikHelpers.setFieldValue("runtime", movieInfo ? movieInfo.runtime : "");
                    formikHelpers.setFieldValue("overview", movieInfo ? movieInfo.overview : "");
                    formikHelpers.setFieldValue("genres", movieInfo ? movieInfo.genres : []);
                    const genresOptions = document.getElementById("genres")?.childNodes;
                    const originalGenres = movieInfo ? movieInfo.genres : [];
                    genresOptions?.forEach(child => {
                        const option = child as HTMLOptionElement;
                        const text = option.textContent ? option.textContent : "";
                        (option as HTMLOptionElement).selected = originalGenres && originalGenres.includes(text);
                    })
                }}
        >
            <Form id={existedId ? 'edit-movie-form-id' : 'add-movie-form-id'}>
                {existedId ?
                    <InputWithLabel id='movieId' label='Movie ID' name="movieId" placeholder={existedId.toString()}
                                    size='sm' readonly/> : ''}
                    <InputWithLabel id="title" label="title" name="title" type="textarea"
                                    placeholder='Title here' size="sm"/>
                    <InputWithLabel id="releaseDate" label="Release Date" name="releaseDate" type="date"
                                    placeholder="Select Date"/>
                    <InputWithLabel id="movieUrl" label="Movie poster URL" name="posterPath" type="url"
                                    placeholder="Movie URL here" size="sm"/>
                    <SelectInputGenre id="genres" defaultSelected={movieInfo ? movieInfo.genres : []}/>
                    <InputWithLabel id="movieOverview" label="Overview" name="overview" type="textarea"
                                    placeholder="Overview here" size="sm"/>
                    <InputWithLabel id="movieRuntime" label="Runtime" name="runtime" type="number"
                                    placeholder="Runtime here" size="sm"/>
                    <div className="d-flex justify-content-md-end">
                        <ResetButton/>
                        <SubmitButton buttonText={existedId ? 'Save' : 'Submit'}/>
                    </div>
            </Form>
        </Formik>
    );
};
