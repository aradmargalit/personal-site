import './PortfolioCard.css';

import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap';

export default function PortfolioCard(props) {
  const { imgSource, title, subtitle, copy, link, buttonText } = props;

  return (
    <Card className="portfolio-card">
      <CardImg top width="100%" src={imgSource} alt={buttonText} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>{copy}</CardText>
        <Button
          style={{ margin: 0 }}
          outline
          color="primary"
          href={link}
          target="_blank"
        >
          {buttonText}
        </Button>
      </CardBody>
    </Card>
  );
}
