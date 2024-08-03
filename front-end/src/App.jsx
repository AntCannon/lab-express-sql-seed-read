import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// components 
import Nav from '../src/Components/Header/Nav.jsx'
import Footer from '../src/Components/Footer/Footer.jsx'
import Home from './Components/Content/Home.jsx'

function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <aside>
          aside
        </aside>
        <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      </main>
      <Footer />
    </>
  )
}

export default App
