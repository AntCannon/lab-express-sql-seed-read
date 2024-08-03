import './SongForm.css'
import React, { useState, useEffect } from 'react'

// services
import { createSong } from '../../Services/songs.services'

export default function SongForm({
  formHeader
}) {
  const [ songForm, setSongForm ] = useState({
    title: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false
  })

  function handleInputChange(e) {
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    setSongForm({...songForm, [e.target.id]: value})
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      createSong(songForm)
    } catch (error) {
        throw error
    }

    setSongForm({
      title: '',
      artist: '',
      album: '',
      time: '',
      is_favorite: false
    })
  }

  console.log(songForm)
  
  return (
    <div>
      <h2>{formHeader}</h2>
      <form className="song-form" onSubmit={handleSubmit}>
        <label>
          <p>
            Song title:
          </p>
          <input
            id='title'
            type='text'
            placeholder='title'
            value={songForm.title}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          <p>
          Artist:
          </p>
          <input
            id='artist'
            type='text'
            placeholder='artist'
            value={songForm.artist}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          <p>
          Album:
          </p>
          <input
            id='album'
            type='text'
            placeholder='album'
            value={songForm.album}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          <p>
          Time:
          </p>
          <input
            id='time'
            type='text'
            placeholder='time'
            value={songForm.time}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          <p>
          Favorite:
          </p>
          <input
            id='is_favorite'
            type='checkbox'
            placeholder='is_favorite'
            checked={songForm.is_favorite}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Add Song</button>


      </form>


    </div>
  )
}
