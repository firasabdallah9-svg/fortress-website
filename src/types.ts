/* Shared app types */

export type PageId = 'home' | 'studio' | 'services' | 'gear' | 'contact';

export type HeroVariant = 'overlay' | 'split' | 'typed';
export type AccentFont = 'fraunces' | 'playfair' | 'cormorant';

export interface Tweaks {
  accent: string;
  accentFont: AccentFont;
  heroVariant: HeroVariant;
}

export interface SetPageProps {
  setPage: (page: PageId) => void;
}

export interface ImgTag {
  num?: string;
  label: string;
}
