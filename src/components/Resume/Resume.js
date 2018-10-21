import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import Skills from '../Skills/Skills';
import './Resume.css';
import experience from './experience.json';

export default class Resume extends Component {
  renderBullets = bullets => {
    return bullets.map(bullet => {
      return <li key={bullet}>{bullet}</li>;
    });
  };

  renderRoles = roles => {
    return roles.map(role => {
      return (
        <ListGroupItem key={role.name}>
          <Row>
            <Col md="8" xs="12">
              <strong>{role.name}</strong>
            </Col>
            <Col md="4" xs="12" className="start_end">
              <em>{role.start}</em> - <em>{role.end}</em>
            </Col>
          </Row>
          <Row>
            <Col md="9" xs="12">
              <ul>{this.renderBullets(role.bullets)}</ul>
            </Col>
          </Row>
        </ListGroupItem>
      );
    });
  };

  renderExperience = () => {
    return experience.map(item => {
      return (
        <ListGroup key={item.company}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <h5>{item.company}</h5>
          </a>
          <ul>{this.renderRoles(item.roles)}</ul>
          <br />
        </ListGroup>
      );
    });
  };

  render() {
    return (
      <Row>
        <Col xs={{ size: 8, offset: 2 }}>
          <br />
          <ListGroup className="resume">
            <ListGroupItem>
              <h3>Experience</h3> <br />
              {this.renderExperience()}
            </ListGroupItem>
            <ListGroupItem>
              <h3>Skills</h3> <br />
              <Skills />
            </ListGroupItem>
          </ListGroup>
          <br />
        </Col>
      </Row>
    );
  }
}
