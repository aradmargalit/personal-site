import React, { Component } from 'react';
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from 'react-icons/ti';
import { Container, Row, Col } from 'reactstrap';
import './SocialTray.css';

export default class SocialTray extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <a href="https://www.linkedin.com/in/arad-margalit-6a0271a6">
              <TiSocialLinkedinCircular size={64} />
            </a>
            <a href="https://github.com/aradmargalit">
              <TiSocialGithubCircular size={64} />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
