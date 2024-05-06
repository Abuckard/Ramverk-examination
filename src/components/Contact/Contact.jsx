import Header from "../Header/Header"
import './contact.css'
import ThemeProvider from "../../features/ThemeProvider"

export default function Contact() {
    return (

      <div className="contact">
          <Header />
          <div className="contact-container">
            <img src="/src/assets/Images/Alex.png" alt="" />
            <section>
                <h1>Hi, I'm Alex</h1>
                <p>Frontend developer</p>
            </section>
          </div>
      </div>

    )
  }