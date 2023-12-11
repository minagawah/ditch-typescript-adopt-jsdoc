// @ts-nocheck
import { useState } from 'react';
import Cookies from 'js-cookie';

import { COOKIE_NAME_BASE, DURATION_YEARS_100 } from '../constants';

const get_cookie_name = name => `${COOKIE_NAME_BASE}_${name}`;

export const getCookie = (name, initial) => {
  const cookie = Cookies.get(get_cookie_name(name));
  return cookie ? JSON.parse(cookie) : initial;
};

export const useCookie = (name, initialValue) => {
  const cookie_name = get_cookie_name(name);

  const [cookieValue, setCookieValue] = useState(() => {
    return getCookie(name, initialValue);
  });

  const _set = (value, options = {}) => {
    if (typeof value === 'undefined')
      throw new Error('Failed to write a cookie');

    const { expires = DURATION_YEARS_100 } = options;
    setCookieValue(value);
    Cookies.set(cookie_name, JSON.stringify(value), { expires });
  };

  const _del = (path = '/') => {
    _set('', -1, path); // TODO????
    setCookieValue(null);
  };

  return [cookieValue, _set, _del];
};
