import React from 'react';
import './styles.scss';

const ItemDetail = ({character}) => {
  console.log(character);
  return (
    <div className='item-detail'>
      <img src={character.image} width={450}/>
      <h1>{character.name}</h1>
      <button className='btn btn-danger sm-3'>Bootstrap button</button>
    </div>
  )
}

export default ItemDetail