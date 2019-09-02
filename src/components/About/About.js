import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import SocialTray from '../SocialTray/SocialTray';
import './About.css';
import arad_bike from './arad_bike.jpg';
import about from './about.json';
import _ from 'lodash';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { fact: _.sample(about.funFacts) };
  }

  shuffleFact = () => {
    //Don't pick the same fact twice in a row
    let currentFact = this.state.fact;
    let newFact = currentFact;
    while (newFact === currentFact) {
      newFact = _.sample(about.funFacts);
    }
    this.setState({ fact: newFact });
  };

  render() {
    return (
      <Container>
        <br />
        <h3>About Me</h3>
        <Row>
          <Col xs="12" lg="4">
            <img src={arad_bike} alt="self portrait" />
          </Col>
          <Col xs="12" lg={{ size: 7, offset: 1 }} className="blurb float-left">
            <p>{about.mainBlurb}</p>
            <div style={{ height: '100px' }}>
              <strong>Random Fun Fact:</strong> {this.state.fact}
            </div>
            <Button
              className="shuffle"
              onClick={this.shuffleFact}
              color="primary"
            >
              Shuffle Fun Fact
            </Button>
            <SocialTray />
          </Col>
        </Row>
      </Container>
    );
  }
}
