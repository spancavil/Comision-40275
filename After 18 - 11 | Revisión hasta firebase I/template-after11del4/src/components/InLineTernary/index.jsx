import React from 'react'

const InLineTernary = ({lang}) => {
  return (
    <h1>{lang === "guarani" ? "eyu porayte!" : "Hola!"}</h1>
  )
}

export default InLineTernary