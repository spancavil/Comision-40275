import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.scss'

//Card
const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = () => {
    //Navegar hacia el detalle del producto
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div onClick={navigateDetail} className="card-detail">
      <img src={product.image} alt="character"/>
      <p key={product.id}>{product.name}, stock: {10}</p>
    </div>
  )
}

export default Item