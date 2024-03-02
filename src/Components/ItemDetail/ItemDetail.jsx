import { Row, Col } from "react-bootstrap";
import { toPesos } from "../../helpers/utils";
import ItemCantidad from "../ItemCantidad/ItemCantidad";

import { CartContext } from '../../Context/CartContext';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

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
        <Row xs={1} md={2} className="g-5">
          <Col >
            <div className="itemDetailImg" >
              <img src={producto.img} alt={producto.nombre} title={producto.nombre} style={{ borderRadius: '1rem', width: '420px' }} />
            </div>
            <div>


            {isAdded ? (
            <div className="block">
              <p className="text-center">Producto agregado al carrito</p>
              <div className="mx-2 mt-4">
                <Link to="/shoppingcart" className="btn btn-secondary">
                  Ir al Carrito
                </Link>
                <Link to="/" className="btn btn-warning">
                  Seguir comprando
                </Link>
              </div>
            </div>
          ) : (
            <ItemCantidad
                count={cantidad}
                handlerSuma={handleSumar}
                handlerResta={handleRestar}
                accionBoton={() => { addToCart( cantidad, producto, setIsAdded) }}
                textoBoton="Agregar al carrito"
                isAdded={isAdded}
              />
          )}


              
            </div>
          </Col>
          <Col>
            <div className="descripcionDetail" id="descripcionDetail"
              style={{
                color: "white"
              }}>
              <h3 style={{ textDecoration: 'underline' }}>{producto.nombre}</h3>
              <div className="itemDetailBase" style={{ paddingLeft: '2rem', textAlign: 'left' }}>

                {producto.unidad && <p><strong>Presentación:</strong> {producto.unidad}</p>}
                <p><strong>Precio:</strong>  {toPesos(producto.precio)}</p>
                <p><strong>Stock:</strong>  {producto.stock}</p>
                {producto.precioxkilo && (
                  <p><strong>Precio por Kilo:</strong>  {toPesos(producto.precioxkilo)}</p>
                )}
              </div>
              <div style={{ padding: '0', paddingLeft: '2rem', textAlign: 'left' }}>

                {producto.descripcion && <p><strong>Descripción:</strong>  {producto.descripcion}</p>}
              </div>
            </div>
            {producto.caracteristicas && (
              <div className="caracteristicasDetail" id="caracteristicasDetail"
                style={{
                  color: "white"
                }
                }
              >
                <h3 style={{ textDecoration: 'underline' }}>Características:</h3>
                <ul style={{ paddingLeft: '2rem', textAlign: 'left' }}>
                  {Object.entries(producto.caracteristicas).map(([key, value]) => (
                    <li key={key} style={{ paddingLeft: '1rem', textAlign: 'left' }}>
                      <strong>{key}:</strong> {value}
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
