import React from 'react'

const InLineStyle = ({color = "green"}) => {
  return (
    <div style={{
        height: 200,
        width: 200,
        backgroundColor: color
    }}></div>
  )
}

export default InLineStyle