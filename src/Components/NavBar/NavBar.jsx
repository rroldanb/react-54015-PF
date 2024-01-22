//import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <Logo width={35} height={50}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Todos</Nav.Link>
            <Nav.Link href="#carnes">Carnes Premium</Nav.Link>
            <Nav.Link href="#parrillas">Parrillas</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
            <Nav.Link href="#ofertas" id="ofertas">Ofertas</Nav.Link>
            
          </Nav>
          <Nav className="ml-auto">
              <Nav.Link href="#shoppingCart"> <CartWidget /> </Nav.Link>

          </Nav>
        </Container>

      </Navbar>
    </>
  );
}

export default NavBar;
