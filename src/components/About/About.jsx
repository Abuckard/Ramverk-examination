import React, {useState} from 'react'
import Header from '../Header/Header'
import Form from '../Form/Form'
import ThemeProvider from '../../features/ThemeProvider'
import './about.css'


// Här ligger bara lite information om mig och så kallar jag även in Form-komponenten i slutet av sidan.
// Allt wrappas i ThemeProvider för Darkmode/lightmode.
// Hämtar också props från form för att kunna skriva ut det i headern.
export default function About() {

  const [name, setName] = useState('');

  const handleFormSubmit = (formData) => {
    setName(formData.name);
  };

  return (
    <ThemeProvider>
    <div className='about-container'>
        <Header name={name}/>
        <article>
        <h1 className='about-title'>Lite information om mig</h1>
        <p className='about-text'>Jag är en ambitiös student som pluggar till frontend developer med passion och entusiasm. Mitt intresse för teknik och design driver mig att utforska nya möjligheter inom webbutveckling och skapa användarvänliga digitala upplevelser.</p>

           <p> Förutom mina studier är fotboll en stor del av mitt liv, och mitt hjärta klappar extra för Manchester United. Att följa deras resa på planen är en av mina favoritsysselsättningar när jag inte är upptagen med att koda.</p>

            <p> När jag inte är försjunken i kod och fotboll ägnar jag mig åt mina andra passioner. Att spela dataspel är en av mina favoritaktiviteter, där jag kan utforska nya världar och utmana mig själv i virtuella äventyr. Hemma väntar min fästmö och vår fyrbenta vän, vår hund, som fyller våra dagar med glädje och kärlek.</p>

            <p> Stockholm är mitt hem, en stad jag älskar för dess pulserande energi och mångfald. Att bo här ger mig möjlighet att utforska nya platser och möta intressanta människor varje dag.</p>

            <p> Utöver mina intressen inom teknik och spel är jag också fascinerad av båtar och marint liv. Att kombinera min passion för teknik med mitt intresse för båtar är något jag hoppas kunna göra i framtiden genom att skapa digitala lösningar för båtbranschen.</p>

            <p> Sammanfattningsvis är jag en mångsidig individ med en brinnande passion för teknik, sport, och äventyr, som söker möjligheter att växa och utforska nya horisonter både inom frontend development och bortom.</p>
            </article>

                        <Form onSubmit={handleFormSubmit}/>


    </div>
    </ThemeProvider>
  )
}


