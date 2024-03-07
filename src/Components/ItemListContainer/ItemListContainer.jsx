
import "./ItemListContainer.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import LeonParrillero from "../LeonParrillero/LeonParrillero";

import { db } from "../../data/firebaseConfig";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { toCapital } from "../../helpers/utils";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const greeting = "Bienvenidos a RR's Grill Store"
  let message = categoryId ? `Categoría seleccionada: ${toCapital(categoryId)}` : 'Todo Para tu Parrilla'

  useEffect(() => {
    setLoading(true);
  
    const productosRef = categoryId ? 
      query(
        collection(db, "products"),
        where("categoryKey", "==", categoryId)
      ) : 
      collection(db, "products");
  
    getDocs(productosRef).then((collection) => {
      const products = collection.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
  
      setProductos(products);
      setLoading(false); 
    }).catch((error) => {
      console.error("Error obteniendo productos:", error);
      setLoading(false); 
    });
    
  }, [categoryId]); 
  
  message = productos.length > 0 ? message : `Disponemos de ${productos.length} productos para la categoría ${categoryId}`

  return (
    <main >
      {loading ? (
        <>
          <LeonParrillero />
        </>
      ) : (
        <>
          <h2 className="titulo">{greeting}</h2>
          <p>{message}</p>
          <ItemList productos={productos} />
          
        </>
      )}


    </main>
  );
}
