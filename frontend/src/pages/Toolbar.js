import React, { Component } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {
  Link
} from "react-router-dom";

function Toolbar() {
  return (
    <>
      <Navbar  variant="dark" style={{backgroundColor: "#0377fc", color : "#0377fc" }}>
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/classes">Classes</Nav.Link>
          <Nav.Link href="/instructors">Instructors</Nav.Link>
          <Nav.Link href="/locations">Locations</Nav.Link>     
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Toolbar;