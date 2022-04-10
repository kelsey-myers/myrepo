import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";

export default function NavBar() {
  const [checked, setChecked] = useState(false);

  return (
    <Navbar
      onToggle={() => {
        setChecked((prevChecked) => !prevChecked);
      }}
      variant="dark"
      className="fixed-top beige"
      expand="sm"
    >
      <Link to="/" className="text-black mr-auto" id="navbrand">
        Kelsey<p className="inline secondary">Myers</p>
      </Link>
      <UseAnimations
        reverse={checked}
        animation={menu4}
        strokeColor="#9ea9b7"
        size="35"
        render={(eventProps, animationProps) => (
          <Navbar.Toggle {...eventProps}>
            <div {...animationProps} />
          </Navbar.Toggle>
        )}
      />
      <Navbar.Collapse>
        <Nav className="text-center ml-auto align-items-center navigation">
          <Nav.Link
            to="/"
            eventKey="1"
            as={Link}
            className="primary options pl-3 pr-3"
          >
            Home
          </Nav.Link>
          <NavDropdown
            title="Portfolio"
            id="collapsible-nav-dropdown"
            className="beige"
          >
            <NavDropdown.Item>
              <Nav.Link
                eventKey="2"
                as={Link}
                to="/dev-portfolio"
                className="primary options"
              >
                Development
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link
                eventKey="3"
                as={Link}
                to="/design-portfolio"
                className="primary options "
              >
                UX/Design
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            eventKey="4"
            as={Link}
            to="/projects"
            className="primary options pl-3 pr-3"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            eventKey="5"
            as={Link}
            to="/contact"
            className="primary options pl-3 pr-3"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
