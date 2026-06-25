/* Site footer */

import type { CSSProperties } from 'react';
import type { SetPageProps } from '../types';

export function Footer({ setPage }: SetPageProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-mark">
              <img src="/img/logo-horizontal-white.png" alt="Fortress Studios" />
            </div>
            <p>
              A professional music studio built for artists who want their sound recorded, shaped,
              and finished with <span className="serif">care.</span>
            </p>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li>
                <a onClick={() => setPage('home')}>Home</a>
              </li>
              <li>
                <a onClick={() => setPage('studio')}>The Studio</a>
              </li>
              <li>
                <a onClick={() => setPage('services')}>Services</a>
              </li>
              <li>
                <a onClick={() => setPage('gear')}>Gear</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="mailto:hello@fortress.studio">hello@fortress.studio</a>
              </li>
              <li>
                <a href="https://wa.me/" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">SoundCloud</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Founders</h4>
            <ul>
              <li>Ahmad Abdallah</li>
              <li>Mohamad Halawani</li>
              <li style={{ marginTop: 16, color: 'var(--ink-3)' } as CSSProperties}>Est. 2020</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Fortress Music Studio</span>
          <span>
            <span className="ser">Where</span> sound finds its <span className="ser">strength.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
