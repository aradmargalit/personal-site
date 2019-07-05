import React, { Component, Fragment } from 'react';
import skills from './skills.json';

import './Skills.css';

export default class Skills extends Component {
  renderSkills = skills => {
    return skills.map(({ name, uses }) => {
      return (
        <li key={name}>
          <h5>{name}</h5>
          <ul>
            {uses.map(use => (
              <li key={use}>{use}</li>
            ))}
          </ul>
        </li>
      );
    });
  };

  renderUses = uses => {
    return uses.map(use => <li key={use}>{use}</li>);
  };

  render() {
    return (
      <Fragment>
        <div>
          <h4>Languages</h4>
          <ul>{this.renderSkills(skills.languages)}</ul>
        </div>
        <div style={{ paddingTop: '20px' }}>
          <h4>Tools and Technologies</h4>
          <ul>{this.renderSkills(skills.tools)}</ul>
        </div>
      </Fragment>
    );
  }
}
