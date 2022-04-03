import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { MovieInfoDetails } from '../../../types';
import { ResetButton, SubmitButton } from '../../shared';
import { InputWithLabel } from './InputWithLabel';
import { SelectInputGenre } from './SelectInputGenre';
import {
    addMovieCreator, toggleCurrentGenresCreator,
    updateMovieCreator
} from '../../../redux/actions/actionCreators/actionCreators';
import './Form.scss';
import { formSchema } from './FormSchema';
import { formFields } from './constants';

export const MovieForm: FC<{ movieInfo?: MovieInfoDetails, onClickCallBack?: Function }> = ({
    movieInfo,
    onClickCallBack
}) => {
    let existedId = 0;
    const dispatch = useDispatch();
    if (movieInfo) {
        ({ id: existedId } = movieInfo);
    }

    return (
        <Formik initialValues={{
            title: movieInfo ? movieInfo.title : '',
            releaseDate: movieInfo ? movieInfo.releaseDate : '',
            posterPath: movieInfo ? movieInfo.posterPath : '',
            overview: movieInfo ? movieInfo.overview : '',
            runtime: movieInfo ? movieInfo.runtime : '',
            genres: movieInfo ? movieInfo.genres : []
        }}
            validationSchema={formSchema}
            onSubmit={(values) => {
                if (movieInfo?.id) {
                    dispatch(updateMovieCreator({
                        id: movieInfo.id,
                        title: values.title,
                        releaseDate: values.releaseDate,
                        posterPath: values.posterPath,
                        runtime: Number(values.runtime),
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
            onReset={(_, formikHelpers) => {
                formFields.forEach(field => {
                    const str = field as keyof typeof movieInfo;
                    formikHelpers.setFieldValue(field, movieInfo ? movieInfo[str] : '');
                });
                const genresOptions = document.getElementById('genres')?.childNodes;
                const originalGenres = movieInfo ? movieInfo.genres : [];
                genresOptions?.forEach(child => {
                    const option = child as HTMLOptionElement;
                    const text = option.textContent ? option.textContent : '';
                    (option as HTMLOptionElement).selected = originalGenres && originalGenres.includes(text);
                });
            }}
        >
            {({ errors, touched }) => (
                <Form id={existedId ? 'edit-movie-form-id' : 'add-movie-form-id'}>
                    {existedId ?
                        <InputWithLabel id='movieId' label='Movie ID' name="movieId" placeholder={existedId.toString()}
                            size='sm' readonly /> : ''}
                    <InputWithLabel id="title" label="title" name="title" type="textarea"
                        placeholder='Title here' size="sm" errors={errors.title && touched.title ? errors.title : null} />
                    <InputWithLabel id="releaseDate" label="Release Date" name="releaseDate" type="date"
                        placeholder="Select Date" errors={errors.releaseDate && touched.releaseDate ? errors.releaseDate : null} />
                    <InputWithLabel id="movieUrl" label="Movie poster URL" name="posterPath" type="url"
                        placeholder="Movie URL here" size="sm" errors={errors.posterPath && touched.posterPath ? errors.posterPath : null} />
                    <SelectInputGenre id="genres" defaultSelected={movieInfo ? movieInfo.genres : []} errors={errors.genres && touched.genres ? errors.genres : null} />
                    <InputWithLabel id="movieOverview" label="Overview" name="overview" type="textarea"
                        placeholder="Overview here" size="sm" errors={errors.overview && touched.overview ? errors.overview : null} />
                    <InputWithLabel id="movieRuntime" label="Runtime" name="runtime" type="number"
                        placeholder="Runtime here" size="sm" errors={errors.runtime && touched.runtime ? errors.runtime : null} />
                    <div className="d-flex justify-content-md-end">
                        <ResetButton />
                        <SubmitButton buttonText={existedId ? 'Save' : 'Submit'} />
                    </div>
                </Form>
            )}
        </Formik>
    );
};
