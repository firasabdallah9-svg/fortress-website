/* Gear / Equipment page */

import { Reveal } from '../components/common';
import { GearBrowser } from '../components/GearBrowser';
import { FinalCTA } from '../components/FinalCTA';
import type { SetPageProps } from '../types';

export function GearPage({ setPage }: SetPageProps) {
  return (
    <div className="page">
      <header className="page-header with-image">
        <div className="ph-bg">
          <img src="/img/guitar-wall.jpg" alt="" />
        </div>
        <div className="container">
          <Reveal>
            <div className="crumb">
              <span className="num">04</span> Equipment
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1>
              The <span className="serif">arsenal.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="ph-sub">
              Microphones, monitoring, outboard, instruments, amplifiers — every piece in the room,
              browsable.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <GearBrowser />
        </div>
      </section>

      <FinalCTA setPage={setPage} />
    </div>
  );
}
