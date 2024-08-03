import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

// components
import Songs from '../Components/Content/Songs.jsx'

export default function Home() {
  const [ songs, setSongs ] = useState([])

  return (
    <div>
      <Outlet />
    </div>
  )
}
