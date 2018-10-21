import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './BasicInfo.css';
import arad_image from './arado.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BasicInfo extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="12" lg="4">
            <img
              src={arad_image}
              className="rounded-circle headshot"
              alt="Arad"
            />
          </Col>
          <Col xs="12" lg="8" className="short-bio align-middle">
            <div className="align-middle">
              <h1>Arad Margalit</h1>
              <h5>Software Developer at Hulu</h5>
              <h5>Hiking, Biking, Swimming, Running, and Coding</h5>
            </div>
          </Col>
        </Row>
        <hr />
        <br />
        <Row className="icons">
          <Col xs="3">
            <FontAwesomeIcon icon="envelope" />
          </Col>
          <Col xs="3">
            <FontAwesomeIcon icon="code-branch" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BasicInfo;
