import React from 'react'
import { useSelector } from 'react-redux'


// Här skapar jag en themeProvider. Detta gör att de element som wrappas 
// av den här komponenten kan anropas med en theme som hämtas från ett globalt state.
// Detta görs genom att lägga till en CSS klass som är kopplat till det aktuella temat.
// Resten av koden för det här ligger i components mappen och heter ThemeToggler och store.js
function ThemeProvider({children}) {

    const theme = useSelector((state) => state.theme.mode)


  return (
    <div className={`theme-${theme}`}>{children}</div>
  )
}

export default ThemeProvider

