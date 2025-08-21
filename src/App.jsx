import React from 'react'
import RouterComponent from './routers/Routercompoent'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      {/* Navbar will always stay at the top */}
      <Navbar />  

      {/* Router will load different pages (Home, About, etc.) */}
      <RouterComponent />
      <Footer/> 
    </>
  )
}

export default App
