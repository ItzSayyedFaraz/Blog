import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Form } from "react-bootstrap";

const Navmenu = () => {
  return (
    <>
      <Head>
        <title>Blogify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
        />
      </Head>

      <div>
        <Navbar bg="light" expand="lg" className="rounded">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link ><Link href="/" legacyBehavior><span style={{color:"black"}}>Home</span></Link></Nav.Link>
                <Nav.Link href="/about"><Link href="/about" legacyBehavior><span style={{color:"black"}}>About</span></Link></Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Lifestyle</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Technical</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Educational</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Sports</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand
              
              className="d flex align-content-lg-stretch"
            >
              BlogiFy
            </Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navmenu;
