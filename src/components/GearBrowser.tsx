/* Tabbed gear inventory browser */

import { useState } from 'react';
import { Reveal } from './common';
import { GEAR_DATA } from '../data/gear';

export function GearBrowser() {
  const [tab, setTab] = useState<string>('microphones');
  const tabs = Object.entries(GEAR_DATA);
  const activeItems = GEAR_DATA[tab].items;

  return (
    <>
      <div className="gear-tabs">
        {tabs.map(([key, val]) => (
          <button
            key={key}
            className={`gear-tab ${tab === key ? 'active' : ''}`}
            onClick={() => setTab(key)}
          >
            {val.label}
            <span className="count">{String(val.items.length).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      <div className="gear-grid" key={tab}>
        {activeItems.map((item, i) => (
          <Reveal key={item.name} delay={i * 40}>
            <div className="gear-card">
              <div className="gc-cat">{item.tag}</div>
              <div className="gc-name">{item.name}</div>
              <div className="gc-meta">
                <span className="num">/ {String(i + 1).padStart(2, '0')}</span>
                <span className="qty">{item.qty || 'In Studio'}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
