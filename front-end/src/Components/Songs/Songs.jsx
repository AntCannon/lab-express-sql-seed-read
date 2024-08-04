import './Songs.css'
import { useState, useEffect, useContext } from 'react'

// components
import Song from './SongCard.jsx'

// context
import { SongsContext } from '../Context/Context.js'

// services 
import { fetchAllSongs } from '../../Services/songs.services.js'

export default function Songs() {
  const [songs, setSongs] = useContext(SongsContext)

  async function getAllSongs() {
    try {
      const data = await fetchAllSongs()
      setSongs(data)
    } catch (error) {
        throw error
    }

  }

  useEffect(() => {
    getAllSongs()
  }, [])

  return (
    <div>
      <h2 className='list-header'>Songs</h2>
      <section className='songs'>
        {songs.map(song => (
          <Song song={song} key={song.id} />
        ))}
      </section>
    </div>
  )
}
