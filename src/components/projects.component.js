import React, { useState, useEffect } from 'react';
import './projects.component.css';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Fetch GitHub repositories
        fetch('https://api.github.com/users/shawcorey/repos')
            .then((response) => response.json())
            .then((data) => setRepos(data))
            .catch((error) => console.error('Error fetching repos:', error));
    }, []);

    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
