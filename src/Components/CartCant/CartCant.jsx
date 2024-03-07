
import { Button } from "react-bootstrap";
import "./CartCant.css"

const CartCant = ({ count, handlerResta, handlerSuma}) => {


    return (


        <div className="m-2 flex justify-center itemCantidad" st
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
        >
            <Button variant="outline-warning"  className=" btnHandleCantidad" onClick={handlerResta}>
                -
            </Button>
            <p className="text-center px-3 txtCantidad">{count}</p>

            <Button variant="outline-warning"  className=" btnHandleCantidad" onClick={handlerSuma}>
                +
            </Button>
        </div>


    );
};

export default CartCant;
