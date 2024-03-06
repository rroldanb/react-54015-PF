import "./OrderListContainer.css"
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import { db } from "../../data/firebaseConfig";
import OrderList from "../OrderList/OrderList";
import { toPesos } from "../../helpers/utils";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OrderListContainer() {
    const [orderId, setOrderId] = useState("");
    const [codigoBuscar, setcodigoBuscar] = useState("")
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState(null);
    const [busquedaVacia, setBusquedaVacia] = useState(false)
const {setCart} = useContext(CartContext)

    useEffect(() => {
        // setOrderId("awuRPdnUhGYBtqC0Pi61")
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

    const handleRepetirCompra = (productos)=>{
        setCart(productos)
    }


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
            <p style={{color:"slategray"}}>Ejemplo: 8ELz7zULvWuhjiYY15ON</p>
            <div className="container" style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
                <input id="orderIdInput" type="text" onChange={handleInputChange} style={{ fontSize: "1.4rem", margin: "0 8px", width: "18rem" }} />
                <button className="btn btn-warning" onClick={handleSearchButtonClick}>Buscar</button>
            </div>
            {(loading) && <div style={{ height: "10rem" }}> <img src="/leon.gif" alt="Buscando" /></div>}
            {order && (
                <div className="orderDetailsContainer container">

                    <div className="orderDetails container">
                        <div className="orderDetailsHeader container">
                            <p>Detalles del Pedido:</p>
                            <h3> {order.id}</h3>
                        </div>
                        <div className="fechaHora container">
                            <p><strong>Fecha:</strong>  {order.fecha}</p>
                            <p> <strong>Hora:</strong>  {order.hora}</p>
                        </div>
                        <div className="listHeaders container">
                            <span>Imagen</span>
                            <span>Cantidad</span>
                            <span>Nombre</span>
                            <span>P.Unitario</span>
                            <span>P.Total</span>
                        </div>

                        {order.productos.map((prod) => (
                            <div key={prod.id}>
                                <OrderList orderedProduct={prod} />
                            </div>
                        ))}
                    </div>
                    <div className="orderDatailsFooter container">
                        <Link to="/shoppingCart">
                    <Button variant="outline-warning" onClick={()=>handleRepetirCompra(order.productos)}>Repetir la compra</Button>
                </Link>
                        <p>Total:</p>
                        <h2>{toPesos(order.total)}</h2>
                    </div>

                </div>
            )}
            {(busquedaVacia) && <p>No se encontró ningún pedido con el ID ingresado</p>}

        </div>

    );
}
