import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../lib/i18n';
import { LanguageToggle } from './LanguageToggle';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();

  const links = [
    { to: '/', label: language === 'es' ? 'Inicio' : 'Home' },
    { to: '/ask', label: language === 'es' ? 'Preguntar' : 'Ask' },
    { to: '/explain-code', label: language === 'es' ? 'Explicar Código' : 'Explain Code' },
    { to: '/explain-error', label: language === 'es' ? 'Explicar Error' : 'Explain Error' },
    { to: '/practice', label: language === 'es' ? 'Practicar' : 'Practice' },
    { to: '/learning-paths', label: language === 'es' ? 'Rutas' : 'Learning Paths' },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">
        AI Education Assistant
      </Link>

      <div className={`navbar__center ${menuOpen ? 'navbar__center--open' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="navbar__right">
        <LanguageToggle />
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>
    </nav>
  );
}
