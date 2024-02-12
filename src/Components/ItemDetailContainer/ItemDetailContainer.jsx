import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { buscaId } from "../../helpers/pideDatos";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    buscaId(itemId)
      .then((res) => setItem(res))
      .catch((messageNF) => {
        console.log(messageNF);
        setItem(fakeProduct);
      });
  }, [itemId]);

  const greeting = "RR's Grill Store";
  const message = item
    ? "Detalles de tu producto:"
    : "El producto que buscas ya no está disponible";

    const fakeProduct = {
      "id": "producto-no-encontrado",
      "nombre": "Producto no encontrado",
      "precio": 0,
      "stock": 0,
      "unidad": "",
      "img": "https://cdnx.jumpseller.com/todo-ssangyong/image/5630694/resize/635/635?1638889438",
      "descripcion": "Lo sentimos, el producto que buscas no está disponible en este momento.",
      "activo": false,
      "categoria": ""
    };
  
  
  
  return (
    <main>
      {item && <ItemDetail producto={item} greeting={greeting} message= {message} />}
    </main>
  );

}
