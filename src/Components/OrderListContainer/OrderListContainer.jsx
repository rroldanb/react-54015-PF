import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../data/firebaseConfig";

export default function OrderListContainer() {
    const [orderId, setOrderId] = useState("");
    const [codigoBuscar, setcodigoBuscar] = useState("")
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState(null);
    const [busquedaVacia, setBusquedaVacia] = useState(false)

    useEffect(() => {
        if (orderId) {
            setLoading(true);
            const orderRef = doc(db, "orders", orderId);
            getDoc(orderRef).then((documento) => {
                if (documento.exists()) {
                    setOrder({ id: documento.id, ...documento.data() });
                    setBusquedaVacia(false)
                } else {
                    setOrder(null);
                    setBusquedaVacia(true); 
                }
            }).catch((error) => {
                console.error("Error obteniendo el producto:", error);
                setOrder(null); 
            }).finally(() => {
                setLoading(false); 
            });
        }
    }, [orderId]);



    const handleInputChange = (event) => {
        setcodigoBuscar(event.target.value);
    };


    const handleSearchButtonClick = async () => {

        if (!codigoBuscar) {
            console.log("Ingresa un ID de pedido válido");
            return;
        }

        try {
            console.log("Buscando pedido con ID:", codigoBuscar);
            setOrderId(codigoBuscar);

        } catch (error) {
            console.error("Error al buscar pedido:", error);
            setOrder(null);
        }
    };

    return (
        <div>
            <h2 style={{ marginTop: "12rem" }}>Mis órdenes</h2>
            <p>Ingresa el código de tu pedido para ver los detalles</p>
            <div className="container" style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
                <input id="orderIdInput" type="text" onChange={handleInputChange} style={{ fontSize: "1.4rem", margin: "0 8px", width:"18rem" }} />
                <button className="btn btn-warning" onClick={handleSearchButtonClick}>Buscar</button>
            </div>
            {(loading ) && <div style={{height:"10rem"}}> <img src="/leon.gif" alt="Buscando" /></div>}
            {order && (
                <div>
                    <h3>Detalles del Pedido:</h3>
                    <p>ID: {order.id}</p>
                    <p>Producto: {order.productos[0].nombre}</p>
                    {/* Renderizar otros detalles del pedido aquí */}
                </div>
            )}
            {(busquedaVacia ) && <p>No se encontró ningún pedido con el ID ingresado</p>}

        </div>

    );
}
