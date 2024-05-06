import Contact from "./components/Contact/Contact"
import ThemeToggler from "./components/ThemeToggler"
import ThemeProvider from "./features/ThemeProvider"
import "./App.css"
function App() {


  return (
    <>
      <div className="App-container">
      <ThemeProvider>
        <Contact />      
      </ ThemeProvider>
      </div>
    </>
  )
}

export default App
