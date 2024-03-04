
import "./CartCant.css"

const CartCant = ({ count, handlerResta, handlerSuma}) => {


    return (


        <div className="m-2 flex justify-center itemCantidad"
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}
        >
            <button className="btn btn-warning btnHandleCantidad" onClick={handlerResta}>
                -
            </button>
            <p className="text-center px-3 txtCantidad">{count}</p>

            <button className="btn btn-warning btnHandleCantidad" onClick={handlerSuma}>
                +
            </button>
        </div>


    );
};

export default CartCant;
