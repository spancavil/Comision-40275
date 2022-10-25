import React from 'react'

const Ad = ({children}) => {
  return (
    <div style={{
        background: 'green',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        {children}
    </div>
  )
}

export default Ad