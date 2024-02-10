import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div>
      <Col>
        <Card
          style={{ width: "18rem", borderRadius: "1rem" }}
          bg="dark"
          text="white"
          className="mb-2 itemCards"
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
            <Card.Text>{item.precio}</Card.Text>
            <Card.Text>{item.id}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
