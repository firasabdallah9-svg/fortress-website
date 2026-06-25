/* Services page */

import { Img, Reveal } from '../components/common';
import { FinalCTA } from '../components/FinalCTA';
import type { SetPageProps } from '../types';

interface ServiceDetail {
  num: string;
  title: string;
  img: string;
  body: string[];
  tags: string[];
}

interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

export function ServicesPage({ setPage }: SetPageProps) {
  const services: ServiceDetail[] = [
    {
      num: '01',
      title: 'Recording',
      img: '/img/microphone.jpg',
      body: [
        'Capture vocals, instruments, bands, and live performances with clarity, character, and attention to detail.',
        'Sessions are tracked digitally on Logic Pro and Cubase, routed through Antelope audio interfaces that use the highest quality converters with up to 130dB dynamic range — with a microphone selection chosen to match the source, not the other way around.',
      ],
      tags: ['Vocals', 'Drums', 'Bands', 'Live', 'Multi-track'],
    },
    {
      num: '02',
      title: 'Mixing',
      img: '/img/quad-cortex.jpg',
      body: [
        'Shape every element of your track into a balanced, polished and professional sound.',
        'Mixes are built on Genelec 8050B and Adam T7V monitoring, DT990 Pro Headphones and a calibrated room to keep decisions honest.',
      ],
      tags: ['Stems', 'Vocal Tuning', 'Analog Color', 'Reference Matched'],
    },
    {
      num: '03',
      title: 'Mastering',
      img: '/img/studio-control-room.jpg',
      body: [
        'Prepare your final mix for release with the right loudness, depth, and consistency across platforms.',
        'Every master is delivered to spec — Spotify, Apple, vinyl, or broadcast — and tested across systems before it leaves the room.',
      ],
      tags: ['Streaming', 'Vinyl-ready', 'Loudness', 'EP / LP'],
    },
    {
      num: '04',
      title: 'Production Support',
      img: '/img/maschine.jpg',
      body: [
        'From ideas to full arrangements, Fortress provides the tools and space to help develop your sound.',
        "Bring a voice memo, a chord chart, or a finished demo — we'll meet it where it is and build out from there.",
      ],
      tags: ['Arrangement', 'Beat Making', 'Songwriting', 'Sound Design'],
    },
  ];

  const process: ProcessStep[] = [
    { n: '01', t: 'Pre-Session', d: 'Reference call, scope, and gear prep — so day one is for music, not setup.' },
    { n: '02', t: 'Tracking', d: 'Recording sessions with the right mic chain for the source.' },
    { n: '03', t: 'Mix', d: 'Balance, color, and movement — committed on monitors that tell the truth.' },
    { n: '04', t: 'Master', d: 'Final loudness, tonal polish, and delivery to platform spec.' },
  ];

  return (
    <div className="page">
      <header className="page-header with-image">
        <div className="ph-bg">
          <img src="/img/quad-cortex.jpg" alt="" />
        </div>
        <div className="container">
          <Reveal>
            <div className="crumb">
              <span className="num">03</span> Services
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1>
              What we <span className="serif">do.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="ph-sub">
              From the first take to the final master — every stage handled in-house, in the same
              room, with the same care.
            </p>
          </Reveal>
        </div>
      </header>

      <section style={{ padding: '40px 0 100px' }}>
        <div className="container">
          {services.map((s) => (
            <Reveal key={s.num}>
              <div className="svc-detail">
                <div className="svc-meta">
                  <div className="svc-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <div className="svc-tags">
                    {s.tags.map((t) => (
                      <span className="svc-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <Reveal mode="img">
                    <div className="svc-img">
                      <Img src={s.img} dark tag={{ num: s.num, label: s.title }} tagPos="tl" />
                    </div>
                  </Reveal>
                  <div className="svc-body" style={{ marginTop: 32 }}>
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <span className="eyebrow" style={{ marginBottom: 28, display: 'inline-flex' }}>
                  <span className="serif-num" style={{ marginRight: 4 }}>—</span> Process
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2>
                  From idea <span className="serif">to release.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="head-text">
                A simple, transparent path from the first conversation to the finished master.
              </div>
            </Reveal>
          </div>
          <div className="process">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="process-step">
                  <div className="ps-num">{p.n}</div>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA setPage={setPage} />
    </div>
  );
}
