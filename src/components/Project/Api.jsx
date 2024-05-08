import React, { useState } from "react";
import {useEffect} from "react";
import "./project.css"

// Här hämtas en lista över mina publika projekt i github. 
// Den kallar på GitHub API med hjälp av useEffect som används för att köra sidoeffekter i funktionella komponenter.
// useState används för att spara informationen i en state. Och sen renderas det ut på sidan i form av en lista med hjälp av .map.
export default function Api() {
    const [apiProjects, setApiProjects] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/Abuckard/repos")
        .then ((response)=> response.json())
        .then ((data) => {
            setApiProjects(data); })
            .catch((error) => console.log("Error", error));
    }, []);

    return (
        <section>
            <h2>Projekt från github</h2>
            <ul className="project-links">
                {apiProjects.map((project) => (
                    <li key={project.id}>
                        <a href={project.html_url}
                        target="_blank"
                        rel="noopener norefeerer">
                            {project.name}
                        </a>
                    </li>
                ))}

            </ul>
        </section>
    )
}