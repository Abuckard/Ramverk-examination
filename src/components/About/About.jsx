import React from 'react'
import Header from '../Header/Header'
import Form from '../Form/Form'
import ThemeProvider from '../../features/ThemeProvider'
import './about.css'

export default function About() {
  return (
    <ThemeProvider>
    <div className='about-container'>
        <Header />
        <Form />

    </div>
    </ThemeProvider>
  )
}


