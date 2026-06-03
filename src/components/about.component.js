import React from 'react';
import { profile, experience, education, skills } from '../data/index';
import profilePic from '../assets/codeupprofilepic.jpg';
import './about.component.css';

const interests = ['Fitness', 'Fatherhood', 'Art', 'Traveling', 'Gaming'];

const About = () => (
  <div className="about" style={{ paddingTop: 'var(--nav-h)' }}>
    <div className="container section">
      <span className="section-label">Background</span>
      <h1 className="section-title">About Me</h1>

      <div className="about__layout">

        {/* Sidebar */}
        <aside className="about__sidebar">
          <div className="about__photo-wrap">
            <img src={profilePic} alt="Corey Shaw" className="about__photo" />
          </div>

          <div className="about__contact">
            <h3 className="about__sidebar-heading">Contact</h3>
            <a href={`mailto:${profile.email}`} className="about__contact-link">{profile.email}</a>
            <span className="about__contact-item">{profile.location}</span>
          </div>

          <div className="about__social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="about__social-link">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="about__social-link">LinkedIn</a>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="about__social-link">Instagram</a>
          </div>

          <div className="about__currently">
            <h3 className="about__sidebar-heading">Currently</h3>
            <p className="about__currently-text">
              Building enterprise Java applications at CGI, exploring React projects on the side, and logging workouts at the gym.
            </p>
          </div>

          {profile.available && (
            <div className="about__available">
              <span className="about__available-dot" />
              Available for new opportunities
            </div>
          )}
        </aside>

        {/* Main content */}
        <div className="about__main">

          {/* Bio */}
          <section className="about__section">
            <h2 className="about__heading">Who I am</h2>
            <p className="about__bio">{profile.bio}</p>
            <p className="about__bio">
              I transitioned into software engineering after 13 years in the U.S. Army — a background that gave me discipline, leadership, and an ability to stay calm and focused when the pressure is on. I completed an intensive 670-hour full-stack Java program at Codeup in 2021 and have been building production software ever since.
            </p>
          </section>

          {/* Experience timeline */}
          <section className="about__section">
            <h2 className="about__heading">Experience</h2>
            <div className="about__timeline">
              {experience.map((job, i) => (
                <div key={i} className="about__timeline-item">
                  <div className="about__timeline-dot" />
                  <div className="about__timeline-content">
                    <div className="about__timeline-header">
                      <div>
                        <span className="about__timeline-title">{job.title}</span>
                        <span className="about__timeline-company"> · {job.company}</span>
                        {job.isVeteran && <span className="tag tag-accent" style={{ marginLeft: '8px' }}>Veteran</span>}
                      </div>
                      <div className="about__timeline-meta">
                        <span>{job.period}</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <ul className="about__timeline-bullets">
                      {job.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                    <div className="about__timeline-tags">
                      {job.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="about__section">
            <h2 className="about__heading">Education</h2>
            {education.map((ed, i) => (
              <div key={i} className="about__edu-card">
                <div className="about__edu-header">
                  <span className="about__edu-school">{ed.school}</span>
                  <span className="about__edu-period">{ed.period}</span>
                </div>
                <span className="about__edu-degree">{ed.degree}</span>
                <p className="about__edu-detail">{ed.detail}</p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="about__section">
            <h2 className="about__heading">Skills</h2>
            <div className="about__skills">
              {Object.entries(skills).filter(([k]) => k !== 'featured').map(([category, list]) => (
                <div key={category} className="about__skill-group">
                  <span className="about__skill-category">{category}</span>
                  <div className="about__skill-pills">
                    {list.map((s) => (
                      <span
                        key={s}
                        className={`tag${skills.featured.includes(s) ? ' tag-accent' : ''}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interests */}
          <section className="about__section">
            <h2 className="about__heading">Outside the Code</h2>
            <div className="about__interests">
              {interests.map((item) => (
                <span key={item} className="about__interest-item">{item}</span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  </div>
);

export default About;
