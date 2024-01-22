// import React from 'react'
import './ItemListContainer.css'
import Logo from '../Logo/Logo'
const ItemListContainer = ({greeting, message}) => {
  return (
    <div>
        <h2>{greeting}</h2>
        <p>{message}</p>
        <Logo width={350} height={500}/>
    </div>
  )
}

export default ItemListContainer