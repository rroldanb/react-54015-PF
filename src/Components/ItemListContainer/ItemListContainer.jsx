// import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = ({greeting, message}) => {
  return (
    <div>
        <h2>{greeting}</h2>
        <p>{message}</p>
    </div>
  )
}

export default ItemListContainer