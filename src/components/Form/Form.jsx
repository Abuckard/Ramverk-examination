

import React, { useState } from 'react';
import "./form.css";

const Form = ({ onSubmit }) => {    // Här används useState för att se vad som skrivits i form och uppdaterar det i formData.
    const [formData, setFormData] = useState({
        name: "",
        color: ""
    });
    const [formSubmitted, setFormSubmitted] = useState(false); // State-variabel för att spåra om formuläret har skickats

    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(formData);
        setFormSubmitted(true); // Sätt formSubmitted till true för att visa att formulär skickats
        // Anropa onSubmit-callback-funktionen och skicka formulärdata som argument
        onSubmit(formData);
    };

    const generateMessage = () => { // Här är en variabel med ett meddelande som tar svaret från form och kollar om det är "röd" och returnerar ett av två meddelanden med props beroende på om det är "röd" eller ej.
        if (formData.color.toLowerCase() === "röd") {
            return "Min favoritfärg är också röd! Vad kul att vi är så lika!";
        } else {
            return `Jaha! Är din favoritfärg ${formData.color}? Min är röd.`;
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Här har vi ett litet interaktivt formulär som använder useState och props</h1>
                <label htmlFor="title">Ditt namn</label>
                <input
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    value={formData.name}
                    type="text"
                    name="title"
                    id="title"
                />

                <label htmlFor="body">Vilken är din favoritfärg?</label>
                <input
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    value={formData.color}
                    name="body"
                    id="body"
                ></input>
                <button type="submit" className="btn-submit">Submit</button>
            </form>

            {formSubmitted && (  // Det här skrivs ut när forumuläret skickas, här används props och meddelandet som definieras på rad 17.
                <section>
                    <h2>Tack för att du testar den interaktiva sektionen</h2>
                    <p>Hej {formData.name}! Välkommen till min interaktiva sektion. Du kan nu se att ditt namn skrivits ut i headern med hjälp av props.</p>
                    <p>{generateMessage()}</p>
                </section>
            )}
        </div>
    );
};

export default Form;
