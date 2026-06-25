/* Central mapping between PageId identifiers and URL paths */

import type { PageId } from './types';

export const PAGE_PATHS: Record<PageId, string> = {
  home: '/',
  studio: '/studio',
  services: '/services',
  gear: '/gear',
  contact: '/contact',
};

export const PATH_PAGES: Record<string, PageId> = {
  '/': 'home',
  '/studio': 'studio',
  '/services': 'services',
  '/gear': 'gear',
  '/contact': 'contact',
};

export function pageFromPath(pathname: string): PageId {
  return PATH_PAGES[pathname] ?? 'home';
}
