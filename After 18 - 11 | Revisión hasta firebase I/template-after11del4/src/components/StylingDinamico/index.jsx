import React from 'react';
import './styles.scss';

const StylingDinamico = ({additionalStyles}) => {
  return (
    <div
        className='red-class'
        style={{
            ...additionalStyles
        }}
    >
        <h1>Styling dinámico</h1>
    </div>
  )
}

export default StylingDinamico