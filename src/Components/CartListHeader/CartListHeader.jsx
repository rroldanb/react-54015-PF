import "./CartListHeader.css"
const CartListHeader = () => {
    return (
        <div>
            <div className="carritoProductosHeader">
                <span>Producto</span>
                <span>Cantidad</span>
                <span>Stock</span>
                <span>Precio</span>
                <span>Subtotal</span>
                <span></span>

            </div>
            <div className="cartProdHeader">
            </div>
        </div>
    )
}

export default CartListHeader