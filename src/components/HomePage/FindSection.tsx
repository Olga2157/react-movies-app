import React, { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Input, InputGroup } from 'reactstrap';
import { getMoviesCreator } from '../../redux/actions/actionCreators/actionCreators';
import { AppButton, Heading } from '../shared';

export const FindSection: FC = () => {

    const searchRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();
    const search = () => {
        dispatch(getMoviesCreator(1, 8,
            {
                'search': searchRef.current?.value,
                'searchBy': 'title'
            }
        ));
    };

    return (
        <section id="find-section">
            <Heading headingText="Find your movie" upperCase/>
            <InputGroup>
                <Input innerRef={searchRef} id="input-find-section" />
                <AppButton buttonId="search-btn" buttonText="Search" listener={search}/>
            </InputGroup>
        </section>
    );
};
