import './SongCard.css'
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import { deleteSong } from '../../Services/songs.services'

// context
import { UpdateContext } from '../Context/Context.js'


export default function Song({
  song
}) {
  const [update, setUpdate] = useContext(UpdateContext)

  const {
    id,
    title,
    artist,
    album,
    time,
    is_favorite
  } = song

  // config
  const navigate = useNavigate()

  async function handleDeleteSong(idToDelete) {
    try {
        await deleteSong(idToDelete)
        setUpdate(!update)
        navigate(`/songs`)
    } catch (error) {
        throw error
    }
  }

  return (
    <div className="song-card">
      <h2>{title}</h2>
      <h2>{artist}</h2>
      <h2>{album}</h2>
      <h2>{time}</h2>
      <div>{is_favorite ? `❤️` : `♡`}</div>
      <div className="card-flex-row">
        <Link to={`/songs/${id}/edit`}>
          <button>Edit Song</button>
        </Link>
        <button onClick={() => handleDeleteSong(id)}>Delete Song</button>
      </div>
    </div>
  )
}
