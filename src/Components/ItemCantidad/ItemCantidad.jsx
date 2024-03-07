
import "./ItemCantidad.css"

const ItemCantidad = ({ count, handlerResta, handlerSuma, accionBoton , textoBoton}) => {


  return (


      <div className="m-2 flex justify-center itemCantidad"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <button className="btn btn-warning btnHandleCantidad" onClick={handlerResta}>
          -
        </button>
        <p className="text-center px-3 txtCantidad">{count}</p>
        <button className="btn btn-warning btnHandleCantidad" onClick={handlerSuma}>
          +
        </button>
      <div>
        <button className="btn btn-warning px-3 btnAccion"
          style={{ fontSize: '1rem', height:"2rem"}}
          onClick={accionBoton}
        >{textoBoton}</button>
      </div>
      </div>


  );
};

export default ItemCantidad;
