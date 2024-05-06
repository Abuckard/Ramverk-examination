import React from 'react'
import Header from '../Header/Header'
import Form from '../Form/Form'
import ThemeProvider from '../../features/ThemeProvider'

export default function About() {
  return (
    <ThemeProvider>
    <div>
        <Header />
        <Form />

    </div>
    </ThemeProvider>
  )
}


