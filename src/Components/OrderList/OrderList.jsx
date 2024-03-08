import "./OrderList.css"
import { useEffect, useState } from "react";
import { toPesos } from "../../helpers/utils";
import { Link } from "react-router-dom";



export default function OrderList({ orderedProduct }) {
    const [precioUnitario, setPrecioUnitario] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    useEffect(() => {
        setPrecioUnitario(orderedProduct.precio);
    }, [orderedProduct]);

    useEffect(() => {
        setPrecioTotal(orderedProduct.cantidad * precioUnitario);
    }, [orderedProduct.cantidad, precioUnitario]);


    return (
    
        <div className="listaProductosOrdenados container">
            <span>
            <Link className="ver-mas" to={`/producto/${orderedProduct.id}`}>
                <img src={orderedProduct.img} alt={orderedProduct.nombre} style={{width:"3rem"}}/>
            </Link>
                </span>
            <span>{orderedProduct.cantidad}</span>
            <span>{orderedProduct.nombre}</span>
            <span>{toPesos(precioUnitario)}</span>
            <span>{toPesos(precioTotal)}</span>
        </div>
    )
}
