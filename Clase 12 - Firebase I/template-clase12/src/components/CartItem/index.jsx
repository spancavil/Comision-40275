import React from 'react'

const CartItem = ({item}) => {
  return (
    <div>
        <img src ={item.image} width={150} alt='cart-item'/>
        <h1>{item.name}</h1>
    </div>
  )
}

export default CartItem