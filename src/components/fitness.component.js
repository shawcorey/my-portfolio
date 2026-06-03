import React from 'react';
import { fitness } from '../data/index';
import './fitness.component.css';

const maxSessions = Math.max(...fitness.monthlyFrequency.map((m) => m.sessions));

const Fitness = () => (
  <div className="fit" style={{ paddingTop: 'var(--nav-h)' }}>
    <div className="container section">

      {/* Header */}
      <span className="section-label">Sub-site</span>
      <h1 className="section-title">Fitness</h1>
      <p className="fit__intro">
        8 years of consistent training, tracked in Fitbod since February 2018.
        Real data — no placeholders.
      </p>

      {/* Overview stats */}
      <div className="fit__stats-grid">
        <div className="fit__stat-card">
          <span className="fit__stat-value">{fitness.stats.totalWorkouts}</span>
          <span className="fit__stat-label">Total Workouts</span>
        </div>
        <div className="fit__stat-card">
          <span className="fit__stat-value">{fitness.stats.yearsActive}</span>
          <span className="fit__stat-label">Years Active</span>
        </div>
        <div className="fit__stat-card">
          <span className="fit__stat-value">{fitness.stats.last90Days.workouts}</span>
          <span className="fit__stat-label">Last 90 Days</span>
        </div>
        <div className="fit__stat-card">
          <span className="fit__stat-value">{(fitness.stats.last90Days.volumeLbs / 1000).toFixed(0)}k</span>
          <span className="fit__stat-label">Lbs Lifted (90d)</span>
        </div>
      </div>

      <div className="fit__two-col">

        {/* Left column */}
        <div>

          {/* Personal records */}
          <section className="fit__section">
            <h2 className="fit__heading">Personal Records</h2>
            <div className="fit__pr-table">
              <div className="fit__pr-row fit__pr-row--header">
                <span>Exercise</span>
                <span>Weight</span>
                <span>Date</span>
              </div>
              {fitness.prs.map((pr) => (
                <div key={pr.exercise} className="fit__pr-row">
                  <span className="fit__pr-exercise">{pr.exercise}</span>
                  <span className="fit__pr-weight">{pr.weight} <small>{pr.unit}</small></span>
                  <span className="fit__pr-date">{pr.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Goals */}
          <section className="fit__section">
            <h2 className="fit__heading">Goals</h2>
            <div className="fit__goals">
              {fitness.goals.map((goal) => {
                const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
                return (
                  <div key={goal.name} className="fit__goal">
                    <div className="fit__goal-header">
                      <span className="fit__goal-name">{goal.name}</span>
                      <span className="fit__goal-values">{goal.current} / {goal.target} {goal.unit}</span>
                    </div>
                    <div className="fit__goal-bar-bg">
                      <div className="fit__goal-bar" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="fit__goal-pct">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* Right column */}
        <div>

          {/* Muscle group breakdown */}
          <section className="fit__section">
            <h2 className="fit__heading">Muscle Groups</h2>
            <div className="fit__muscles">
              {fitness.muscleGroups.map((mg) => (
                <div key={mg.name} className="fit__muscle">
                  <div className="fit__muscle-header">
                    <span className="fit__muscle-name">{mg.name}</span>
                    <span className="fit__muscle-pct">{mg.pct}%</span>
                  </div>
                  <div className="fit__muscle-bar-bg">
                    <div className="fit__muscle-bar" style={{ width: `${mg.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Monthly frequency chart */}
          <section className="fit__section">
            <h2 className="fit__heading">Monthly Frequency</h2>
            <p className="fit__chart-note">Peak: {fitness.stats.peakMonth} ({fitness.stats.peakMonthSessions} sessions)</p>
            <div className="fit__chart">
              {fitness.monthlyFrequency.map((m) => (
                <div key={m.month} className="fit__bar-wrap">
                  <div className="fit__bar-col">
                    <span className="fit__bar-count">{m.sessions}</span>
                    <div
                      className="fit__bar"
                      style={{ height: `${(m.sessions / maxSessions) * 100}%` }}
                    />
                  </div>
                  <span className="fit__bar-label">{m.month}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Instagram */}
          <section className="fit__section">
            <h2 className="fit__heading">Instagram</h2>
            <a
              href={fitness.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fit__ig-card"
            >
              <div className="fit__ig-avatar">📸</div>
              <div>
                <span className="fit__ig-handle">{fitness.instagram}</span>
                <span className="fit__ig-sub">Fitness &amp; lifestyle content</span>
              </div>
              <span className="fit__ig-arrow">→</span>
            </a>
          </section>

        </div>
      </div>
    </div>
  </div>
);

export default Fitness;
