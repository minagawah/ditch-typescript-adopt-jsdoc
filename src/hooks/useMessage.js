// @ts-nocheck
import { useState, useEffect, useCallback, useRef } from 'react';

const DEFAULT_DURATION = 3000;

export const useMessage = (options = {}) => {
  const { duration = DEFAULT_DURATION } = options;
  const [message, setMessage] = useState('');

  const timer_id = useRef(null);

  const _set_message = useCallback(msg => {
    setMessage(msg);

    timer_id.current = setTimeout(() => {
      setMessage('');
    }, duration);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timer_id.current);
    };
  }, [duration]);

  return [message, _set_message];
};
