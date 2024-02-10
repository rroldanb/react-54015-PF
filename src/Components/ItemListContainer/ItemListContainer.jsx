
import "./ItemListContainer.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import productosJson from "../../data/productos.json";
import ItemList from "../ItemList/ItemList";

function asyncMock(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId === undefined) {
        const productosActivos = productosJson.filter((item) => {
          return item.activo;
        });
        resolve(productosActivos);
      } else {
        const productosFiltrados = productosJson.filter((item) => {
          return item.activo && item.categoria === categoryId;
        });
        if (productosFiltrados.length === 0) {
          reject("No hay elementos disponibles para esta categoría");
        }
        resolve(productosFiltrados);
      }
    }, 2000);
  });
}

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const greeting = "Bienvenidos a RR's Grill Store"
  const message = categoryId ? `Categoría seleccionada: ${categoryId}` : "De todo para tu parrilla"
  useEffect(() => {
    asyncMock(categoryId)
      .then((res) => setProductos(res))
      .catch((message) => {
        console.log(message);
      });
  }, [categoryId]);

  return (
    <main>
      <h2>{greeting}</h2>
      <p>{message}</p>
      <ItemList productos={productos} />
    </main>
  );
}
