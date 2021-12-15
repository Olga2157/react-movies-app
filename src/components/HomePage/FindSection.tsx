import * as React from 'react';
import { Input, InputGroup } from 'reactstrap';
import AppButton from '../shared/Buttons/AppButton';
import Heading from '../shared/Heading';

const FindSection: React.FC<{}> = () => {
  const addMovieClick = () => {
    const addMoviePopup = document.getElementById('add-movie-popup') as HTMLButtonElement;
    addMoviePopup.classList.remove('invisible');
    // todo: add logic when I start task 4 and 7
  };

  return (
    <section>
      <AppButton buttonId="add-movie-btn" listener={addMovieClick} buttonText="+ Add movie" />
      <Heading headingText="Find your movie" />
      <InputGroup>
        <Input />
        <AppButton buttonId="search-btn" buttonText="Search" />
      </InputGroup>
    </section>
  );
};

export default FindSection;
