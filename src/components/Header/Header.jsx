import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import ThemeToggler from '../ThemeToggler'


// Här är länkarna som definieras i router (i main.jsx).
// ThemeToggler är funktionen som skickar information till store.js om ifall det ska vara darkmode eller lightmode.
// Här hämtas också props från Form och skriver ut det i headern.



export default function Header({name}) {

  return (
    <nav>
        <Link to="/">Hem</Link>
        <Link to="/project">Projekt</Link>
        <Link to="/about">Om mig</Link>
        <p className="props-name">{name}</p>
        <ThemeToggler />

        
    </nav>
  )
}
