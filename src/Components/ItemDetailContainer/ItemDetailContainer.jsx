import { useParams } from "react-router-dom";
import productosJson from "../../data/productos.json";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function asyncMock(itemId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productosJson.find((producto) => producto.id === itemId);
      if (producto) {
        resolve(producto);
      } else {
        reject("El producto que buscas ya no está disponible");
      }
    }, 2000);
  });
}

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    asyncMock(itemId)
      .then((res) => setItem(res))
      .catch((message) => {
        console.log(message);
      });
  }, [itemId]);

  const greeting = "RR's Grill Store";
  const message = item
    ? "Detalles de tu producto:"
    : "El producto que buscas ya no está disponible";

  return (
    <main>
      {item && <ItemDetail producto={item} greeting={greeting} message= {message} />}
    </main>
  );
}
