import React, { useState } from "react";
import {useEffect} from "react";
import "./project.css"

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
            <ul>
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