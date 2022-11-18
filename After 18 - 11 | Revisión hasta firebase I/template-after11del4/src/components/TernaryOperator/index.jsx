import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const TernaryOperator = ({condition}) => {
  return (
    condition ? <ClimbingBoxLoader/> : <h2>La condición es false</h2>
  )
}

export default TernaryOperator