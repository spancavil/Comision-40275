import React from 'react'

const Ad = ({children}) => {
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        background: 'green',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.6)',
    }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
            width: 900,
            height: 500,
            backgroundColor: 'salmon',
          }}
        >
          {children}
        </div>
    </div>
  )
}

export default Ad