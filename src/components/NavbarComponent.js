import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [showNavBackground, setShowNavBackground] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setShowNavBackground(true);
      } else {
        setShowNavBackground(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  const path = window.location.pathname;
  return (
    <div>
      <Navbar
        className="navbar"
        style={{ background: `${showNavBackground ? `black` : `transparent`}` }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                className="navbar-logo"
                src={`https://saimohanayinam.github.io/netflix0.1/images/net.png`}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {path === "/" && (
              <Link className="signin_link nav-link" to="/signin">
                <Navbar.Text>Sign In</Navbar.Text>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
