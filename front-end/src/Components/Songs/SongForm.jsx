import './SongForm.css'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// services
import { createSong, fetchOneSong, updateSong } from '../../Services/songs.services'

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

  // config
  const { id } = useParams()
  const navigate = useNavigate()

  // handle form
  function handleInputChange(e) {
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    setSongForm({...songForm, [e.target.id]: value})
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (id) {
      try {
        updateSong(id, songForm)
        navigate(`/songs/${id}`)
      } catch (error) {
          throw error
      }
    } else {
      try {
        createSong(songForm)
      } catch (error) {
          throw error
      }
    }

    setSongForm({
      title: '',
      artist: '',
      album: '',
      time: '',
      is_favorite: false
    })
  }

  // api

  async function getOneSong(id) {
    try {
      const song = await fetchOneSong(id)
      setSongForm(song)
    } catch (error) {
        throw error
    }
  }

  useEffect(() => {
    if (id) getOneSong(id)
  }, [])

  // dev
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

        <button type="submit">{id ? 'Edit' : 'Add'} Song</button>


      </form>


    </div>
  )
}
