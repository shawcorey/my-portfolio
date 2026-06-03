import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data/index';
import './navigation.component.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Fitness', path: '/fitness' },
  { label: 'Gaming', path: '/gaming' },
];

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand">
          <span className="nav__brand-name">Corey Shaw</span>
          {profile.available && (
            <span className="nav__available" title="Available for work">
              <span className="nav__available-dot" />
            </span>
          )}
        </Link>

        <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`nav__link${isActive(path) ? ' nav__link--active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
