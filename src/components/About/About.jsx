import './About.css';

import { sample as _sample } from 'lodash';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

import SocialTray from '../SocialTray/SocialTray';
import about from './aboutme.json';
import aradBike from './arad_bike.jpg';

export default function About() {
  const [fact, setFact] = useState(_sample(about.funFacts));

  const shuffleFact = () => {
    // Don't pick the same fact twice in a row
    const currentFact = fact;
    let newFact = fact;
    while (newFact === currentFact) {
      newFact = _sample(about.funFacts);
    }
    setFact(newFact);
  };

  const { mainBlurb } = about;

  return (
    <Container>
      <br />
      <h3>About Me</h3>
      <Row>
        <Col xs="12" lg="4">
          <img src={aradBike} alt="self portrait" />
        </Col>
        <Col xs="12" lg={{ size: 7, offset: 1 }} className="blurb float-left">
          <p>{mainBlurb}</p>
          <div style={{ height: '100px' }}>
            <strong>Random Fun Fact: </strong>
            {fact}
          </div>
          <Button className="shuffle" onClick={shuffleFact} color="primary">
            Shuffle Fun Fact
          </Button>
          <SocialTray />
        </Col>
      </Row>
    </Container>
  );
}
