/**
 * @module ditch/components/sep
 */

import React from 'react';
import sanitizeHtml from 'sanitize-html'; // eslint-disable-line no-unused-vars
import tw from 'twin.macro';

/**
 * @typedef SepProps
 * @type {Object}
 * @property {string} [sep]
 * @property {import('@emotion/serialize').CSSInterpolation} [styles]
 */

/**
 * @public
 * @type {React.FC<SepProps>}
 * @constructs module:ditch/components/sep.Sep
 * @returns {React.ReactElement<any>}
 */
export const Sep = ({ sep = '&gt;', styles: extra }) => {
  return (
    <span dangerouslySetInnerHTML={{ __html: sep }} css={[tw`mx-1`, extra]} />
  );
};
