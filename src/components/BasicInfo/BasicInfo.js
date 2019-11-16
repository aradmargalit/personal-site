import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './BasicInfo.css';
import smile from './smile.png';

class BasicInfo extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="4">
            <img
              src={smile}
              className="rounded-circle headshot"
              alt="Arad"
            />
          </Col>
          <Col xs="12" lg="8" className="short-bio align-middle">
            <div className="align-middle">
              <h1>Arad Margalit</h1>
              <br />
              <h5>Software Developer at Hulu</h5>
              <h5>Hiking, Biking, Swimming, Running, and Coding</h5>
              <br />
            </div>
            <Link to="/about-me">
              <Button color="primary">About Me</Button>
            </Link>
            <Link to="/resume">
              <Button color="secondary">Resume</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BasicInfo;
