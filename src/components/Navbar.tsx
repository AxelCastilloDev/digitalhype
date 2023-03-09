import React from "react";
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

export const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="#">Decrypt Messages</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
