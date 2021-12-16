import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { MovieList } from './MovieList';
import { SortDropdown } from './SortDropdown';
import { FindSection } from './FindSection';
import { AddMovie } from './Modals/AddMovie';
import { PaginationComponent } from './PaginationComponents/PaginationComponent';
import { MoviesCounterComponent } from './MoviesCounterComponent';
import { ResultsFilters } from './ResultsFilters';
import { Header } from '../shared/Header';
import { Footer } from '../shared/Footer';

const HomePage: FC = function () {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col><FindSection /></Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={8}>
            <ResultsFilters />
          </Col>
          <Col xs={6} md={4}>
            <SortDropdown />
          </Col>
        </Row>
        <Row>
          <MoviesCounterComponent />
        </Row>
        <Row>
          <MovieList />
        </Row>
        <Row>
          <Col className="text-center"><PaginationComponent /></Col>
        </Row>
      </Container>

      <AddMovie />
      <Footer />
    </>
  );
};

export default HomePage;
