import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "../shared/Header";
import FindSection from "./FindSection";
import ResultsFilters from "./ResultsFilters";
import ResultsSort from "./ResultsSort";
import MoviesCounterComponent from "./MoviesCounterComponent";
import Footer from "../shared/Footer";

const HomePage: React.FC<{}> = (props) => {
  return (
    <React.Fragment>
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
            <ResultsSort />
          </Col>
        </Row>
        <Row>
          <MoviesCounterComponent />
        </Row>
        <Row>
          here section with movies will be added
        </Row>
        <Row>
          <Col><Footer /></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;

// test adding images
// import MyImage from 'images/IMG_test.jpg';

// const imgSrc = "../../images/IMG_test.jpg";
// <img src={MyImage} alt="the road" />
