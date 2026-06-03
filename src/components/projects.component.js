import React, { useState } from 'react';
import { projects } from '../data/index';
import './projects.component.css';

const categories = ['All', 'Java', 'JavaScript', 'Angular', 'Other'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div className="projects" style={{ paddingTop: 'var(--nav-h)' }}>
      <div className="container section">
        <span className="section-label">Work</span>
        <h1 className="section-title">Projects</h1>

        {/* Category filter */}
        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter-btn${active === cat ? ' projects__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((p) => (
            <div key={p.name} className="project-card">
              <div className="project-card__top">
                <span className="project-card__icon">{p.icon}</span>
                {p.featured && <span className="tag tag-accent">Featured</span>}
              </div>
              <h2 className="project-card__name">{p.name}</h2>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link btn btn-outline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="projects__empty">No projects in this category yet.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
