import React from 'react'
import  Header  from './Components/Header'
import { Outlet } from 'react-router-dom'
import  Footer  from './Components/Footer.jsx'

function Layout() {
  return (
    <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout