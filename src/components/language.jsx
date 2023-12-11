/**
 * @module ditch/components/language
 */

import React, { useCallback } from 'react';
import tw, { css } from 'twin.macro';

import { useLanguage } from '../contexts/Language';

/** @typedef {import('@emotion/serialize').CSSInterpolation} CSSInterpolation */

/** @type {CSSInterpolation} */
const iconStyles = css`
  display: inline-block;
  width: 64px;
`;

/**
 * @public
 * @type {React.FC<{ styles: CSSInterpolation }>}
 * @constructs module:ditch/components/language.Language
 * @returns {React.ReactElement<any>}
 */
export const Language = ({ styles }) => {
  const { setLanguage } = useLanguage();

  const changeLanguage = useCallback(
    /**
     * @function
     * @param {React.ChangeEvent<any>} e - Alternatively, use 'React.MouseEvent'.
     * @param {import('../types.js').Locale} language
     * @returns {void}
     */
    (e, language) => {
      e.stopPropagation();
      setLanguage(language);
    },
    []
  );

  return (
    <div
      id="language"
      css={[tw`flex flex-row justify-center items-center gap-2`, styles]}
    >
      <img
        src="assets/flag_us.png"
        css={iconStyles}
        onClick={e => changeLanguage(e, 'en')}
      />

      <img
        src="assets/flag_jp.png"
        css={iconStyles}
        onClick={e => changeLanguage(e, 'ja')}
      />
    </div>
  );
};
