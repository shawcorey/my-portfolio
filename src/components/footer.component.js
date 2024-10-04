// Footer.js
import React from 'react';
import './footer.component.css';  // External CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Your Name. All rights reserved.</p>
        <p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" | "}
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" | "}
          <a href="mailto:youremail@example.com">
            Contact
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
