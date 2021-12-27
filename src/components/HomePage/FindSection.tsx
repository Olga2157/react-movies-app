import React, { FC } from 'react';
import { Input, InputGroup } from 'reactstrap';
import { AppButton, Heading } from '../shared';

export const FindSection: FC = () => {
  return (
    <section id="find-section">
      <Heading headingText="Find your movie" upperCase />
      <InputGroup>
        <Input />
        <AppButton buttonId="search-btn" buttonText="Search" />
      </InputGroup>
    </section>
  );
};
