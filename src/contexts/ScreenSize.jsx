// @ts-nocheck
/**
 * @module ditch/contexts/ScreenSize
 */
import React, { useContext, createContext, useEffect, useState } from 'react';

import { debounce } from '../lib/utils';

/** @typedef {import('react').Context} */

/**
 * @typedef TailwindScreenSize
 * @type {'xs' | 'sm' | 'lg' | 'xl' | '2xl'}
 */

/**
 * @typedef ScreenSize
 * @type {Object}
 * @property {number} [width=0]
 * @property {number} [height=0]
 * @property {number} [inner_width=0]
 * @property {number} [inner_height=0]
 */

/**
 * @typedef ScreenSizeContext
 * @extends ScreenSize
 * @property {TailwindScreenSize} [twsize='xs']
 * @property {boolean} [isMobile=false]
 */

/**
 * @type {ScreenSizeContext}
 */
const ScreenSizeContext = createContext({
  width: 0,
  height: 0,
  inner_width: 0,
  inner_height: 0,
  twsize: 'xs',
  isMobile: false,
});

/**
 * @constructs module:ditch/contexts/ScreenSize~ScreenSizeProvider
 * @returns {Context.<ScreenSizeContext>}
 *
 * Class#method <--- instance method
 * Class.method <--- static method
 * Class~method <--- inner method
 */
export const ScreenSizeProvider = props => {
  /**
   * @var module:ditch/contexts/ScreenSize~ScreenSizeProvider#value
   */
  let value;

  /**
   * @private
   * @function
   */
  let setValue;

  [value, setValue] = useState(_get_screen_size());

  useEffect(() => {
    console.log(`[contexts/ScreenSize] hello`);
    const handler = debounce(() => {
      const size = _get_screen_size();
      const twsize = _get_tailwind_size(size.width);
      const isMobile = _check_mobile(twsize);

      const { width, height } = size;
      console.log(`[contexts/ScreenSize] size: ${width}x${height}`);

      setValue({ ...size, twsize, isMobile });
    }, 200);

    window.addEventListener('resize', handler);

    handler();

    return () => window.removeEventListener('resize', handler);
  }, []);

  return <ScreenSizeContext.Provider value={value} {...props} />;
};

/**
 * @function
 * @returns {Context.<ScreenSizeContext>}
 */
export const useScreenSize = () => useContext(ScreenSizeContext);

/**
 * @private
 * @function
 * @returns {ScreenSize}
 */
function _get_screen_size() {
  return {
    width: document.documentElement.clientWidth || 0,
    height: document.documentElement.clientHeight || 0,
    inner_width: window.innerWidth || 0,
    inner_height: window.innerHeight || 0,
  };
}

/**
 * @private
 * @function
 * @returns {TailwindScreenSize}
 */
function _get_tailwind_size(width) {
  let res;
  if (width < 640) {
    res = 'xs';
  } else if (width < 768) {
    // min-width: 640px
    res = 'sm';
  } else if (width < 1024) {
    // min-width: 768px
    res = 'md';
  } else if (width < 1280) {
    // min-width: 1024px
    res = 'lg';
  } else if (width < 1536) {
    // min-width: 1280px
    res = 'xl';
  } else {
    // min-width: 1536px
    res = '2xl';
  }
  return res;
}

/**
 * @private
 * @function
 * @returns {boolean}
 */
function _check_mobile(twsize) {
  // return twsize === 'xs' || twsize === 'sm' || twsize === 'md';
  return twsize === 'xs' || twsize === 'sm';
}
