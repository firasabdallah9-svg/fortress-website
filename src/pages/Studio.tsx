/* The Studio page */

import { Img, Reveal, Parallax } from '../components/common';
import { FinalCTA } from '../components/FinalCTA';
import type { ImgTag, SetPageProps } from '../types';

interface GalleryItem {
  cls: string;
  src: string;
  tag: ImgTag;
  tagPos?: 'tl' | 'br';
}

interface FounderItem {
  name: string;
  role: string;
  bio: string;
  img: string;
}

export function StudioPage({ setPage }: SetPageProps) {
  const gallery: GalleryItem[] = [
    { cls: 'gal-1', src: '/img/studio-control-room.jpg', tag: { num: '01', label: 'Control Room' } },
    { cls: 'gal-2', src: '/img/microphone.jpg', tag: { num: '02', label: 'Vocal Booth' } },
    { cls: 'gal-3', src: '/img/quad-cortex.jpg', tag: { num: '03', label: 'Quad Cortex' }, tagPos: 'br' },
    { cls: 'gal-4', src: '/img/synth-deepmind.jpg', tag: { num: '04', label: 'DeepMind 6' }, tagPos: 'br' },
    { cls: 'gal-5', src: '/img/pedals.jpg', tag: { num: '05', label: 'Pedals' }, tagPos: 'br' },
    { cls: 'gal-6', src: '/img/guitar-wall.jpg', tag: { num: '06', label: 'Guitar Wall' } },
    { cls: 'gal-7', src: '/img/drum-kit.jpg', tag: { num: '07', label: 'Live Room' } },
  ];

  const founders: FounderItem[] = [
    {
      name: 'Ahmad Abdallah',
      role: 'Co-Founder · Engineer',
      bio: 'Behind the desk for tracking, mixing, and the in-room workflow that keeps sessions moving.',
      img: '/img/strat-red.jpg',
    },
    {
      name: 'Mohamad Halawani',
      role: 'Co-Founder · Producer',
      bio: 'Production, arrangement, and mastering — guiding records from first take to final master.',
      img: '/img/maschine.jpg',
    },
  ];

  return (
    <div className="page">
      <header className="page-header with-image">
        <div className="ph-bg">
          <img src="/img/studio-control-room.jpg" alt="" />
        </div>
        <div className="container">
          <Reveal>
            <div className="crumb">
              <span className="num">02</span> The Studio
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1>
              Inside <span className="serif">Fortress.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="ph-sub">
              A studio designed for focus, creativity, and sound — built around performance, comfort,
              and the music itself.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="gallery">
            {gallery.map((g, i) => (
              <Reveal key={i} mode="img" delay={i * 60} className={`gal-item ${g.cls}`}>
                <Img src={g.src} dark tag={g.tag} tagPos={g.tagPos || 'tl'} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="feature">
            <div className="feature-text">
              <Reveal>
                <span className="eyebrow" style={{ marginBottom: 28, display: 'inline-flex' }}>
                  <span className="serif-num" style={{ marginRight: 4 }}>—</span> The Space
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2>
                  Designed for <span className="serif">focus,</span> creativity, and sound.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Every corner of Fortress is built to support the recording process — from the
                  control room to the live setup. Acoustics tuned, gear ready, the room sets the
                  tone.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p>
                  Artists feel comfortable, prepared, and ready to perform. Less time fighting setup,
                  more time making music.
                </p>
              </Reveal>
            </div>
            <Reveal mode="img">
              <Parallax speed={0.04}>
                <div className="feature-img">
                  <Img src="/img/lounge-acoustic.jpg" tag={{ num: '02', label: 'Lounge' }} tagPos="br" />
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <span className="eyebrow" style={{ marginBottom: 28, display: 'inline-flex' }}>
                  <span className="serif-num" style={{ marginRight: 4 }}>—</span> Founders
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2>
                  The hands behind <span className="serif">the desk.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="head-text">
                Two engineers, one room, and a shared belief that the recording space is as much an
                instrument as anything plugged into it.
              </div>
            </Reveal>
          </div>
          <div className="founders">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <div className="founder">
                  <div className="f-img">
                    <Img src={f.img} dark />
                  </div>
                  <h4>{f.name}</h4>
                  <div className="f-role">{f.role}</div>
                  <p>{f.bio}</p>
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
