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
    return roles.map(({name, start, end, bullets}) => {
      return (
        <ListGroupItem key={name}>
          <Row>
            <Col md="8" xs="12">
              <strong>{name}</strong>
            </Col>
            <Col md="4" xs="12" className="start_end">
              <em>{start}</em> - <em>{end}</em>
            </Col>
          </Row>
          <Row>
            <Col md="9" xs="12">
              <ul>{this.renderBullets(bullets)}</ul>
            </Col>
          </Row>
        </ListGroupItem>
      );
    });
  };

  renderExperience = () => {
    return experience.map(({company, link, roles}) => {
      return (
        <ListGroup key={company}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h5>{company}</h5>
          </a>
          <ul>{this.renderRoles(roles)}</ul>
          <br />
        </ListGroup>
      );
    });
  };

  render() {
    return (
      <ListGroup className="resume">
        <ListGroupItem className="experience">
          <h3 style={{ paddingBottom: '15px' }}>Experience</h3>
          <hr></hr>
          {this.renderExperience()}
        </ListGroupItem>
        <ListGroupItem className="skills">
          <h3 style={{ paddingBottom: '15px' }}>Skills</h3>
          <hr></hr>
          <Skills />
        </ListGroupItem>
      </ListGroup>
    );
  }
}
