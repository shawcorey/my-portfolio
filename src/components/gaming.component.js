import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { gaming } from '../data/index';
import './gaming.component.css';

const FILTERS = ['All', 'SF6', 'SFV', 'USF4', 'CotW'];

const typeLabel = { EVO: 'EVO', Local: 'Local', Online: 'Online' };

const Gaming = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? gaming.tournaments
    : gaming.tournaments.filter((t) => t.game === filter || t.game.includes(filter));

  return (
    <div className="g-wrap">

      {/* Nav */}
      <nav className="g-nav">
        <Link to="/" className="g-nav__back">← Portfolio</Link>
        <span className="g-nav__brand">{gaming.brandName}</span>
        <a href={gaming.instagramUrl} target="_blank" rel="noopener noreferrer" className="g-nav__ig">
          {gaming.instagram}
        </a>
      </nav>

      {/* Hero */}
      <section className="g-hero">
        <div className="g-container">
          <div className="g-hero__scene">{gaming.localScene}</div>
          <h1 className="g-hero__title">{gaming.brandName}</h1>
          <p className="g-hero__tagline">{gaming.tagline}</p>

          {/* Key stats */}
          <div className="g-hero__stats">
            <div className="g-hero__stat">
              <span className="g-hero__stat-val">{gaming.stats.totalTournaments}</span>
              <span className="g-hero__stat-lbl">Tournaments</span>
            </div>
            <div className="g-hero__stat">
              <span className="g-hero__stat-val">{gaming.stats.evoAppearances}</span>
              <span className="g-hero__stat-lbl">EVO Appearances</span>
            </div>
            <div className="g-hero__stat">
              <span className="g-hero__stat-val">{gaming.stats.bestPlacement}</span>
              <span className="g-hero__stat-lbl">Best Finish</span>
            </div>
            <div className="g-hero__stat">
              <span className="g-hero__stat-val">{gaming.activeSince}</span>
              <span className="g-hero__stat-lbl">Competing Since</span>
            </div>
          </div>

          <div className="g-hero__best">
            Best finish: <strong>{gaming.stats.bestPlacement}</strong> at <em>{gaming.stats.bestEvent}</em>
          </div>
        </div>
      </section>

      {/* Games */}
      <section className="g-section">
        <div className="g-container">
          <span className="g-label">Titles</span>
          <h2 className="g-section-title">Games</h2>
          <div className="g-games__grid">
            {gaming.games.map((game) => (
              <div key={game.title} className={`g-game-card${game.active ? ' g-game-card--active' : ''}`}>
                <div className="g-game-card__top">
                  <span className="g-game-card__icon">{game.icon}</span>
                  {game.active && <span className="g-badge-active">Active</span>}
                </div>
                <h3 className="g-game-card__title">{game.title}</h3>
                {game.cfn && (
                  game.cfnUrl
                    ? <a href={game.cfnUrl} target="_blank" rel="noopener noreferrer" className="g-game-card__cfn">CFN: {game.cfn} →</a>
                    : <span className="g-game-card__cfn">CFN: {game.cfn}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament results */}
      <section className="g-section">
        <div className="g-container">
          <span className="g-label">start.gg</span>
          <h2 className="g-section-title">Tournament Results</h2>

          {/* Filters */}
          <div className="g-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`g-filter-btn${filter === f ? ' g-filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="g-table-wrap">
            <div className="g-table-head">
              <span>Event</span>
              <span>Game</span>
              <span>Placement</span>
              <span>Entrants</span>
              <span>Date</span>
              <span>Type</span>
            </div>
            {filtered.map((t, i) => (
              <div key={i} className={`g-table-row${t.type === 'EVO' ? ' g-table-row--evo' : ''}`}>
                <span className="g-table-event">
                  {t.type === 'EVO' && <span className="g-evo-star">★</span>}
                  {t.name}
                </span>
                <span className="g-table-game">{t.game}</span>
                <span className="g-table-placement">
                  {t.placement
                    ? <strong className="g-placement-best">{t.placement}</strong>
                    : <span className="g-placement-null">—</span>}
                </span>
                <span className="g-table-entrants">
                  {t.entrants ? t.entrants.toLocaleString() : '—'}
                </span>
                <span className="g-table-date">{t.date}</span>
                <span className={`g-type-badge g-type-badge--${t.type.toLowerCase()}`}>
                  {typeLabel[t.type]}
                </span>
              </div>
            ))}
          </div>

          <p className="g-table-note">
            Data sourced from{' '}
            <a href="https://start.gg/user/c6881af5" target="_blank" rel="noopener noreferrer" className="g-link">
              start.gg/user/c6881af5
            </a>
          </p>
        </div>
      </section>

      {/* About */}
      <section className="g-section">
        <div className="g-container g-about">
          <span className="g-label">The Brand</span>
          <h2 className="g-section-title">About Corey_Breeze</h2>
          <p className="g-about__text">
            Corey_Breeze is the competitive gaming identity of Corey Shaw — Army veteran, full-stack engineer,
            and FGC competitor based in San Antonio, TX. Part of the River City Rushdown local scene since 2019,
            with three EVO appearances across Street Fighter and Fatal Fury.
          </p>
          <p className="g-about__text">
            The same discipline that carried 13 years of military service shows up in every set.
            Follow on Instagram for clips and content:{' '}
            <a href={gaming.instagramUrl} target="_blank" rel="noopener noreferrer" className="g-link">
              {gaming.instagram}
            </a>
          </p>
          <div className="g-about__platforms">
            <span className="g-platform-badge">PSN: {gaming.psnId}</span>
            {gaming.cfnIds.map((id) => (
              <span key={id} className="g-platform-badge">CFN: {id}</span>
            ))}
          </div>
          <a href={gaming.instagramUrl} target="_blank" rel="noopener noreferrer" className="g-btn">
            Follow {gaming.instagram}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="g-footer">
        <div className="g-container g-footer__inner">
          <span className="g-footer__brand">{gaming.brandName}</span>
          <Link to="/" className="g-footer__back">← Back to coreylshaw.com</Link>
        </div>
      </footer>

    </div>
  );
};

export default Gaming;
