import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import logo from "../../img/white-red.png";
import "./NavBar.scss";

function NavBar() {
  return (
    <Navbar expand="lg" className="landingPage-nav active sticky-top ">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">
              <h4>Login</h4>
            </Nav.Link>
            <Nav.Link href="/register">
              <h4>Register</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

// <div className='landingPage-nav'>
//     Hi
// </div>
