import { useState, useEffect } from 'react'

// components
import Song from './Song.jsx'

// services 
import { fetchAllSongs } from '../../Services/songs.services'

export default function Home() {
  const [ songs, setSongs ] = useState([])

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
      Songs
        {songs.map(song => (
          <Song song={song} key={getAllSongs.id} />
        ))}
    </div>
  )
}
