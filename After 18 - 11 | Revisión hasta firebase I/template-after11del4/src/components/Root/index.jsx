import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default Root