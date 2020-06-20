import { useEffect, useState } from 'react';
import theme from 'config/theme';

export const isClient = typeof window === 'object';

const useMediaBase = (query: string, defaultState: boolean = false) => {
  const [state, setState] = useState(
    isClient ? () => window.matchMedia(query).matches : defaultState
  );

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) {
        return;
      }
      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
};

const useMedia = () => ({
  mobile: useMediaBase(`(max-width: ${theme.breakpoints[0] - 1}px)`),
  tablet: useMediaBase(
    `(min-width: ${theme.breakpoints[0]}px) and (max-width: ${theme.breakpoints[1] - 1}px)`
  ),
  desktop: useMediaBase(`(min-width: ${theme.breakpoints[1]}px)`)
});

export default useMedia;
