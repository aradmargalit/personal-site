import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
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
            <NavbarBrand>Arad Margalit</NavbarBrand>
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
                <NavLink
                  href="https://github.com/aradmargalit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/arad-margalit-6a0271a6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
