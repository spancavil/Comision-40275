import React from 'react';
import termo from '../../assets/termo.webp';

const Encuesta = ({condition}) => {
  return (
    condition && <img src={termo} alt="termo"/> 
  )
}

export default Encuesta