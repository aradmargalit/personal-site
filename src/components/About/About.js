import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="2">
            <Link to="/">
              <Button outline color="primary">
                Home
              </Button>
            </Link>
          </Col>
          <Col xs="10">
            <h3>Arad Margalit</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}
