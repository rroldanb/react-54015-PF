import { Row, Col } from "react-bootstrap";
import { toPesos } from "../../helpers/Utils";
import ItemCantidad from "../ItemCantidad/ItemCantidad";

export default function ItemDetail({ producto, greeting, message }) {
  return (
    <div>
      <header>
        <h2>{greeting}</h2>
        <p>{message}</p>
      </header>

      <section className="ItemDetailContainer container ">
        <Row xs={1} md={2} className="g-5">
          <Col>
            <div className="itemDetailImg" >
              <img src={producto.img} alt={producto.nombre} title={producto.nombre} style={{borderRadius:'1rem', width:'420px'}}/>
            </div>
            <ItemCantidad stock={producto.stock} initial={1} />
          </Col>
          <Col>
            <div className="descripcionDetail" id="descripcionDetail"
              style={{
                color: "white"
              }}>
              <h3 style={{textDecoration:'underline'}}>{producto.nombre}</h3>
              <div className="itemDetailBase" style={{ paddingLeft: '2rem', textAlign: 'left' }}>

                {producto.unidad && <p><strong>Presentación:</strong> {producto.unidad}</p>}
                <p><strong>Precio:</strong>  {toPesos(producto.precio)}</p>
                <p><strong>Stock:</strong>  {producto.stock}</p>
                {producto.precioxkilo && (
                  <p><strong>Precio por Kilo:</strong>  {toPesos(producto.precioxkilo)}</p>
                )}
              </div>
              <div style={{ padding:'0', paddingLeft: '2rem', textAlign: 'left' }}>

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
                <h3 style={{textDecoration:'underline'}}>Características:</h3>
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
