
import "./ItemListContainer.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import { buscaCategoria } from "../../helpers/pideDatos";
import LeonParrillero from "../LeonParrillero/LeonParrillero";



export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const greeting = "Bienvenidos a RR's Grill Store"
  let message = categoryId ? `Categoría seleccionada: ${categoryId}` : 'Todo Para tu Parrilla'

  useEffect(() => {
    setLoading(true)
    buscaCategoria(categoryId)
      .then((res) => setProductos(res))
      .catch((message) => {
        console.log(message);
      })
      .finally(() => setLoading(false));

  }, [categoryId]);

  message = productos.length > 0 ? message : `No disponemos de productos para la categoría ${categoryId}`


  return (
    <main>

      {loading ? (
        <>
          <LeonParrillero />
        </>
      ) : (
        <>
          <h2>{greeting}</h2>
          <p>{message}</p>
          <ItemList productos={productos} />
        </>
      )}


    </main>
  );
}
