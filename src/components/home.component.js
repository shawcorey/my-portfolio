import React from 'react';
import { Link } from 'react-router-dom';
import { profile, skills, projects, experience } from '../data/index';
import './home.component.css';

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="home" style={{ paddingTop: 'var(--nav-h)' }}>

      {/* Hero */}
      <section className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__content">
            <span className="section-label">Portfolio</span>
            <h1 className="home-hero__title">
              Hi, I'm <em>Corey Shaw</em>
            </h1>
            <p className="home-hero__subtitle">{profile.headline}</p>
            <p className="home-hero__bio">{profile.bio}</p>
            <div className="home-hero__actions">
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <a href={`mailto:${profile.email}`} className="btn btn-outline">Get in Touch</a>
            </div>
          </div>

          <div className="home-hero__card">
            <div className="home-hero__stats">
              <div className="home-hero__stat">
                <span className="home-hero__stat-value">3</span>
                <span className="home-hero__stat-label">Years Experience</span>
              </div>
              <div className="home-hero__stat">
                <span className="home-hero__stat-value">8</span>
                <span className="home-hero__stat-label">Projects Built</span>
              </div>
              <div className="home-hero__stat">
                <span className="home-hero__stat-value">13</span>
                <span className="home-hero__stat-label">Years Served</span>
              </div>
              <div className="home-hero__stat">
                <span className="home-hero__stat-value">999</span>
                <span className="home-hero__stat-label">Workouts Logged</span>
              </div>
            </div>
            <div className="home-hero__badge">
              <span className="home-hero__badge-dot" />
              {profile.available ? 'Available for new projects' : 'Currently unavailable'}
            </div>
          </div>
        </div>
      </section>

      {/* Skills strip */}
      <section className="home-skills">
        <div className="container">
          <span className="section-label">Tech Stack</span>
          <div className="home-skills__pills">
            {skills.featured.map((s) => (
              <span key={s} className="tag tag-accent">{s}</span>
            ))}
            {skills.languages.filter((s) => !skills.featured.includes(s)).map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
            {skills.frameworks.filter((s) => !skills.featured.includes(s)).slice(0, 4).map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="home-projects section">
        <div className="container">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="home-projects__grid">
            {featuredProjects.map((p) => (
              <div key={p.name} className="home-project-card">
                <div className="home-project-card__icon">{p.icon}</div>
                <h3 className="home-project-card__name">{p.name}</h3>
                <p className="home-project-card__desc">{p.description}</p>
                <div className="home-project-card__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-project-card__link"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
          <div className="home-projects__cta">
            <Link to="/projects" className="btn btn-outline">See All Projects</Link>
          </div>
        </div>
      </section>

      {/* Experience teaser */}
      <section className="home-exp section">
        <div className="container">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <div className="home-exp__list">
            {experience.map((job) => (
              <div key={job.company} className="home-exp__item">
                <div className="home-exp__left">
                  <span className="home-exp__company">{job.company}</span>
                  <span className="home-exp__period">{job.period}</span>
                </div>
                <div className="home-exp__right">
                  <span className="home-exp__title">{job.title}</span>
                  {job.isVeteran && <span className="tag tag-accent">Veteran</span>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '32px' }}>
            <Link to="/about" className="btn btn-outline">Full Background</Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div>
            <h2 className="home-cta__title">Let's build something together.</h2>
            <p className="home-cta__sub">Open to full-time roles, contracts, and interesting collaborations.</p>
          </div>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">Send a Message</a>
        </div>
      </section>

    </div>
  );
};

export default Home;
