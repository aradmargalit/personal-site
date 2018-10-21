import React, { Component, Fragment } from 'react';
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from 'react-icons/ti';
import './SocialTray.css';

export default class SocialTray extends Component {
  render() {
    return (
      <Fragment>
        <a
          href="https://www.linkedin.com/in/arad-margalit-6a0271a6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialLinkedinCircular size={48} />
        </a>
        <a
          href="https://github.com/aradmargalit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialGithubCircular size={48} />
        </a>
      </Fragment>
    );
  }
}
