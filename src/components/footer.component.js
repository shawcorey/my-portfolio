import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/index';
import './footer.component.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner container">
      <div className="footer__brand">
        <span className="footer__name">{profile.name}</span>
        <span className="footer__tagline">Full Stack Engineer · Army Veteran</span>
      </div>

      <nav className="footer__nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/fitness">Fitness</Link>
        <Link to="/gaming">Gaming</Link>
      </nav>

      <div className="footer__social">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </div>

    <div className="footer__bottom container">
      <span>© 2026 Corey Shaw. All rights reserved.</span>
      <span className="footer__built">Built with React</span>
    </div>
  </footer>
);

export default Footer;
