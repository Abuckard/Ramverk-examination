import React, { useState } from 'react'
import "./form.css"

const Form = () => {
    const [formData, setFormData] = useState({
        name:"",
        color:""
    })
    const [formSubmitted, setFormSubmitted] = useState(false); // State-variabel för att spåra om formuläret har skickats

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormSubmitted(true); // Sätt formSubmitted till true när formuläret skickas
    }

    const generateMessage = () => {
        if (formData.color.toLowerCase() === "röd") {
            return "Min favoritfärg är också röd! Vad kul att vi är så lika!";
        } else {
            return `Jaha! Är din favoritfärg ${formData.color}? Min är röd.`;
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Här har vi ett litet interaktivt formulär som använder useState och props</h1>
                <label htmlFor="title">Skriv ditt namn här</label>
                <input 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    value={formData.name} 
                    type="text" 
                    name="title" 
                    id="title" 
                />

                <label htmlFor="body">Vilken är din favoritfärg?</label>
                <input
                    onChange={(e) => setFormData({...formData, color: e.target.value})}  
                    value={formData.color} 
                    name="body" 
                    id="body"
                ></input>
                <button type="submit" className="btn-submit">Submit</button> {/* Knappen av typen submit för att skicka formuläret */}
            </form>

            {/* Villkorlig rendering av den sista div-en baserat på värdet av formSubmitted */}
            {formSubmitted && (
                <section>
                    <h2>Tack för att du testar den interaktiva sektionen</h2>
                    <p>Hej {formData.name}! Välkommen till mitt digitala CV</p>
                    <p> {generateMessage()}</p>
                </section>
            )}
        </div>
    )
}

export default Form