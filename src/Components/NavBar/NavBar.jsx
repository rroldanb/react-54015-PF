
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";

import productosJson from "../../data/productos.json";



export default function NavBar () {

  const categorias = [...new Set(productosJson.filter(producto => producto.activo && producto.categoria!=="Descuentos").map(producto => producto.categoria))];

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Logo width={100} height={100} />
          </Link>
        </Navbar.Brand>
    <Nav className="me-auto">
      {categorias.map(categoria => (
        <NavLink key={categoria} to={`/categoria/${categoria}`}>
          {categoria}
        </NavLink>
      ))}
      {/* <NavLink to="/categoria/Descuentos" id="ofertas">Ofertas</NavLink> */}
    </Nav>
    <Nav className="ml-auto">
            <Nav.Link href="#shoppingCart">
              
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}



