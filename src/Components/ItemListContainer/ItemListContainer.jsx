
import "./ItemListContainer.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import { buscaCategoria } from "../../helpers/pideDatos";



export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const greeting = "Bienvenidos a RR's Grill Store"
  let message = categoryId ? `Categoría seleccionada: ${categoryId}` : 'Todo Para tu Parrilla'

  useEffect(() => {
    buscaCategoria(categoryId)
      .then((res) => setProductos(res))
      .catch((message) => {
        console.log(message);
      });
  }, [categoryId]);

  message = productos.length > 0 ? message : `No disponemos de productos para la categoría ${categoryId}`


  return (
    <main>
      <h2>{greeting}</h2>
      <p>{message}</p>
      <ItemList productos={productos} />
    </main>
  );
}
