import './BasicInfo.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';

import PortfolioTray from '../PortfolioTray';
import smile from './smile.png';

export default function BasicInfo() {
  return (
    <Container style={{ marginTop: 50 }}>
      <Row className="vertical-align">
        <Col xs="12" lg="4">
          <img src={smile} className="rounded-circle headshot" alt="Arad" />
        </Col>
        <Col xs="12" lg="8" className="short-bio align-middle">
          <div className="align-middle">
            <h1>Arad Margalit</h1>
            <br />
            <h5>Senior Software Developer at Hulu</h5>
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
      <Row>
        <Col>
          <PortfolioTray />
        </Col>
      </Row>
    </Container>
  );
}
