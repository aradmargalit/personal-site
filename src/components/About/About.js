import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <div>
        <h3>I'm Arad!</h3>
        <Link to="/">
          <Button outline color="primary">
            Home
          </Button>
        </Link>
      </div>
    );
  }
}
