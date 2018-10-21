import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Container,
  Row,
  Col,
} from 'reactstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col xs="12" lg="4" className="blurb">
            <h3>Arad Margalit</h3>
            <p>
              British shorthair bengal Tomcat ocicat Grimalkin. Sphynx mouser
              siamese. Himalayan ocicat or manx. Tiger cheetah or tomcat
              singapura american bobtail. Singapura maine coon but persian. Tom.
              Devonshire rex donskoy cougar. Thai tom yet birman or american
              shorthair. Siamese cornish rex for himalayan bengal or kitty so
              ragdoll. British shorthair mouser and bobcat but thai. Kitty
              cornish rex singapura. Thai devonshire rex, but egyptian mau, or
              birman so ocicat munchkin so manx. Lion bobcat and persian but
              maine coon or lion. Persian donskoy. Manx. Tiger. Siamese
              grimalkin balinese.
            </p>
            <p>
              Devonshire rex kitten donskoy so bobcat thai. Lion maine coon.
              Munchkin mouser. Havana brown balinese leopard siamese yet tom,
              jaguar egyptian mau. Tiger malkin lion singapura balinese and
              birman donskoy.
            </p>
          </Col>
          <Col xs="12" lg="8">
            <CardDeck>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeimg.com/256/180/tech"
                  alt="Card image cap"
                />
                <CardBody>
                  <a href="https://hulu.com/jobs">
                    <CardTitle>Hulu</CardTitle>
                  </a>
                  <CardSubtitle>Senior Software Developer</CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeimg.com/256/180/nature"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Running</CardTitle>
                  <CardSubtitle>Training for a marathon!</CardSubtitle>
                  <CardText>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeimg.com/256/180/people"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Honk!</CardTitle>
                  <CardSubtitle>Squeesh!</CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    );
  }
}
