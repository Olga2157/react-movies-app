import React, { FC } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { MovieInfoDetails } from '../../types';
import { Heading } from '../shared/Text/Heading';
import { Cover } from './DetailsComponents/Cover';
import { Duration } from './DetailsComponents/Duration';
import { Rating } from './DetailsComponents/Rating/Rating';
import { Overview } from './DetailsComponents/Overview';
import { ReleaseYear } from './DetailsComponents/ReleaseYear';
import { Tagline } from './DetailsComponents/Tagline';

export const MovieDetailsSection: FC = () => {

  const chosenMovieDetails: MovieInfoDetails = {
    id: 1,
    title: 'Star Wars: The Last Jedi',
    posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    year: 2017,
    genre: 'Fantasy',
    overview: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    duration: 154,
    rating: 4.9,
    tagline: "The Saga Continues",
  }

  return (
    <section id="movie-details-section">
      <Container fluid>
        <Row className="justify-content-start">
          <Col className="col-4">
            <Cover chosenMovieDetails={chosenMovieDetails} />
          </Col>
          <Col>
            <Row>
              <Col><Heading headingText={chosenMovieDetails.title} upperCase={false} />
              </Col>
              <Col><Rating chosenMovieDetails={chosenMovieDetails} />
              </Col>
            </Row>
            <Row><Tagline chosenMovieDetails={chosenMovieDetails} /></Row>
            <Row>
              <ReleaseYear chosenMovieDetails={chosenMovieDetails} />
              <Duration chosenMovieDetails={chosenMovieDetails} />
            </Row>
            <Row><Overview chosenMovieDetails={chosenMovieDetails} /></Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
