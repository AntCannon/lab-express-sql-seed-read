import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div>
        <Link to='/songs'>
          Logo
        </Link>
      </div>
      <div>
        <Link to='/songs/new'>
          New Song
        </Link>
      </div>
    </nav>
  )
}
