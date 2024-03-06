import "./ItemDetail.css"

import { Row, Col } from "react-bootstrap";
import { toCapital, toPesos } from "../../helpers/utils";
import ItemCantidad from "../ItemCantidad/ItemCantidad";

import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

export default function ItemDetail({ producto, greeting, message }) {

  const { addToCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < producto.stock && setCantidad(cantidad + 1)
  }

  return (
    <div>
      <header>
        <h2 className="titulo">{greeting}</h2>
        <p>{message}</p>
      </header>

      <section className="ItemDetailContainer container text-center">
        {/* <Row xs={1} md={2} className="g-2"> */}
        <Row xs={1} md={1} lg={2} className="g-2 justify-content-center">

          <Col className="align-items-center justify-content-center details-left">
            <div className="itemDetailImg" >
              <img src={producto.img} alt={producto.nombre} title={producto.nombre} style={{ borderRadius: '1rem', width: '420px' }} />
            </div>
            <div>
            {isAdded ? (
            <div className="block">
              <div className="mx-2 mt-4" >
                <Link to="/shoppingcart" className="btn btn-secondary" style={{fontSize:"1.5rem"}}>
                  Ir al Carrito
                </Link>
                <Link to= {`/categoria/${producto.categoryKey}`} className="btn btn-warning" style={{fontSize:"1.5rem"}}>
                  Volver a {toCapital(producto.categoryKey)}
                </Link>
              </div>
            </div>
          ) : ( producto.stock > 0 && (
            <ItemCantidad
                count={cantidad}
                handlerSuma={handleSumar}
                handlerResta={handleRestar}
                accionBoton={() => { addToCart( cantidad, producto, setIsAdded) }}
                textoBoton="Agregar al carrito"
                isAdded={isAdded}
              />
          ))}
            </div>
          </Col>
          <Col>
            <div className="descripcionDetail" id="descripcionDetail"
              style={{color: "white"}}>
              <div className="itemDetailBase" style={{ textAlign: 'left' }}>

                {producto.unidad && <p><strong style={{color:"orange"}}>Presentación:</strong> {producto.unidad}</p>}
                <p><strong style={{color:"orange"}}>Precio:</strong>  {toPesos(producto.precio)}</p>
                <p><strong style={{color:"orange"}}>Stock:</strong>  {producto.stock}</p>
                {producto.precioxkilo && (
                  <p><strong style={{color:"orange"}}>Precio por Kilo:</strong>  {toPesos(producto.precioxkilo)}</p>
                )}
              </div>
              <div style={{  textAlign: 'left' }}>

                {producto.descripcion && <p><strong style={{color:"orange"}}>Descripción:</strong>  {producto.descripcion}</p>}
              </div>
            </div>
            {producto.caracteristicas && (
              <div className="caracteristicasDetail" id="caracteristicasDetail"
                style={{
                  color: "white", textAlign: 'left'
                }
                }
              >
                <h3 style={{ textDecoration: 'underline', margin:"2rem 0"}}>Características:</h3>
                <ul style={{ textAlign: 'left' , paddingLeft:"0", listStyleType:"none" }}>
                  {Object.entries(producto.caracteristicas).map(([key, value]) => (
                    <li key={key} style={{ fontSize:"1.5rem", textAlign: 'left'}}>
                      <strong style={{color:"orange"}}>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Col>
        </Row>
      </section>
    </div>
  );
}
