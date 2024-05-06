import Contact from "./components/Contact/Contact"
import ThemeToggler from "./components/ThemeToggler"
import ThemeProvider from "./features/ThemeProvider"
import "./App.css"

function App() {


  return (
    <>
      <div>
      <ThemeProvider>
        <Contact />
        
          <h1>Light or Dark</h1>
          <ThemeToggler />
      </ ThemeProvider>
      </div>
    </>
  )
}

export default App
