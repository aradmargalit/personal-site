import React, { Component, Fragment } from 'react';
import { Table, Container, Row, Col, Progress } from 'reactstrap';
var _ = require('lodash');

const skills = [
  {
    skill: 'Python',
    prof: 100,
    comments: 'My main language at Hulu',
  },
  {
    skill: 'Ruby',
    prof: 100,
    comments: '',
  },
  {
    skill: 'React',
    prof: 75,
    comments: 'I created this site with it!',
  },
  {
    skill: 'Java',
    prof: 50,
    comments: '',
  },
  {
    skill: 'C#',
    prof: 50,
    comments: 'Used heavily at Hitachi Consulting for Xamarin',
  },
  {
    skill: 'Redux',
    prof: 25,
    comments: "I'm actively learning this one.",
  },
];

const prof_map = {
  100: 'success',
  75: 'info',
  50: '',
  25: 'warning',
};

export default class Skills extends Component {
  renderTable = () => {
    return _.sortBy(skills, 'prof')
      .reverse()
      .map(skill => {
        return (
          <Fragment>
            <tr>
              <td>{skill.skill}</td>
              <td>
                <Progress value={skill.prof} color={prof_map[skill.prof]} />
              </td>
              <td>{skill.comments}</td>
            </tr>
          </Fragment>
        );
      });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Proficiency</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
