import React, { Component, Fragment } from 'react';
import skills from './skills.json';
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';

import './Skills.css';

export default class Skills extends Component {
  renderSkills = skills => {
    return skills.map(({ name, uses, iconClassname }) => {
      return (
        <ListGroupItem key={name}>
          <h5>
            {name} <i style={{ float: 'right' }} className={iconClassname}></i>
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

  renderUses = uses => {
    return uses.map(use => <li key={use}>{use}</li>);
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <h4>Languages</h4>
            <ListGroup>{this.renderSkills(skills.languages)}</ListGroup>
          </Col>
          <Col style={{ paddingLeft: '10px' }}>
            <h4>Tools and Technologies</h4>
            <ListGroup>{this.renderSkills(skills.tools)}</ListGroup>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
