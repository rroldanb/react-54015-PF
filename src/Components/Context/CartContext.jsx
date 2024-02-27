import { createContext, useState } from "react";

export const CartContext = createContext ([]);

export function CartProvider ({children}) {

const [cart, setCart] = useState([])

function addItem(item, quantity){
    setCart([...cart, {...item, quantity}])
}

function removeItem(){

}

    return <CartContext.Provider value={{cart, addItem, removeItem}} >{children}</CartContext.Provider>;
}