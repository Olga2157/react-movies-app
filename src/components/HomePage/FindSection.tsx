import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Input, InputGroup } from 'reactstrap';
import { getMoviesCreator } from '../../redux/actions/actionCreators/actionCreators';
import { AppButton, Heading } from '../shared';

export const FindSection: FC = () => {
  const dispatch = useDispatch();

  const search = useCallback(() => {
    const input = document.getElementById('input-find-section') as HTMLInputElement;
    dispatch(getMoviesCreator(1, 8,
      {
        'search': input?.value,
        'searchBy': 'title'
      }
    ));
  }, []);

  return (
    <section id="find-section">
      <Heading headingText="Find your movie" upperCase />
      <InputGroup>
        <Input id="input-find-section" />
        <AppButton buttonId="search-btn" buttonText="Search" listener={search} />
      </InputGroup>
    </section>
  );
};
