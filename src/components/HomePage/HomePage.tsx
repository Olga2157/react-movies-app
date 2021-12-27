import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Header, Footer } from '../shared';
import { FindSection } from './FindSection';
import { AddMovie } from './Modals/AddMovie';
import { MoviesSection } from '../MoviesSection/MovieSection';

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col><FindSection /></Col>
        </Row>
        <MoviesSection />
      </Container>
      <AddMovie />
      <Footer />
    </>
  );
};
