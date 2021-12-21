import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { FindSection } from './FindSection';
import { AddMovie } from './Modals/AddMovie';
import { Header } from '../shared/Header';
import { Footer } from '../shared/Footer';
import { MoviesSection } from '../MoviesSection/MovieSection';

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col><FindSection /></Col>
        </Row>
        <MoviesSection/>
      </Container>
      <AddMovie />
      <Footer />
    </>
  );
};
