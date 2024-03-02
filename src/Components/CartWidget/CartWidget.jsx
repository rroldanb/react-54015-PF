// import React from 'react'
import { BsCart } from "react-icons/bs";

import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { toPesos } from "../../helpers/utils";

const CartWidget = () => {
    const { quantityInCart, totalPrice } = useContext(CartContext);
  return (
    <div className="container iconoCarro ">
        <BsCart />
      <span className="numerito">{quantityInCart()}</span>
      <span className="monto">{toPesos(totalPrice())}</span>
    </div>
  );
};

export default CartWidget;
