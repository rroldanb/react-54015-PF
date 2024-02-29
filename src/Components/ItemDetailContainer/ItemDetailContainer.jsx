import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { fakeProduct } from "../../helpers/pideDatos";
import LeonParrillero from "../LeonParrillero/LeonParrillero";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);

    const db = getFirestore();

    // Codigo para traer UN producto
    const productoRef = doc(db, "Productos", itemId);

    getDoc(productoRef).then((documento) => {
      if (documento.exists()) {
        setItem({ id: documento.id, ...documento.data() })

        setLoading(false);

      } else {
        setItem(fakeProduct);
        setLoading(false);
      }
    }).catch((error) => {
      console.error("Error obteniendo el producto:", error);


    });


  }, [itemId]);




  const greeting = "RR's Grill Store";
  const message = item
    ? "Detalles de tu producto:"
    : "El producto que buscas ya no está disponible";

  return (
    <main>

      {loading ? (
        <>
          <LeonParrillero />
        </>
      ) : (
        item && <ItemDetail producto={item} greeting={greeting} message={message} />
      )}


    </main>
  );

}
