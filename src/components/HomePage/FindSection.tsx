import React, { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Input, InputGroup } from 'reactstrap';
import { getMoviesCreator } from '../../redux/actions/actionCreators/actionCreators';
import { AppButton, Heading } from '../shared';

export const FindSection: FC = () => {

    const searchRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const search = () => {
        history.push({
            pathname: `/search/${searchRef.current?.value}`
         });
        dispatch(getMoviesCreator(0, 8,
            {
                'search': searchRef.current?.value,
                'searchBy': 'title'
            }
        ));
        if (searchRef.current) {
            searchRef.current.value = "";
        }
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
