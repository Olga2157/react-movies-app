import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Header, Footer } from '../shared';
import { MoviesSection } from '../MoviesSection/MovieSection';
import { MovieDetailsSection } from './MovieDetailsSection';
import { SearchButton } from './SearchButton/SearchButton';

export const MovieDetailsPage: FC = function () {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col><MovieDetailsSection /></Col>
        </Row>
        <MoviesSection />
      </Container>
      <SearchButton />
      <Footer />
    </>
  );
};
