import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { buscaId , fakeProduct} from "../../helpers/pideDatos";
import LeonParrillero from "../LeonParrillero/LeonParrillero";


export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscaId(itemId)
      .then((res) => setItem(res))
      .catch((messageNF) => {
        console.log(messageNF);
        setItem(fakeProduct);
      })
      .finally(() => setLoading(false));
      
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
        item && <ItemDetail producto={item} greeting={greeting} message= {message} />
      )}


    </main>
  );

}
