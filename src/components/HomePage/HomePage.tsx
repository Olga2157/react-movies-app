import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Header, Footer } from '../shared';
import { FindSection } from './FindSection';
import { MoviesSection } from '../MoviesSection/MovieSection';
import { MovieModal } from './Modals/MovieModal';

export const HomePage: FC = () => (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col><FindSection /></Col>
        </Row>
        <MoviesSection />
      </Container>
      <MovieModal newMovie />
      <Footer />
    </>
  );
