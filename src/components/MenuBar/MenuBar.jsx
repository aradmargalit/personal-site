import './MenuBar.css';

import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <LinkContainer to="/">
          <NavbarBrand>Arad Margalit</NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <LinkContainer to="/about-me">
                <NavLink>About Me</NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/resume">
                <NavLink>Resume</NavLink>
              </LinkContainer>
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
