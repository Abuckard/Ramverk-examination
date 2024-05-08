import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../store'

// Här hämtas toggleTheme in från store.js, där ligger koden för ett globalt state.
// Sen används redux-hooken dispatch för att hantera det globala tillståndet (globalState)
// Den skickar åtgärder till redux store och hanterar åtgärden och uppdaterar i store.
// Mer kod och kommentarer finns i store.js och ThemeProvider.jsx
function ThemeToggler() {

    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(toggleTheme())}>Byt tema</button>
    </div>
  )
}

export default ThemeToggler