/* Contact page */

import { useState, type FormEvent } from 'react';
import { Reveal } from '../components/common';
import { FinalCTA } from '../components/FinalCTA';
import type { SetPageProps } from '../types';

export function ContactPage({ setPage }: SetPageProps) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="page">
      <header className="page-header with-image">
        <div className="ph-bg">
          <img src="/img/lounge-acoustic.jpg" alt="" />
        </div>
        <div className="container">
          <Reveal>
            <div className="crumb">
              <span className="num">05</span> Contact
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1>
              Book a <span className="serif">session.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="ph-sub">
              Send us a message, drop a WhatsApp, or write directly — we read every line.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <div className="contact-info">
                <h3>
                  Get in <span className="serif">touch.</span>
                </h3>
                <p className="body-md" style={{ marginBottom: 32, maxWidth: '40ch' }}>
                  Tell us about your project — vocals, full band, mixing, mastering. We'll get back
                  within a day with availability and a quote.
                </p>
                <div className="info-block">
                  <div className="il">
                    <span className="ilab">Email</span>
                    <span className="ival">
                      <a href="mailto:hello@fortress.studio">hello@fortress.studio</a>
                    </span>
                  </div>
                </div>
                <div className="info-block">
                  <div className="il">
                    <span className="ilab">WhatsApp</span>
                    <span className="ival">
                      <a href="https://wa.me/" target="_blank" rel="noreferrer">
                        +961 · message us
                      </a>
                    </span>
                  </div>
                </div>
                <div className="info-block">
                  <div className="il">
                    <span className="ilab">Instagram</span>
                    <span className="ival">
                      <a href="#">@fortresstudios</a>
                    </span>
                  </div>
                </div>
                <div className="info-block">
                  <div className="il">
                    <span className="ilab">Hours</span>
                    <span className="ival">By appointment, 24 / 7</span>
                  </div>
                </div>
                <div className="info-block">
                  <div className="il">
                    <span className="ilab">Founders</span>
                    <span className="ival" style={{ fontSize: 16, lineHeight: 1.5 }}>
                      Ahmad Abdallah
                      <br />
                      Mohamad Halawani
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form className="form" onSubmit={onSubmit}>
                <div className="field-row">
                  <div className="field">
                    <label>Name</label>
                    <input type="text" required placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" required placeholder="you@email.com" />
                  </div>
                </div>
                <div className="field">
                  <label>Service</label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Recording</option>
                    <option>Mixing</option>
                    <option>Mastering</option>
                    <option>Production Support</option>
                    <option>Full project</option>
                  </select>
                </div>
                <div className="field">
                  <label>Project Details</label>
                  <textarea placeholder="Tell us about your project, timeline, and what you need" />
                </div>
                <div style={{ marginTop: 12 }}>
                  <button className="btn btn-solid" type="submit">
                    {submitted ? 'Message Sent ✓' : 'Send Message'} <span className="arrow"></span>
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA setPage={setPage} />
    </div>
  );
}
