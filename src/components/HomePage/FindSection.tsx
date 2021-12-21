import React, { FC } from 'react';
import { Input, InputGroup } from 'reactstrap';
import { AppButton } from '../shared/Buttons/AppButton';
import { Heading } from '../shared/Text/Heading';

export const FindSection: FC = () => {
  return (
    <section id="find-section">
      <Heading headingText="Find your movie" upperCase={true}/>
      <InputGroup>
        <Input />
        <AppButton buttonId="search-btn" buttonText="Search" />
      </InputGroup>
    </section>
  );
};
