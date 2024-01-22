// import React from 'react'
import { BsCart } from "react-icons/bs";

import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="container">
      <button>
        <BsCart />
      </button>
      <span className="numerito">0</span>
    </div>
  );
};

export default CartWidget;
