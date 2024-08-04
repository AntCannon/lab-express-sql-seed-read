import './SongCard.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Song({
  song
}) {
  const {
    id,
    title,
    artist,
    album,
    time,
    is_favorite
  } = song

  return (
    <div className="song-card">
      <h2>{title}</h2>
      <h2>{artist}</h2>
      <h2>{album}</h2>
      <h2>{time}</h2>
      <div>{is_favorite ? `❤️` : `♡`}</div>
      <Link to={`/songs/${id}/edit`}>
        <button>Edit Song</button>
      </Link>
      <button>Delete Song</button>
    </div>
  )
}
