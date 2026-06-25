/* App root — router, layout, theming, tweaks */

import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Nav } from './components/Nav';
import { SideRail } from './components/SideRail';
import { Footer } from './components/Footer';
import { TweaksPanel, TweakSection, TweakColor, TweakRadio } from './components/TweaksPanel';
import { useTweaks } from './hooks/useTweaks';
import { useSetPage } from './hooks/useSetPage';
import { Home } from './pages/Home';
import { StudioPage } from './pages/Studio';
import { ServicesPage } from './pages/Services';
import { GearPage } from './pages/Gear';
import { ContactPage } from './pages/Contact';
import type { Tweaks } from './types';

const TWEAK_DEFAULTS: Tweaks = {
  accent: '#d83a3a',
  accentFont: 'fraunces',
  heroVariant: 'overlay',
};

function FortressTweaks({
  tweaks,
  setTweak,
}: {
  tweaks: Tweaks;
  setTweak: (key: keyof Tweaks, value: Tweaks[keyof Tweaks]) => void;
}) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent Color">
        <TweakColor
          label="Accent"
          value={tweaks.accent}
          onChange={(v) => setTweak('accent', v)}
          presets={['#d83a3a', '#e84444', '#b02828', '#c9a96a', '#d97757']}
        />
      </TweakSection>

      <TweakSection label="Serif Accent Font">
        <TweakRadio
          value={tweaks.accentFont}
          onChange={(v) => setTweak('accentFont', v as Tweaks['accentFont'])}
          options={[
            { value: 'fraunces', label: 'Fraunces' },
            { value: 'playfair', label: 'Playfair' },
            { value: 'cormorant', label: 'Cormorant' },
          ]}
        />
      </TweakSection>

      <TweakSection label="Hero Variant">
        <TweakRadio
          value={tweaks.heroVariant}
          onChange={(v) => setTweak('heroVariant', v as Tweaks['heroVariant'])}
          options={[
            { value: 'overlay', label: 'Overlay' },
            { value: 'split', label: 'Split' },
            { value: 'typed', label: 'Type' },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

function Layout({
  tweaks,
  setTweak,
}: {
  tweaks: Tweaks;
  setTweak: (key: keyof Tweaks, value: Tweaks[keyof Tweaks]) => void;
}) {
  const setPage = useSetPage();
  const { pathname } = useLocation();

  // Reset scroll position on every route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <SideRail />
      <main key={pathname}>
        <Routes>
          <Route path="/" element={<Home tweaks={tweaks} setPage={setPage} />} />
          <Route path="/studio" element={<StudioPage setPage={setPage} />} />
          <Route path="/services" element={<ServicesPage setPage={setPage} />} />
          <Route path="/gear" element={<GearPage setPage={setPage} />} />
          <Route path="/contact" element={<ContactPage setPage={setPage} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer setPage={setPage} />
      <FortressTweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

export default function App() {
  const [tweaks, setTweak] = useTweaks<Tweaks>(TWEAK_DEFAULTS);

  // Apply accent color + serif accent font as CSS custom properties / body class
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', tweaks.accent);
    const hex = tweaks.accent.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    root.style.setProperty('--accent-soft', `rgba(${r}, ${g}, ${b}, 0.1)`);
    root.style.setProperty('--line-accent', `rgba(${r}, ${g}, ${b}, 0.4)`);
    document.body.classList.remove('font-acc-cormorant', 'font-acc-fraunces', 'font-acc-playfair');
    document.body.classList.add(`font-acc-${tweaks.accentFont}`);
  }, [tweaks]);

  // Liquid glass — track cursor for radial highlight on buttons
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest('.btn, .nav-cta') as HTMLElement | null;
      if (!t) return;
      const rect = t.getBoundingClientRect();
      t.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      t.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <BrowserRouter>
      <Layout tweaks={tweaks} setTweak={setTweak} />
    </BrowserRouter>
  );
}
