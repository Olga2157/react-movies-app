import React, {FC, useRef} from 'react';
import {
    Input, Label,
} from 'reactstrap';
import './Form.scss';
import { Field, useField } from "formik";

export const SelectInputGenre: FC<{
    defaultSelected: string[],
    id: string
}> = ({defaultSelected, id}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const movieGenres = ['Action', 'Adventure', 'Animation',
        'Comedy', 'Drama', 'Family',
        'Fantasy', 'Horror', 'Music',
        'Mystery', 'Romance', 'Science Fiction',
        'Thriller'];
    const genresName = "genres";
    const [form, meta, field] = useField(genresName);

    return (
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
                        onInput={e => {
                            const selectedOptions = Array.from((e.target as HTMLSelectElement).selectedOptions);
                            field.setValue(selectedOptions.map(option => option.text));
                        }
                        }
                    >
                        <option value="" disabled className="display:none;">Select Genre</option>
                        {movieGenres.map((genre) => (
                            <option key={genre} selected={defaultSelected?.includes(genre)}>{genre}</option>
                        ))}
                    </Input>
                </div>
            )}
        </Field>
    );
};
