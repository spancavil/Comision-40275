import React from 'react'

//Card
const Item = ({product}) => {
  return (
    <p key={product.id}>{product.description}, stock: {product.stock}</p>
  )
}

export default Item