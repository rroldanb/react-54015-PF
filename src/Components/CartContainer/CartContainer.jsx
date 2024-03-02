import { useContext } from 'react'
import { CartContext } from "../../Context/CartContext";
import "./CartContainer.css"
import { Link } from 'react-router-dom';

import CartList from '../CartList/CartList';
import { toPesos } from '../../helpers/utils';

const CartContainer = () => {


    const { cart, totalPrice, clearCart } = useContext(CartContext);


    const handleVaciar = () => {
        clearCart();
    }
    //http://localhost:5173/producto/2DfLnC9Bs8Vl6e4j0L9y
    return (
        <div className="container cart-container" >
            <div className='cart-header' >
                <div >
                    <h2>ShoppingCart, Estos son los productos en tu carrito</h2>
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
                    </> :
                    <h2>El carrito está vacío :(</h2>
            }

        </div>

    )
}





export default CartContainer