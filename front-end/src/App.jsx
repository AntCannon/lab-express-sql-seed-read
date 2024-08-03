import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SongsContext } from './Components/Context/Context.js'

// components 
import Nav from '../src/Components/Header/Nav.jsx'
import Footer from '../src/Components/Footer/Footer.jsx'
import Songs from './Components/Content/Songs.jsx'

// pages
import Home from './Pages/Home.jsx'

function App() {
  const [ songsContext, setSongsContext ] = useState([])

  return (
    <>
    <SongsContext.Provider value={[songsContext, setSongsContext]}>
      <header>
        <Nav />
      </header>
      <main>
        <aside>
          aside
        </aside>
        <div className="content">
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/songs' element={<Songs />} />
          </Route>
        </Routes>
      </div>
      </main>
      <Footer />
    </SongsContext.Provider>
    </>
  )
}

export default App
