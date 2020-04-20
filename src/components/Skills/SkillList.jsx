import './Skills.css';

import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';

import skills from './skills.json';

export default function Skills() {
  const renderSkills = skillList => {
    return skillList.map(({ name, uses, iconClassname }) => {
      return (
        <ListGroupItem key={name}>
          <h5>
            {name}
            <i style={{ float: 'right' }} className={iconClassname} />
          </h5>
          <ul>
            {uses.map(use => (
              <li key={use}>{use}</li>
            ))}
          </ul>
        </ListGroupItem>
      );
    });
  };

  return (
    <>
      <Row>
        <Col>
          <h4>Languages</h4>
          <ListGroup>{renderSkills(skills.languages)}</ListGroup>
        </Col>
        <Col style={{ paddingLeft: '10px' }}>
          <h4>Tools and Technologies</h4>
          <ListGroup>{renderSkills(skills.tools)}</ListGroup>
        </Col>
      </Row>
    </>
  );
}
