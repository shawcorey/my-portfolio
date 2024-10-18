// Footer.js
import React from 'react';
import './footer.component.css';  // External CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Corey Shaw. All rights reserved.</p>
        <p>
          <a href="https://github.com/shawcorey" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" | "}
          <a href="https://www.linkedin.com/in/corey-shaw" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" | "}
          <a href="mailto:corey@coreylshaw.com">
            Contact
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
