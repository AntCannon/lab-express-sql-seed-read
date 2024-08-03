import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// components 
import Nav from '../src/Components/Header/Nav.jsx'
import Footer from '../src/Components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
      <Routes>
        <Route />
      </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
