import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        title:"",
        body:""
    })
    const [formSubmitted, setFormSubmitted] = useState(false); // State-variabel för att spåra om formuläret har skickats

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormSubmitted(true); // Sätt formSubmitted till true när formuläret skickas
    }

    const generateMessage = () => {
        if (formData.body.toLowerCase() === "röd") {
            return "Min favoritfärg är också röd! Vad kul att vi är så lika!";
        } else {
            return `Jaha! Är din favoritfärg ${formData.body}? Min är röd.`;
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Här testar vi props och useState</h1>
                <label htmlFor="title">Skriv ditt namn här</label>
                <input 
                    onChange={(e) => setFormData({...formData, title: e.target.value})} 
                    value={formData.title} 
                    type="text" 
                    name="title" 
                    id="title" 
                />

                <label htmlFor="body">Här kan du skriva lite om dig själv</label>
                <input
                    onChange={(e) => setFormData({...formData, body: e.target.value})}  
                    value={formData.body} 
                    name="body" 
                    id="body"
                ></input>
                <button type="submit">Submit</button> {/* Knappen av typen submit för att skicka formuläret */}
            </form>

            {/* Villkorlig rendering av den sista div-en baserat på värdet av formSubmitted */}
            {formSubmitted && (
                <div>
                    <h2>Form Data</h2>
                    <p>Hej {formData.title}! Välkommen till mitt digitala CV</p>
                    <p> {generateMessage()}</p>
                </div>
            )}
        </div>
    )
}

export default Form