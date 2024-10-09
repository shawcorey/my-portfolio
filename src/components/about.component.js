import React from 'react';
import './about.component.css'; // Optional: Create a CSS file for styling.
import profilePic from './assets/codeupprofilepic.jpg'; // Adjust path as needed
const About = () => {
    return (
        <section className="about-section">
            <div className="container">
            <img 
              src={process.env.PUBLIC_URL + "/codeupprofilepic.jpg"} 
              alt="Profile" 
              className="about-profile-pic" 
        />


                <h2>About Me</h2>
                <p>
                    Hello! I'm Corey, a passionate Full Stack Web Developer with experience in building web applications using modern technologies like Java, JavaScript, React.js, Python, Node.js, and more.
                </p>
                <p>
                    I have 3 years of professional experience working on projects that span across various domains. I specialize in frontend and backend development, and I'm committed to writing clean, efficient, and scalable code.
                </p>
                <p>
                    Outside of coding, I enjoy fitness, being a Father, making Art, traveling and a long list of other activities. My goal is to continue growing as a developer, learn new skills, and contribute to impactful projects.
                </p>
                <p>
                    Feel free to explore my projects and blog posts to learn more about my work.
                </p>
            </div>
        </section>
    );
};

export default About;
