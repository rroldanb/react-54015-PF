import { useContext } from 'react'
import { CartContext } from "../../Context/CartContext";
import "./CartContainer.css"
import { Link } from 'react-router-dom';
import { BsEmojiFrown } from "react-icons/bs";

import CartList from '../CartList/CartList';
import { toPesos } from '../../helpers/utils';

const CartContainer = () => {


    const { cart, totalPrice, clearCart } = useContext(CartContext);


    const handleVaciar = () => {
        clearCart();
    }
    return (
        <div className="container cart-container" 
        style={{marginTop:"12rem"}}>
            <div className='cart-header' >
                <div >
                    <h2>ShoppingCart</h2>
                    <p>Estos son los productos en tu carrito</p>
                </div>
            </div>
            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <CartList prod={prod} />
                    </div>
                ))

            }

            {
                cart.length > 0 ?
                    <>
                        <div className="cart-footer">
                            <Link to="/shoppingcart">
                                <button onClick={handleVaciar} className='btn btn-danger'>Vaciar Carro</button>

                            </Link>
                            <h2>Precio total: {toPesos(totalPrice())}</h2>
                            <Link to="/checkout">
                                <button className='btn btn-warning'>Finalizar compra</button>
                            </Link>
                        </div>
                        <Link to="/">
                                <button className='btn btn-warning'>Volver a la tienda</button>
                            </Link>
                    </> :
                    <div>

                    <img src="https://i.pinimg.com/originals/b7/2d/d0/b72dd05180817700dd6d7558ca653138.gif" alt="desierto" />
                    <h2>El carrito está vacío <BsEmojiFrown /></h2>
                    <Link to="/">
                                <button className='btn btn-warning'>Volver a la tienda</button>
                            </Link>
                    </div>
            }

        </div>

    )
}





export default CartContainer