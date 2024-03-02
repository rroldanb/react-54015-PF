
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
            {/* <input
                type="number"
                className="text-center px-3 txtCantidad"
                value={count}
                onChange={(e) => setCantidad(parseInt(e.target.value) || 0)}
                min="1"
                max={stock}
            /> */}
            <button className="btn btn-warning btnHandleCantidad" onClick={handlerSuma}>
                +
            </button>
        </div>


    );
};

export default CartCant;
