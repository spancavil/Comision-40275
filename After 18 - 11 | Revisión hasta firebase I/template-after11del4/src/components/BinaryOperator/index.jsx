import React from 'react'

const BinaryOperator = ({condition}) => {
  return (
    <>
        <h2>Este el titulo de binary operator</h2>
        {condition && <p>Binary - Operator</p>}
    </>
  )
}

export default BinaryOperator