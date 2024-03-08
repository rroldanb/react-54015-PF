
import { toPesos } from "../../helpers/utils";
import { IoTrashOutline } from "react-icons/io5";
import CartCant from "../CartCant/CartCant";
import "./CartList.css"
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
                <div className='container cartListContainer overflow-auto'>

                    <div className="cartList" style={{ borderTop: '1px solid black' }}>
                        <span className="spanDetail spanImagen">

                            <Link className="ver-mas" to={`/producto/${prod.id}`}>
                                <img className="carrito-producto-imagen carritoProductoDetalles" src={prod.img} alt={prod.nombre} />
                            </Link>
                        </span>
                        <span className="spanDetail spanNombre">
                            <div className=" carritoProductoDetalles">
                                <p className="carrito-producto-titulo">{prod.nombre}</p>
                            </div>

                        </span>
                        <span className="spanDetail spanCant">

                            <div className="carrito-producto-cantidad carritoProductoDetalles">

                                <CartCant
                                    count={cantidad}
                                    handlerSuma={handleSumar}
                                    handlerResta={handleRestar}
                                    setCantidad={setCantidad}
                                    stock={prod.stock}
                                />

                            </div>
                        </span>
                        <span className="spanDetail spanStock">

                            <div className=" carritoProductoDetalles">
                                <p className="carrito-producto-stock" >{prod.stock} {prod.unidad}</p>
                            </div>
                        </span>
                        <span className="spanDetail spanUnitario">

                            <div className="carrito-producto-precio carritoProductoDetalles">
                                <p> {toPesos(prod.precio)}</p>
                            </div>
                        </span>
                        <span className="spanDetail spanSubTotal">

                            <div className="carrito-producto-subtotal carritoProductoDetalles">
                                <p>{toPesos(prod.precio * prod.cantidad)}</p>
                            </div>
                        </span>
                        <span className="spanDetail spanEliminar">

                            <div className="carritoProductoDetalles">

                                <Button
                                    className=" outline-danger mx-2 fs-3 px-0 border-0 rounded-circle fw-600"
                                    variant="outline-danger"
                                    onClick={() => removeItem(prod.id)} >
                                    <IoTrashOutline />
                                </Button>
                            </div>
                        </span>

                    </div>

                </div>
            </div>
        </div>
    )
}
