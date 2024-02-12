import { useState } from 'react';


const ItemCantidad = ({ stock, initial }) => {
  let [count, setCount] = useState(1);

  const handlerResta = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handlerSuma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div 
    style={{display:'flex', flexDirection:'row'}}
    className='flex justify-center itemCantidad'
    >
       

      <div className="m-2"
          style={{display:'flex', flexDirection:'row'}}
      >
        <button className="btn btn-warning" onClick={handlerResta}>
          -
        </button>
        <p className="text-center px-3">{count}</p>
        <button className="btn btn-warning" onClick={handlerSuma}>
          +
        </button>
      </div>
      <div>
        <button className="btn btn-warning m-2 px-4"
        style={{fontSize: '1.5rem', width:'300px'}}
        >Agregar al carrito</button>
      </div>
    

    </div>
  );
};

export default ItemCantidad;
