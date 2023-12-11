// @ts-nocheck
import { useEffect, useRef } from 'react';

export const useTimeout = (fn, delay) => {
  const saved = useRef(fn);

  useEffect(() => {
    saved.current = fn;
  }, [fn]);

  useEffect(() => {
    if (!delay && delay === null) return;

    const timer_id = setTimeout(() => saved.current(), delay);

    return () => {
      // console.log('[useTimeout] Cleanup!');
      clearTimeout(timer_id);
    };
  }, [delay]);
};
