/**
 * @module ditch/components/header
 */

import React from 'react';

import { useScreenSize } from '../../contexts/ScreenSize';
import { HeaderPc } from './pc';
import { HeaderMobile } from './mobile';

/** @typedef {import('@emotion/serialize').CSSInterpolation} CSSInterpolation */

/**
 * @typedef HeaderProps
 * @property {string} [page]
 * @property {CSSInterpolation} [styles]
 * @property {React.ReactElement<any>} [children]
 */

/**
 * @public
 * @type {React.FC<HeaderProps>}
 * @constructs module:ditch/components/header.Header
 * @returns {React.ReactElement<any>}
 */
export const Header = ({ page, styles, children }) => {
  const screenSize = useScreenSize();

  return screenSize?.isMobile ? (
    <HeaderMobile page={page} styles={styles}>
      {children}
    </HeaderMobile>
  ) : (
    <HeaderPc page={page} styles={styles}>
      {children}
    </HeaderPc>
  );
};
