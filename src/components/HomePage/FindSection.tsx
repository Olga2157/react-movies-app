import * as React from 'react';
import { Input, InputGroup } from 'reactstrap';
import AppButton from '../shared/Buttons/AppButton';
import Heading from '../shared/Heading';

const FindSection: React.FC<{}> = () => {

  return (
    <section>
      <Heading headingText="Find your movie" />
      <InputGroup>
        <Input />
        <AppButton buttonId="search-btn" buttonText="Search" />
      </InputGroup>
    </section>
  );
};

export default FindSection;
