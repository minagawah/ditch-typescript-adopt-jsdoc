/**
 * @module ditch/pages/root
 */

import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import tw, { css } from 'twin.macro';

import { HEIGHT as HEADER_HEIGHT_PC } from '../components/header/pc';
import { HEIGHT as HEADER_HEIGHT_MOBILE } from '../components/header/mobile';
import { HEIGHT as NAV_HEIGHT } from '../components/nav';
import { Nav } from '../components/nav';
import { useScreenSize } from '../contexts/ScreenSize';
import { Header } from '../components/header';

/** @typedef {import('@emotion/serialize').CSSInterpolation} CSSInterpolation */

/** @type {CSSInterpolation} */
const layoutStylesDefault = css`
  ${tw`w-full text-gray-900`}
  height: auto;
  min-height: 100vh;
  z-index: 10;
`;

/** @type {CSSInterpolation} */
const headerStylesDefault = css`
  ${tw`fixed top-0`}
  z-index: 10;
`;

/** @type {CSSInterpolation} */
const navStyles = css`
  ${tw`fixed bottom-0 bg-white`}
  height: ${NAV_HEIGHT}px;
  z-index: 10;
`;

/**
 * @function
 * @type {React.FC<Object | undefined>}
 * @constructs module:ditch/components/root.Root
 * @returns {React.ReactElement<any>}
 */
export const Root = () => {
  const screenSize = useScreenSize();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [layoutStyles, setLayoutStyles] = useState(layoutStylesDefault);
  const [headerStyles, setHeaderStyles] = useState(headerStylesDefault);

  useEffect(() => {
    console.log(
      `[components/root] isMobile: ${screenSize?.isMobile ? 'yes' : 'no'}`
    );

    const height = screenSize?.isMobile
      ? HEADER_HEIGHT_MOBILE
      : HEADER_HEIGHT_PC;

    // console.log('[components/layout] height:', height);

    setHeaderHeight(height);
  }, [screenSize?.isMobile]);

  useEffect(() => {
    setHeaderStyles(css`
      ${headerStylesDefault}
      height: ${headerHeight}px;
    `);

    setLayoutStyles(css`
      ${layoutStylesDefault}
      margin-top: ${headerHeight}px;
    `);
  }, [headerHeight]);

  return (
    <div id="layout-container" tw="relative">
      <Header page="home" styles={headerStyles} />

      <div id="layout" css={layoutStyles}>
        <Outlet />
        {screenSize?.isMobile ? <Nav styles={navStyles} /> : null}
      </div>
    </div>
  );
};
