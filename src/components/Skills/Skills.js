import React, { Component, Fragment } from 'react';
import { Row, Col, UncontrolledTooltip } from 'reactstrap';
import rails from './skill_images/rails.png';
import python from './skill_images/python.png';
import react from './skill_images/react.png';
import redux from './skill_images/redux.png';
import java from './skill_images/java.png';
import cSharp from './skill_images/c-sharp.jpg';
import mysql from './skill_images/mysql.jpg';
import kafka from './skill_images/kafka.png';
import aws from './skill_images/aws.png';
import node from './skill_images/node.jpg';
import nginx from './skill_images/nginx.png';

export default class Skills extends Component {
  renderIcon = (asset, alt_text, id, offset = 1) => {
    return (
      <Fragment>
        <Col lg={{ size: 1, offset: offset }} xs={{ size: 4, offset: 0 }}>
          <img id={id} src={asset} alt={alt_text} className="language-icon" />
        </Col>
        <UncontrolledTooltip placement="right" target={id}>
          {alt_text}
        </UncontrolledTooltip>
      </Fragment>
    );
  };

  render() {
    return (
      <Fragment>
        <Row>
          {this.renderIcon(rails, 'Ruby on Rails', 'ror', 0)}
          {this.renderIcon(python, 'Python', 'python')}
          {this.renderIcon(react, 'React', 'react')}
          {this.renderIcon(redux, 'Redux', 'redux')}
          {this.renderIcon(kafka, 'Kafka', 'kafka')}
          {this.renderIcon(cSharp, 'C#', 'csharp')}
        </Row>
        <Row>
          {this.renderIcon(java, 'Java', 'java')}
          {this.renderIcon(mysql, 'MySQL', 'mysql')}
          {this.renderIcon(aws, 'AWS', 'aws')}
          {this.renderIcon(node, 'Node JS', 'node')}
          {this.renderIcon(nginx, 'NGINX', 'nginx')}
        </Row>
      </Fragment>
    );
  }
}
