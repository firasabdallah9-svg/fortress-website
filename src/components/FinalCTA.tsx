/* Closing call-to-action band — shared across pages */

import { Reveal } from './common';
import type { SetPageProps } from '../types';

export function FinalCTA({ setPage }: SetPageProps) {
  return (
    <section className="final-cta">
      <div className="final-cta-bg">
        <img src="/img/studio-control-room.jpg" alt="" />
      </div>
      <div className="container">
        <div className="final-cta-inner">
          <Reveal>
            <span className="eyebrow no-line" style={{ display: 'inline-flex', marginBottom: 32 }}>
              <span className="serif-num" style={{ marginRight: 4 }}>—</span> Ready
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2>
              Ready to <span className="serif">record?</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Bring your music to Fortress and let's shape it into a finished sound. Whether you're
              starting a new project or finalizing a release — Fortress gives you the space,
              equipment, and support to make it happen.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="actions">
              <a className="btn btn-solid" href="mailto:hello@fortress.studio">
                Book Your Session <span className="arrow"></span>
              </a>
              <a className="btn" onClick={() => setPage('contact')}>
                Contact The Studio <span className="arrow"></span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
