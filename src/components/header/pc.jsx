/**
 * @module ditch/components/header/pc
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import tw, { css } from 'twin.macro';

import { buttonStyle, inputStyle } from '../../styles/shared';
import { SearchIcon } from '../icons/search';
import { NotificationIcon } from '../icons/notification';
import { Language } from '../language';

/** @typedef {import('@emotion/serialize').CSSInterpolation} CSSInterpolation */

export const HEIGHT = 120;
export const MARGIN_SIZE = 36;

const ICON_COLOR = '#909090';

/** @type {CSSInterpolation} */
const languageIconStyles = css`
  & img {
    width: 32px;
    border: 1px solid ${ICON_COLOR};
  }
`;

/**
 * @typedef HeaderPcProps
 * @type {Object}
 * @property {string} [page]
 * @property {CSSInterpolation} [styles]
 * @property {React.ReactElement<any>} [children]
 */

/**
 * @public
 * @type {React.FC<HeaderPcProps>}
 * @constructs module:ditch/components/header/pc.HeaderPc
 * @returns {React.ReactElement<any>}
 */
export const HeaderPc = ({ styles }) => {
  const { t } = useTranslation();

  // 282px
  return (
    <div
      id="header"
      css={[
        tw`w-full bg-white`,
        css`
          display: grid;
          grid-template-columns: ${MARGIN_SIZE}px 180px 1fr 330px ${MARGIN_SIZE}px;
          grid-template-rows: ${HEIGHT}px;
        `,
        styles,
      ]}
    >
      {/* Left Margin */}
      <div
        css={css`
          grid-column: 1/2;
          grid-row: 1;
        `}
      ></div>

      {/* Logo */}
      <div
        id="header-logo"
        css={[
          tw`flex flex-row justify-start items-center`,
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

      {/* Search */}
      <div
        id="header-search"
        css={[
          tw`flex flex-row justify-start items-center gap-1`,
          css`
            grid-column: 3/4;
            grid-row: 1;
          `,
        ]}
      >
        <input
          type="text"
          css={[
            inputStyle,
            css`
              width: 85%;
              max-width: 400px;
            `,
          ]}
        />
        <SearchIcon styles={{ size: '20px', color: ICON_COLOR }} />
      </div>

      {/* Buttons */}
      <div
        id="header-buttons"
        css={[
          tw`flex flex-row justify-between items-center text-sm gap-1`,
          css`
            grid-column: 4/5;
            grid-row: 1;
          `,
        ]}
      >
        <Link to="/">{t('header.login')}</Link>

        <Link to="/">{t('header.register')}</Link>

        <Language styles={languageIconStyles} />

        <NotificationIcon styles={{ size: '24px', color: ICON_COLOR }} />

        <button css={[buttonStyle, tw`text-xs`]}>{t('header.publish')}</button>
      </div>

      {/* Right Margin */}
      <div
        css={css`
          grid-column: 5;
          grid-row: 1;
        `}
      ></div>
    </div>
  );
};
