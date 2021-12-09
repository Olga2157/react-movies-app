import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Header from '../shared/Header';
import FindSection from './FindSection';
import ResultsFilters from './ResultsFilters';
import MoviesCounterComponent from './MoviesCounterComponent';
import Footer from '../shared/Footer';
import MovieList from './MovieList';
import AddMoviePopup from './AddMoviePopup';
import PaginationComponent from './PaginationComponent';
import SortByButton from './SortByButton';

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row>
          <Col><FindSection /></Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={8}>
            <ResultsFilters />
          </Col>
          <Col xs={6} md={4}>
            <SortByButton />
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
        <Row>
          <Col><Footer /></Col>
        </Row>
      </Container>
      <AddMoviePopup />
    </>
  );
};

export default HomePage;
