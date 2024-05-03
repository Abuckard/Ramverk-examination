import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <nav>
        <Link to="/">Contact</Link>
        <Link to="/project">Project</Link>
        <Link to="/about">About me</Link>
        
    </nav>
  )
}
