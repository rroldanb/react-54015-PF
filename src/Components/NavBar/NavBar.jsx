
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";
import Logo from "../Logo/Logo";
import LeonParrillero from "../LeonParrillero/LeonParrillero";
import CartWidget from "../CartWidget/CartWidget";


import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";



export default function NavBar() {

  const db = getFirestore();
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)

    const categoriesRef = collection(db, "categorias");
    const orderedCategoriesRef = query(categoriesRef, orderBy("priority"));


      getDocs(orderedCategoriesRef).then((snapshot) => {
        const categoriesMap = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

      setCategories(categoriesMap);
      setLoading(false);
    }).catch((error) => {
      console.error("Error obteniendo las categorías:", error);
      setLoading(true);
    });

  }, [db]);



  return (
    <>

      {loading ? (
        <>
          <LeonParrillero />
        </>
      ) : (
        <>
          <Navbar bg="dark" data-bs-theme="dark" fixed="top">
            <Container>

              <Navbar.Brand>
                <Link to="/">
                  <Logo width={100} height={100} />
                </Link>
              </Navbar.Brand>

              <Nav className="me-auto">
                {categories.map(categoria => (
                  <NavLink key={categoria.id} to={`/categoria/${categoria.key}`}>
                    {categoria.descripcion}
                  </NavLink>
                ))}
                <div className="ordersLink" style={{}}>

                <NavLink to="/orders">Mis órdenes</NavLink>
                </div>

              </Nav>

              <Nav className="ml-auto">
                <NavLink to="/shoppingcart">
                  <CartWidget />
                </NavLink>
              </Nav>

            </Container>
          </Navbar>

        </>
      )}



    </>
  );
}



