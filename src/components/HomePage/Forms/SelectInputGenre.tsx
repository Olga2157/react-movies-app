import React, { FC, FormEvent, useRef } from 'react';
import {
    Input, Label,
} from 'reactstrap';
import './Form.scss';
import { Field, useField } from 'formik';
import { genresName, movieGenres } from './constants';

type SelectInputGenreProps = {
    defaultSelected: string[],
    id: string,
    errors?: string | string[] | null
}

export const SelectInputGenre: FC<SelectInputGenreProps> = ({ defaultSelected, id, errors }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [form, meta, field] = useField(genresName);
    const handleOnInput = (e: FormEvent<HTMLInputElement>) => {
        const selectedOptions = Array.from((e.target as HTMLSelectElement).selectedOptions);
        field.setValue(selectedOptions.map(option => option.text));
    };

    return (
        <>
            <Field name={genresName}>
                {() => (
                    <div>
                        <Label for={id}>
                            Genre
                        </Label>
                        <Input
                            id={id}
                            name="select"
                            type="select"
                            bsSize="sm"
                            multiple
                            innerRef={inputRef}
                            onInput={e => handleOnInput(e)}
                        >
                            <option value="" disabled className="display:none;">Select Genre</option>
                            {movieGenres.map((genre) => (
                                <option key={genre} selected={defaultSelected?.includes(genre)}>{genre}</option>
                            ))}
                        </Input>
                    </div>
                )}
            </Field>
            {errors ? (
                <div className="errorsMessages">{errors}</div>
            ) : null}
        </>
    );
};
