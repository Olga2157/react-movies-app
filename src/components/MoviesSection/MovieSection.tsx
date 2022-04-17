import React, { FC } from 'react';
import { Col, Row } from 'reactstrap';
import { MovieList } from './MovieAndMovieList/MovieList';
import { MoviesCounterComponent } from './MoviesCounterComponent';
import { PaginationComponent } from './PaginationComponents/PaginationComponent';
import { ResultsFilters } from './ResultsFilters';
import { SortDropdown } from './SortDropdown';

export const MoviesSection: FC = () => (
    <section id="movies-section">
      <Row className="mt-5">
        <Col>
          <ResultsFilters />
        </Col>
        <Col>
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
    </section>
  );
