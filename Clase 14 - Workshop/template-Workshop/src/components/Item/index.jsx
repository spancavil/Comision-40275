import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../contexts/Theme';
import './styles.scss'

/**
 * Card que muestra el producto o personaje
 * @property {Object} product Recibe el product en formato de objeto para renderizarlo
 * @returns JSX con el renderizado del producto
 */

const Item = ({product}) => {

  const navigate = useNavigate()

  const {themeColor} = useContext(Theme);

  const navigateDetail = () => {
    //Navegar hacia el detalle del producto
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div 
      onClick={navigateDetail} 
      className= { themeColor === "light" ? "card-detail" : "card-detail-dark" }
    >
      <img src={product.image} alt="character"/>
      <p key={product.id}>{product.name}, stock: {product.quantity}</p>
    </div>
  )
}

export default Item