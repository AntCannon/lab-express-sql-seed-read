import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SongsContext, UpdateContext } from './Components/Context/Context.js'

// components 
import Nav from '../src/Components/Header/Nav.jsx'
import Footer from '../src/Components/Footer/Footer.jsx'
import Songs from './Components/Songs/Songs.jsx'

// pages
import Home from './Pages/Home.jsx'
import ShowSong from './Pages/ShowSong.jsx'
import NewSong from './Pages/NewSong.jsx'
import UpdateSong from './Pages/UpdateSong.jsx'

function App() {
  const [ songsContext, setSongsContext ] = useState([])
  const [ updateContext, setUpdateContext ] = useState([])

  return (
    <>
    <SongsContext.Provider value={[songsContext, setSongsContext]}>
    <UpdateContext.Provider value={[updateContext, setUpdateContext]}>
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
            <Route path='/songs/new' element={<NewSong />} />
            <Route path='/songs/:id' element={<ShowSong />} />
            <Route path='/songs/:id/edit' element={<UpdateSong />} />
          </Route>
        </Routes>
      </div>

      <div className='footer-height'></div>
      </main>

      <Footer />
    </UpdateContext.Provider>
    </SongsContext.Provider>
    </>
  )
}

export default App
