import React from 'react';
import './styles.scss';

export const ClasesCondicionales = ({condition, additionalClass}) => {
  return (
    <div
        className={`${condition ? 'blue-class' : 'red-class'} ${additionalClass || ''}`}
    >
        <h2>Clases condicionales</h2>
    </div>
  )
}
