import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './BasicInfo.css';
import arad_image from './arado.png';
import email from '../../icons/envelope-open.svg';
import code from '../../icons/code.svg';

class BasicInfo extends Component {
  render() {
    return (
      <Container>
        <Row className="vertical-align">
          <Col xs="4">
            <img
              src={arad_image}
              className="rounded-circle headshot"
              alt="Arad"
            />
          </Col>
          <Col xs="8" className="short-bio align-middle">
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
            <img src={email} alt="thing" />
          </Col>
          <Col xs="3">
            <img src={code} alt="thing" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BasicInfo;
