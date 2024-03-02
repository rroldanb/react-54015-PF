
import { toPesos } from "../../helpers/utils";
import { IoTrashOutline } from "react-icons/io5";
// import ItemCantidad from "../ItemCantidad/ItemCantidad";
import CartCant from "../CartCant/CartCant";

import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

// const CartList = ({ prod }) => {
export default function CartList({ prod }) {

    const { updateCantCart, removeItem } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(prod.cantidad);


    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(prevCantidad => {
                const newCantidad = prevCantidad - 1;
                updateCantCart(newCantidad, prod);
                return newCantidad;
            });
        }
    }
    
    const handleSumar = () => {
        if (cantidad < prod.stock) {
            setCantidad(prevCantidad => {
                const newCantidad = prevCantidad + 1;
                updateCantCart(newCantidad, prod);
                return newCantidad;
            });
        }
    }



    return (
        <div>
            <div >
                <div className='container cartListContainer'>
                    <div className="cartList" style={{ borderTop:'1px solid black'}}>
                    <Link className="ver-mas" to={`/producto/${prod.id}`}>
                        <img className="carrito-producto-imagen" src={prod.img} alt={prod.nombre} />
</Link>
                        <div className="carrito-producto-titulo">
                            <small>Producto</small>
                            <p>{prod.nombre}</p>
                        </div>
                        <div className="carrito-producto-stock">
                            <small>Stock</small>
                            <p  >{prod.stock} {prod.unidad}</p>
                        </div>
                        <div className="carrito-producto-cantidad">
                            <small>Cantidad</small>

                            <CartCant
                                count={cantidad}
                                handlerSuma={handleSumar}
                                handlerResta={handleRestar}
                                setCantidad={setCantidad} 
                                stock={prod.stock}
                            />

                            {/* // <input className="carrito-producto-cantidad-input" type="number"
                                    //     value={prod.cantidad} /> */}
                        </div>
                        <div className="carrito-producto-precio">
                            <small>Precio</small>
                            <p> {toPesos(prod.precio)}</p>
                        </div>
                        <div className="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>{toPesos(prod.precio * prod.cantidad)}</p>
                        </div>
                        <button className="carrito-producto-eliminar btn btn-outline-danger mx-2 fs-3 px-0 border-0 fw-600" onClick={() => removeItem(prod.id)} ><IoTrashOutline /></button>

                    </div>

                </div>
            </div>
        </div>
    )
}

// export default CartList