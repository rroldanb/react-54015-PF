// import React from 'react'
import { BsCart } from "react-icons/bs";

import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="container">
        <button>
        <BsCart />
        <span className="numerito">0</span>
        </button>
    </div>
  )
}

export default CartWidget