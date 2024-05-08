import React, {useState, createContext} from "react"
import Contact from "./components/Contact/Contact"
import ThemeProvider from "./features/ThemeProvider"
import "./App.css"

export const UserContext = createContext() // Skapar en ny context som sen går att använda på hela hemsidan för att slippa propdrilling.

// Här definierar jag förstasidan som i det här fallet är Contact.jsx, den wrappas av ThemeProvider och UserContext för att kunna ändra dark/light-mode och kunna skicka data till Contact.jsx.
function App() {

  const [user, setUser] = useState("besökare")

  return (
    <>
      <div className="App-container">
      <ThemeProvider>
        <UserContext.Provider value={user}>
        <Contact />   
        </UserContext.Provider>   
      </ ThemeProvider>
      </div>
    </>
  )
}

export default App
