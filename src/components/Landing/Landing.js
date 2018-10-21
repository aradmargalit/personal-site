import React, { Component, Fragment } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import BasicInfo from '../BasicInfo/BasicInfo';
import Footer from '../Footer/Footer';

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        <MenuBar />
        <BasicInfo />
        <Footer />
      </Fragment>
    );
  }
}
