import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toPesos } from "../../helpers/utils";

export default function Item({ item }) {
  return (
    <div>
      <Col>
        <Card
          style={{ width: "18rem", borderRadius: "1rem" }}
          bg="dark"
          text="white"
          className="mb-2 itemCards"
          key={item.id}
        >
          <Link className="ver-mas" to={`/producto/${item.id}`}>

            <Card.Img
              variant="top"
              src={item.img}
              style={{
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
                maxHeight: "18rem",
                minHeight: "18rem",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Link>
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>{toPesos(item.precio)}</Card.Text>
            <Card.Text 
            style={{fontSize:'.7rem'}}
            >Stock:{item.stock + ' '+ item.unidad}</Card.Text>
            <div className="card-actions justify-end gap-0 mt-2">
                <Link to={`/producto/${item.id}`} className="btn btn-warning">
                  Ver Detalles
                </Link>
              </div>


          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
