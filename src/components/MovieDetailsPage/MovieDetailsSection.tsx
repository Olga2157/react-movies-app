import React, { FC } from 'react';
// import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
// import { moviesDataSelector } from '../../redux/selector/selectors';
import { MovieInfoDetails } from '../../types';
import { Heading } from '../shared';
import {
  Cover, Duration, Rating, Overview, ReleaseYear, Tagline,
} from './DetailsComponents';

export const MovieDetailsSection: FC = () => {
  // const { movies } = useSelector(moviesDataSelector);
  const chosenMovieDetails: MovieInfoDetails = {
    id: 1,
    title: 'Star Wars: The Last Jedi',
    posterPath: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    releaseDate: '2017-11-11',
    genres: ['Fantasy', 'Adventure'],
    overview: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    runtime: 154,
    rating: 4.9,
    tagline: 'The Saga Continues',
  };

  return (
    <section id="movie-details-section">
      <Container fluid>
        <Row className="justify-content-start">
          <Col className="col-4">
            <Cover chosenMovieDetails={chosenMovieDetails} />
          </Col>
          <Col>
            <Row>
              <Col>
                <Heading headingText={chosenMovieDetails.title} upperCase={false} />
              </Col>
              <Col>
                <Rating chosenMovieDetails={chosenMovieDetails} />
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
