import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// services
import { fetchOneSong } from '../../Services/songs.services'
import Song from './SongCard'

export default function SongDisplay() {
  const [ song, setSong ] = useState({})
  const {
    title,
    artist,
    album,
    time,
    is_favorite
  } = song
  
  const { id } = useParams();

  async function getOneSong(id) {
    try {
      const song = await fetchOneSong(id)
      setSong(song)
    } catch (error) {
        throw error
    }
  }

  useEffect(() => {
    getOneSong(id)
  }, [id])

  return (
    <div className="song-card">
      <h2>{title}</h2>
      <h2>{artist}</h2>
      <h2>{album}</h2>
      <h2>{time}</h2>
      <button>Edit Song</button>
      <button>Delete Song</button>
    </div>
  )
}
