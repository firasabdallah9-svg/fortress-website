import { useCallback, useState } from 'react';

/**
 * useTweaks — single source of truth for tweak values.
 *
 * setTweak persists via the host (when embedded in an edit-mode host it posts
 * `__edit_mode_set_keys`; standalone it simply no-ops the postMessage). Accepts
 * either setTweak('key', value) or setTweak({ key: value, ... }).
 */
export function useTweaks<T extends object>(
  defaults: T
): [T, (keyOrEdits: keyof T | Partial<T>, val?: T[keyof T]) => void] {
  const [values, setValues] = useState<T>(defaults);

  const setTweak = useCallback(
    (keyOrEdits: keyof T | Partial<T>, val?: T[keyof T]) => {
      const edits: Partial<T> =
        typeof keyOrEdits === 'object' && keyOrEdits !== null
          ? keyOrEdits
          : ({ [keyOrEdits as keyof T]: val } as Partial<T>);
      setValues((prev) => ({ ...prev, ...edits }));
      window.parent?.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    },
    []
  );

  return [values, setTweak];
}
