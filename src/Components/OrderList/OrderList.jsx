import "./OrderList.css"
import { useEffect, useState } from "react";
import { toPesos } from "../../helpers/utils";



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
            <span><img src={orderedProduct.img} alt={orderedProduct.nombre} style={{width:"3rem"}}/></span>
            <span>{orderedProduct.cantidad}</span>
            <span>{orderedProduct.nombre}</span>
            <span>{toPesos(precioUnitario)}</span>
            <span>{toPesos(precioTotal)}</span>
        </div>
    )
}
