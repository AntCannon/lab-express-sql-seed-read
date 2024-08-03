import './Song.css'
import React from 'react'

export default function Song({
  song
}) {
  const {
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
    </div>
  )
}
