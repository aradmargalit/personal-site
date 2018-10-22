import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import honk_image from './honk64.png';
import './MenuBar.css';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <LinkContainer to="/">
            <NavbarBrand>
              <img className="logo" src={honk_image} alt="logo" />
              Arad Margalit
            </NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LinkContainer to="/about-me">
                  <NavLink>About Me</NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem>
                <NavLink href="/resume/">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/aradmargalit">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
