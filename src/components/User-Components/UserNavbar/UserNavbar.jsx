import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";



import "./UserNavbar.css"
const UserNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "black",minHeight:"100px", fontSize: "17px", }}
    >
      <img className="logo-img"
      
       alt="..." src={require("assets/img/logo.jpeg")}
      />

      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>

            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="event-news">EVENT & NEWS</Nav.Link>
            <Nav.Link href="/transformation">TRANSFOMATION</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
              <Nav.Link href="/about">ABOUT US</Nav.Link>

           

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
