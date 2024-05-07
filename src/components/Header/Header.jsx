import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import ThemeToggler from '../ThemeToggler'


export default function Header() {
  return (
    <nav>
        <Link to="/">Hem</Link>
        <Link to="/project">Projekt</Link>
        <Link to="/about">Interaktiv sektion</Link>
        <ThemeToggler />
        
        
    </nav>
  )
}
