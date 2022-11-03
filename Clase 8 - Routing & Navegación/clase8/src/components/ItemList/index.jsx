import React from 'react'
import Item from '../Item'

//Se encarga de hacer el map con los productos
const ItemList = ({products}) => {
  return (
    products.map(product => {
        return <Item key={product.id} product={product}/>
    })
    )
}

export default ItemList