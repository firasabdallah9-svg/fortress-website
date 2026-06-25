import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATHS } from '../routes';
import type { PageId } from '../types';

/**
 * Bridges the existing `setPage(id)` ergonomics onto react-router navigation,
 * so page components keep their simple `setPage` prop while URLs stay real.
 */
export function useSetPage(): (page: PageId) => void {
  const navigate = useNavigate();
  return useCallback((page: PageId) => navigate(PAGE_PATHS[page]), [navigate]);
}
