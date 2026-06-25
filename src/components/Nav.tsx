/* Top navigation + mobile menu */

import { useEffect, useState, type CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetPage } from '../hooks/useSetPage';
import { pageFromPath } from '../routes';
import type { PageId } from '../types';

interface NavLink {
  id: PageId;
  label: string;
  num: string;
}

const links: NavLink[] = [
  { id: 'home', label: 'Home', num: '01' },
  { id: 'studio', label: 'Studio', num: '02' },
  { id: 'services', label: 'Services', num: '03' },
  { id: 'gear', label: 'Gear', num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
];

export function Nav() {
  const setPage = useSetPage();
  const { pathname } = useLocation();
  const page = pageFromPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 30);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
        <div className="logo" onClick={() => setPage('home')}>
          <img className="logo-emblem" src="/img/logo-emblem-white.png" alt="Fortress Studios" />
          <img className="logo-horizontal" src="/img/logo-horizontal-white.png" alt="Fortress Studios" />
        </div>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a className={page === l.id ? 'active' : ''} onClick={() => setPage(l.id)}>
                <span className="num">{l.num}</span> {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" onClick={() => setPage('contact')}>
          Book Session
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1" />
          </svg>
        </a>
        <button
          className={`nav-burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-head">
            <span className="mm-eyebrow">
              <span className="serif-num">·</span> Menu
            </span>
          </div>
          <nav className="mobile-menu-nav">
            {links.map((l, i) => (
              <a
                key={l.id}
                className={page === l.id ? 'active' : ''}
                style={{ '--i': i } as CSSProperties}
                onClick={() => setPage(l.id)}
              >
                <span className="mm-num">{l.num}</span>
                <span className="mm-label">{l.label}</span>
                <span className="mm-arrow">→</span>
              </a>
            ))}
          </nav>
          <div className="mobile-menu-foot">
            <a
              className="btn btn-solid"
              style={{ '--i': links.length } as CSSProperties}
              onClick={() => setPage('contact')}
            >
              Book a Session <span className="arrow"></span>
            </a>
            <div className="mm-contact" style={{ '--i': links.length + 1 } as CSSProperties}>
              <a href="mailto:hello@fortress.studio">hello@fortress.studio</a>
              <a href="#">@fortresstudios</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
