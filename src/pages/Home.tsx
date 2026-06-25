/* Home page — premium build with real images */

import { Img, Reveal, Parallax } from '../components/common';
import { FinalCTA } from '../components/FinalCTA';
import { GEAR_DATA } from '../data/gear';
import type { SetPageProps, Tweaks } from '../types';

interface HomeProps extends SetPageProps {
  tweaks: Tweaks;
}

export function Home({ tweaks, setPage }: HomeProps) {
  const heroVariant = tweaks.heroVariant || 'overlay';

  return (
    <div className="page">
      {heroVariant === 'overlay' && <HeroOverlay setPage={setPage} />}
      {heroVariant === 'split' && <HeroSplit setPage={setPage} />}
      {heroVariant === 'typed' && <HeroTyped setPage={setPage} />}

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {[...Array(2)].map((_, k) => (
            <div className="marquee-item" key={k}>
              <span className="marquee-word red">Recording</span>
              <span className="marquee-dot"></span>
              <span className="marquee-word white">Mixing</span>
              <span className="marquee-dot"></span>
              <span className="marquee-word red">Mastering</span>
              <span className="marquee-dot"></span>
              <span className="marquee-word white">Production</span>
              <span className="marquee-dot"></span>
              <span className="marquee-word red">Sound Design</span>
              <span className="marquee-dot"></span>
              <span className="marquee-word white">Vocal Tracking</span>
              <span className="marquee-dot"></span>
            </div>
          ))}
        </div>
      </div>

      {/* The Heart of It All */}
      <section className="section">
        <div className="container">
          <div className="heart">
            <Reveal mode="img">
              <div className="heart-img">
                <Img
                  src="/img/manley.jpg"
                  alt="Manley Core outboard rack"
                  tag={{ num: '01', label: 'Outboard Rack' }}
                  tagPos="tl"
                  className="dark"
                />
              </div>
            </Reveal>
            <div className="heart-text">
              <Reveal>
                <span className="eyebrow" style={{ marginBottom: 28, display: 'inline-flex' }}>
                  <span className="serif-num" style={{ marginRight: 4 }}>01</span> The Foundation
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2>
                  The heart <span className="serif">of it all.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="body-lg" style={{ marginBottom: 24 }}>
                  At Fortress, recording is done the digital way — using professional workflows on
                  Logic Pro and Cubase.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="body-md">
                  The studio is designed to give artists the freedom to create, perform, and refine
                  their sound in a comfortable, focused space. Whether you're recording vocals,
                  guitars, drums, keys, or full arrangements — Fortress offers the equipment and
                  setup to bring your project to life.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <span className="eyebrow" style={{ marginBottom: 28, display: 'inline-flex' }}>
                  <span className="serif-num" style={{ marginRight: 4 }}>02</span> What We Do
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2>
                  Four disciplines.
                  <br />
                  <span className="serif">One studio.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="head-text">
                From the first take to the final master, every stage is handled in-house — same
                room, same ear, same care.
              </div>
            </Reveal>
          </div>
          <div className="services">
            {[
              {
                num: '01',
                title: 'Recording',
                text: 'Capture vocals, instruments, bands, and live performances with clarity, character, and attention to detail.',
              },
              {
                num: '02',
                title: 'Mixing',
                text: 'Shape every element of your track into a balanced, polished, and professional sound.',
              },
              {
                num: '03',
                title: 'Mastering',
                text: 'Prepare your final mix for release with the right loudness, depth, and consistency across platforms.',
              },
              {
                num: '04',
                title: 'Production',
                text: 'From ideas to full arrangements, Fortress provides the tools and space to help develop your sound.',
              },
            ].map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <div className="service" onClick={() => setPage('services')}>
                  <div className="svc-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="svc-arrow"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Arsenal */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <span className="eyebrow" style={{ marginBottom: 28, display: 'inline-flex' }}>
                  <span className="serif-num" style={{ marginRight: 4 }}>03</span> The Arsenal
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2>
                  The <span className="serif">Arsenal.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="head-text">
                Professional microphones, monitoring, outboard, instruments, and amplifiers — every
                piece in the room earns its place. Nothing here is for show.
              </div>
            </Reveal>
          </div>
          <div className="showcase">
            {[
              { src: '/img/microphone.jpg', cat: 'Microphones', name: 'Neumann U 87 Ai', num: '01' },
              { src: '/img/les-paul.jpg', cat: 'Guitars', name: 'Gibson Les Paul', num: '02' },
              { src: '/img/synth-deepmind.jpg', cat: 'Synths', name: 'DeepMind 6', num: '03' },
            ].map((c, i) => (
              <Reveal key={i} mode="img" delay={i * 100}>
                <div className="showcase-card" onClick={() => setPage('gear')}>
                  <Img src={c.src} dark className="" />
                  <div className="sc-meta">
                    <span className="sc-num">{c.num}</span>
                    <div className="sc-bottom">
                      <span className="sc-cat">{c.cat}</span>
                      <h4>{c.name}</h4>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="arsenal-index">
              {Object.values(GEAR_DATA).map((cat) => (
                <button key={cat.label} className="arsenal-cat" onClick={() => setPage('gear')}>
                  <span className="ac-count">{String(cat.items.length).padStart(2, '0')}</span>
                  <span className="ac-label">{cat.label}</span>
                </button>
              ))}
              <a className="btn-text arsenal-link" onClick={() => setPage('gear')}>
                Browse full inventory <span style={{ fontSize: 18 }}>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Built For Artists */}
      <section className="section">
        <div className="container">
          <div className="feature">
            <div className="feature-text">
              <Reveal>
                <span className="eyebrow" style={{ marginBottom: 28, display: 'inline-flex' }}>
                  <span className="serif-num" style={{ marginRight: 4 }}>04</span> Built For Artists
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2>
                  More than a studio. A <span className="serif">creative space.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Fortress is built around performance, sound, and comfort. Professional microphones,
                  reliable monitoring, outboard gear, amps, instruments, and a digital recording
                  setup — everything you need to focus on the music.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div style={{ marginTop: 36 }}>
                  <a className="btn-text" onClick={() => setPage('gear')}>
                    Explore the Gear <span style={{ fontSize: 18 }}>→</span>
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal mode="img">
              <Parallax speed={0.05}>
                <div className="feature-img">
                  <Img
                    src="/img/lounge-acoustic.jpg"
                    alt="Lounge with Taylor 12 string"
                    tag={{ num: '02', label: 'Live Room' }}
                    tagPos="br"
                  />
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="container">
          <div className="stats">
            <Reveal>
              <div className="stat">
                <div className="stat-num">
                  06<span className="ser">yr</span>
                </div>
                <div className="stat-label">Studio Operations</div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="stat">
                <div className="stat-num">
                  10<span className="ser">+</span>
                </div>
                <div className="stat-label">Microphones</div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="stat">
                <div className="stat-num">
                  14<span className="ser">+</span>
                </div>
                <div className="stat-label">Instruments</div>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="stat">
                <div className="stat-num">
                  <span className="ser">∞</span>
                </div>
                <div className="stat-label">Possibilities</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <span className="eyebrow" style={{ marginBottom: 28, display: 'inline-flex' }}>
                  <span className="serif-num" style={{ marginRight: 4 }}>05</span> Why Fortress
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2>
                  Why record <span className="serif">at Fortress.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="head-text">
                Six reasons artists keep coming back, in no particular order.
              </div>
            </Reveal>
          </div>
          <div className="why-grid">
            {[
              'Professional recording setup',
              'High quality microphones and monitoring',
              'Wide selection of instruments and amps',
              'Mixing and mastering support in-house',
              'Comfortable creative environment',
              'Built for vocals, bands, and full productions',
            ].map((t, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="why-item">
                  <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="why-txt">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram strip */}
      <section className="section-sm">
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 40,
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
                <span className="serif-num" style={{ marginRight: 4 }}>06</span> Studio Diary
              </span>
              <h2 className="h-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                Behind the desk <span className="serif">@fortresstudios</span>
              </h2>
            </div>
            <a className="btn-text" href="#">
              Follow on Instagram <span style={{ fontSize: 18 }}>→</span>
            </a>
          </div>
          <div className="ig-strip">
            {[
              '/img/drum-kit.jpg',
              '/img/pedals.jpg',
              '/img/maschine.jpg',
              '/img/strat-red.jpg',
              '/img/drum-sticks.jpg',
              '/img/guitar-wall.jpg',
            ].map((src, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="ig-tile">
                  <Img src={src} dark />
                  <div className="ig-overlay">View</div>
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

function HeroOverlay({ setPage }: SetPageProps) {
  return (
    <section className="hero hero-studio">
      <div className="hero-bg">
        <Parallax speed={0.05}>
          <img
            src="/img/hero-studio.png"
            alt="Fortress recording studio"
            style={{ width: '100%', height: '104vh' }}
          />
        </Parallax>
      </div>
      <div className="hero-corner tl">
        <span className="serif-num">01</span> &nbsp; Music Studio
      </div>
      <div className="hero-corner tr">
        <span className="ser">Est.</span> 2020 / Beirut
      </div>
      <div className="hero-content container">
        <div className="hero-studio-col">
          <Reveal>
            <div className="hero-eyebrow">
              <span className="num">01</span>
              <span className="line"></span>
              <span className="label-txt">Recording · Mixing · Mastering</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="hero-headline">
              Where sound finds its <span className="serif">strength.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero-text">
              A professional music studio built for artists, bands, and producers who want their
              sound recorded, shaped, and finished with care.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="hero-actions">
              <a className="btn btn-solid" onClick={() => setPage('contact')}>
                Book a Session <span className="arrow"></span>
              </a>
              <a className="btn" onClick={() => setPage('studio')}>
                Explore <span className="arrow"></span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}

function HeroSplit({ setPage }: SetPageProps) {
  return (
    <section className="hero hero-split">
      <div className="hero-left">
        <Reveal>
          <div className="hero-eyebrow">
            <span className="num">01</span>
            <span className="line"></span>
            <span className="label-txt">Music Studio · Est. 2020</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="hero-headline" style={{ fontSize: 'clamp(48px, 7vw, 110px)', maxWidth: '12ch' }}>
            Where sound finds its <span className="serif">strength.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="hero-text" style={{ marginBottom: 36 }}>
            A professional studio for artists, bands, and producers — recording, mixing, and
            mastering, all in-house.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="hero-actions">
            <a className="btn btn-solid" onClick={() => setPage('contact')}>
              Book a Session <span className="arrow"></span>
            </a>
            <a className="btn" onClick={() => setPage('studio')}>
              Explore <span className="arrow"></span>
            </a>
          </div>
        </Reveal>
      </div>
      <div className="hero-right">
        <Parallax speed={0.04}>
          <img src="/img/microphone.jpg" alt="Studio microphone" style={{ width: '100%', height: '100%' }} />
        </Parallax>
      </div>
    </section>
  );
}

function HeroTyped({ setPage }: SetPageProps) {
  return (
    <section className="hero hero-typed">
      <div className="hero-content container-wide">
        <Reveal>
          <div className="hero-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="num">01</span>
            <span className="line"></span>
            <span className="label-txt">Fortress Music Studio · Est. 2020</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="hero-headline" style={{ textAlign: 'center', margin: '0 auto 36px' }}>
            Where sound
            <br />
            finds its <span className="serif">strength.</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="hero-text" style={{ textAlign: 'center', margin: '0 auto 36px', maxWidth: '52ch' }}>
            A professional music studio for artists, bands, and producers — recording, mixing, and
            mastering, handled with care.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a className="btn btn-solid" onClick={() => setPage('contact')}>
              Book a Session <span className="arrow"></span>
            </a>
            <a className="btn" onClick={() => setPage('studio')}>
              Explore <span className="arrow"></span>
            </a>
          </div>
        </Reveal>
      </div>
      <div className="hero-strip">
        {[
          { src: '/img/studio-control-room.jpg', t: 'Control', n: '01' },
          { src: '/img/microphone.jpg', t: 'Mics', n: '02' },
          { src: '/img/les-paul.jpg', t: 'Guitars', n: '03' },
          { src: '/img/drum-kit.jpg', t: 'Drums', n: '04' },
        ].map((c, i) => (
          <div className="hero-strip-cell" key={i}>
            <img src={c.src} alt={c.t} />
            <span className="cell-label">
              <span className="ser">{c.n}</span> {c.t}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
