import React, { useState, useEffect } from 'react'

// components
import SongForm from '../Components/Songs/SongForm.jsx'

export default function NewSong() {

  return (
    <div>
      <SongForm formHeader='New Song' />
    </div>
  )
}
