import './PortfolioTray.css';

import React from 'react';
import { Col, Row } from 'reactstrap';

import PortfolioCard from '../PortfolioCard';

const phobos = require('./phobos.png');
const noteToSelf = require('./nts.png');

export default function PortfolioTray() {
  return (
    <div className="portfolio-tray">
      <h4>Recent Projects</h4>
      <Row>
        <Col xs="12" lg="6">
          <PortfolioCard
            imgSource={phobos}
            title="Phobos Fitness Tracker"
            subtitle="React and Golang Fitness Diary"
            copy="A fitness app that seamlessly integrates with Strava to provide workout insights."
            link="https://phobos.fitness"
            buttonText="Phobos"
          />
        </Col>
        <Col xs="12" lg="6">
          <PortfolioCard
            imgSource={noteToSelf}
            title="Note to Self"
            subtitle="Mongo, Express, React, Node"
            copy="A tiny application to store short observations and get retrieve them."
            link="https://note-to-self-prod.herokuapp.com/"
            buttonText="Note to Self"
          />
        </Col>
      </Row>
    </div>
  );
}
