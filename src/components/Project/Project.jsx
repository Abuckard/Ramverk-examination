import React, { useState, useEffect } from 'react'; // Här importerar jag useState och useEffect
import Header from '../Header/Header'; // Importerar min Header-komponent som används på alla sidor.
import Api from '../Project/Api.jsx';
import ThemeProvider from '../../features/ThemeProvider'


//Här under kallar jag på GitHub API. Med hjälp av async och await säkrar jag upp att inte sidan laddas innan all information är hämtad.
async function getGitHubUserInfo(username) {
    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        const followers = userData.followers;

        const reposResponse = await fetch(userData.repos_url);
        const reposData = await reposResponse.json();
        const reposCount = reposData.length;
        const userLogin = userData.login;

        return { followers, reposCount,userLogin };
    } catch (error) {
        console.error("Error fetching GitHub user info:", error); // Skriver ut felmeddelandet i konsolen om något fel inträffar
        return null;
    }
}

export default function Project() {
    const [githubInfo, setGithubInfo] = useState(null); // Här sätter jag githubInfo till null i starten av sidan, sedan hämtar den ett objekt och uppdaterar det med hjälp av setGithubInfo.

    useEffect(() => {
        const username = "Abuckard"; 
        if (username) {
            getGitHubUserInfo(username)
                .then((data) => {
                    setGithubInfo(data);
                })
                .catch(error => console.error("Error:", error));
        }
    }, []); 

    return ( // Här skriver jag sen ut informationen jag hämtat från APIn på sidan.
        <ThemeProvider>
        <div>
            <Header />
            <section className="project-container">
            <h1>Här är lite information om min github</h1>
            {githubInfo && (
                <div>
                    <p>Användare: {githubInfo.userLogin}</p>
                    <p>Antal följare: {githubInfo.followers}</p>
                    <p>Antal repositories: {githubInfo.reposCount}</p>

                </div>
            )}

            <Api />
            </section>
        </div>
        </ThemeProvider>
    );
}
