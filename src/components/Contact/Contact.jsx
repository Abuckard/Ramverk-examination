import React, {useContext} from 'react'
import { UserContext } from '../../App'
import Header from "../Header/Header"
import './contact.css'


// Här hämtar jag user från UserContext från App.jsx.
export default function Contact() {

  const user = useContext(UserContext);

    return (

      <div className="contact">
          <Header />
          <div className="contact-container">
            <h1>{`Välkommen ${user}`}</h1>
            <img src="/src/assets/Images/Alex.png" alt="" />
            <section className="contact-info">
                <h1 className="contact-title">Alexander Buckard</h1>
                <h3 className="contact-subtitle">Frontend developer</h3>
                <p className="contact-email">E-mail: yhfe23.buckal@folkuniversitetet.nu </p>
            </section>
          </div>
      </div>

    )
  }