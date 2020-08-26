import './Resume.css';

import moment from 'moment';
import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

import Skills from '../Skills';
import experience from './experience.json';

const duration = (start, end) => {
  if (end !== 'Present') return '';

  return `(${moment(start)
    .fromNow()
    .replace(' ago', '')})`;
};

const renderBullets = bullets => {
  return bullets.map(bullet => {
    return <li key={bullet}>{bullet}</li>;
  });
};

const renderRoles = roles => {
  return roles.map(({ name, start, end, bullets }) => {
    return (
      <ListGroupItem key={name}>
        <Row>
          <Col md="8" xs="12">
            <strong>{name}</strong>
          </Col>
          <Col md="4" xs="12" className="start_end">
            {`${start} - ${end} ${duration(start, end)}`}
          </Col>
        </Row>
        <Row>
          <Col md="9" xs="12">
            <ul>{renderBullets(bullets)}</ul>
          </Col>
        </Row>
      </ListGroupItem>
    );
  });
};

const renderExperience = () => {
  return experience.map(({ company, link, roles }) => {
    return (
      <ListGroup key={company}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h5>{company}</h5>
        </a>
        <ul>{renderRoles(roles)}</ul>
        <br />
      </ListGroup>
    );
  });
};

export default function Resume() {
  return (
    <ListGroup className="resume">
      <ListGroupItem className="experience">
        <h3 style={{ paddingBottom: '15px' }}>Experience</h3>
        <hr />
        {renderExperience()}
      </ListGroupItem>
      <ListGroupItem className="skills">
        <h3 style={{ paddingBottom: '15px' }}>Skills</h3>
        <hr />
        <Skills />
      </ListGroupItem>
    </ListGroup>
  );
}
