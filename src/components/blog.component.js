import React from 'react';
import './blog.component.css'; // Optional: Create a CSS file for styling

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h1>How I Improved My Website: A Developer's Journey</h1>

        <p><strong>Introduction</strong></p>

        <p><strong>10/21/2024</strong></p>
        
        <p>
          Welcome to my first blog post! As a passionate Full Stack Developer, I’m always looking for ways to improve my website and push myself to learn more. Recently, I made some significant updates to my portfolio site, and I want to take you through the process, the challenges I faced, and how I plan to keep evolving it with new technologies.
        </p>

        <p><strong>Making the Site More Dynamic</strong></p>
        <p>
          The initial version of my site was functional, but I wanted to enhance the user experience and make the design more modern. 
        </p>

        <p><strong>Footer and Mobile Optimization</strong></p>
        <p>
          One of the early issues I ran into was with my footer blocking content on mobile devices. To fix this, I implemented JavaScript to dynamically adjust the padding of the main content based on the footer’s height. Additionally, I added media queries to ensure that all elements of the site respond properly to different screen sizes, making the site much more user-friendly on tablets and smartphones.
        </p>

        <p><strong>Background and Gradient Enhancements</strong></p>
        <p>
          To give the site a modern aesthetic, I will add a gradient background that transitions smoothly across the page. I had this in my final design but when my file was implemented with Vercel the animation stopped. I will be adding this feature in a later date.
        </p>

        <p><strong>Future Plans: Incorporating New Technologies</strong></p>
        <p>
          While I’m happy with the current updates, this is just the beginning. In the near future, I plan to:
          <ul>
            <li>Implement a REST API using Spring Boot for better backend functionality.</li>
            <li>Enhance site performance with AWS hosting for better speed and reliability.</li>
            <li>Integrate more JavaScript frameworks like Next.js to boost performance and SEO.</li>
            <li>Explore new frontend techniques with CSS Grid, Flexbox, and more advanced JavaScript for an improved UI and UX.</li>
          </ul>
        </p>

        <p><strong>Final Thoughts</strong></p>
        <p>
          Building and maintaining a personal website is an exciting and ever-evolving process. The changes I’ve made so far have not only improved the functionality and design of my portfolio but also allowed me to expand my skill set. I’m excited to continue learning and applying new technologies to make my site the best it can be.
        </p>

        <p>Thanks for reading! Stay tuned for more updates as I explore even more technologies and features to improve this space.</p>
      </div>
    </section>
  );
};

export default Blog;
