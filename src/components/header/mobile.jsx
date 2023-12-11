/**
 * @module ditch/components/header/mobile
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import tw, { css } from 'twin.macro';

import { SearchIcon } from '../../components/icons/search';
import { CheckIcon } from '../../components/icons/check';
import { Language } from '../language';

/** @typedef {import('@emotion/serialize').CSSInterpolation} CSSInterpolation */

const HEADER_HEIGHT_TOP = 75;
const HEADER_HEIGHT_BOTTOM = 38;

export const HEIGHT = HEADER_HEIGHT_TOP + HEADER_HEIGHT_BOTTOM;
export const MARGIN_SIZE = 36;

const ICON_COLOR = '#909090';

/** @type {CSSInterpolation} */
const languageIconStyles = css`
  & img {
    width: 30px;
    border: 1px solid ${ICON_COLOR};
  }
`;

/**
 * @typedef HeaderMobileProps
 * @type {Object}
 * @property {string} [page]
 * @property {CSSInterpolation} [styles]
 * @property {React.ReactElement<any>} [children]
 */

/**
 * @public
 * @type {React.FC<HeaderMobileProps>}
 * @constructs module:ditch/components/header.HeaderMobile
 * @returns {React.ReactElement<any>}
 */
export const HeaderMobile = ({ styles }) => {
  const { t } = useTranslation();

  return (
    <div
      id="header"
      css={[
        tw`w-full bg-white`,
        css`
          height: ${HEIGHT}px;
        `,
        styles,
      ]}
    >
      {/* Top */}
      <div
        id="header-top"
        css={[
          tw`w-full gap-2`,
          css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            height: ${HEADER_HEIGHT_TOP}px;
          `,
        ]}
      >
        {/* Top Left */}
        <div
          id="header-top-left"
          css={[
            tw`flex flex-row justify-start items-center`,
            css`
              grid-column: 1/2;
              grid-row: 1;
            `,
          ]}
        >
          &nbsp;
        </div>

        {/* Logo */}
        <div
          id="header-top-middle"
          css={[
            tw`flex flex-col justify-center items-center`,
            css`
              grid-column: 2/3;
              grid-row: 1;
            `,
          ]}
        >
          <Link to="/">
            <img
              src="assets/logo.png"
              css={css`
                width: 150px;
              `}
            />
          </Link>
        </div>

        {/* Top Right */}
        <div
          id="header-top-left"
          css={[
            tw`flex flex-row justify-end items-center gap-1`,
            css`
              grid-column: 3;
              grid-row: 1;
              padding-right: ${MARGIN_SIZE}px;
            `,
          ]}
        >
          <Language styles={languageIconStyles} />
          <SearchIcon styles={{ size: '24px', color: ICON_COLOR }} />
          <CheckIcon styles={{ size: '24px', color: ICON_COLOR }} />
        </div>
      </div>
      {/* END OF: Top */}

      {/* Bottom */}
      <div
        id="header-bottom"
        css={[
          tw`w-full gap-2 text-sm`,
          css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            height: ${HEADER_HEIGHT_BOTTOM}px;
          `,
        ]}
      >
        {/* Bottom Left */}
        <div
          id="header-bottom-left"
          css={[
            tw`w-full flex flex-row justify-start items-center whitespace-nowrap`,
            css`
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: 1fr;
              height: ${HEADER_HEIGHT_BOTTOM}px;
              padding-left: ${MARGIN_SIZE}px;
            `,
          ]}
        >
          {t('header.welcome')}
        </div>

        {/* Bottom Right */}
        <div
          id="header-bottom-right"
          css={[
            tw`w-full flex flex-row justify-end items-center gap-3`,
            css`
              height: ${HEADER_HEIGHT_BOTTOM}px;
              padding-right: ${MARGIN_SIZE}px;
            `,
          ]}
        >
          <Link to="/">{t('header.register')}</Link>

          <Link to="/">{t('header.login')}</Link>
        </div>
      </div>
      {/* END OF: Bottom */}
    </div>
  );
};
