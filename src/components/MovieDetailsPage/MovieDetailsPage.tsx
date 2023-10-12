import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Header, Footer } from '../shared';
import { MoviesSection } from '../MoviesSection/MovieSection';
import { MovieDetailsSection } from './MovieDetailsSection';
import { SearchButton } from './SearchButton/SearchButton';
import { Link } from 'react-router-dom';

export const MovieDetailsPage: FC = () => (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col><MovieDetailsSection /></Col>
        </Row>
        <MoviesSection />
      </Container>
      <Link to="/"><SearchButton /></Link>
      <Footer />
    </>
  );
