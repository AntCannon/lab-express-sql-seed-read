import { useState, useEffect, useContext } from 'react'
import { SongsContext } from '../Context/Context.js'

// components
import Song from './Song.jsx'

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
      Songs
      {songs.map(song => (
        <Song song={song} key={song.id} />
      ))}
    </div>
  )
}
