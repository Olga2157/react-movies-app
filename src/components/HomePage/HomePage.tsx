import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Header from '../shared/Header';
import FindSection from './FindSection';
import ResultsFilters from './ResultsFilters';
import MoviesCounterComponent from './MoviesCounterComponent';
import Footer from '../shared/Footer';
import SortDropdown from './SortDropdown';
import AddMovie from './Modals/AddMovie';
import PaginationComponent from './PaginationComponents/PaginationComponent';
import MovieList from './MovieList';

const HomePage: React.FC = () => {
  // const HomePage = () => {
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
