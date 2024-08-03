import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

// components
import Songs from '../Components/Songs/Songs.jsx'

export default function Home() {

  return (
    <div>
      <Outlet />
    </div>
  )
}
