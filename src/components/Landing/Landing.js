import React, { Component, Fragment } from 'react';
import BasicInfo from '../BasicInfo/BasicInfo';
import Skills from '../Skills/Skills';

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        <BasicInfo />
        <br /> <br />
        <Skills />
      </Fragment>
    );
  }
}
