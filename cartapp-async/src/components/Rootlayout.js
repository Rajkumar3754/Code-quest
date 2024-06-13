import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Rootlayout = () => {
  return (
    <div>
        

        
     <NavBar />
      <main>
        <Outlet />
      </main>
      
    </div>
  )
}

export default Rootlayout
