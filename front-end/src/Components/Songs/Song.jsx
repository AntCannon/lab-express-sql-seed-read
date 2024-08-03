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
      {title}
    </div>
  )
}
