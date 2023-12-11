/**
 * @module ditch/components/icons/flag_jp
 */

import React from 'react';
import Icon from '../../assets/flag_jp.svg';

/**
 * @typedef IconProps
 * @type {Object}
 * @property {import('@emotion/serialize').CSSInterpolation} [styles]
 */

/**
 * @public
 * @type {React.FC<IconProps>}
 * @constructs module:ditch/components/icons/flag_jp.FlagJpIcon
 * @returns {React.ReactElement<any>}
 */
export const FlagJpIcon = ({ styles, ...props }) => {
  props = {
    ...props,
    css: styles,
  };

  return <Icon {...props} />;
};
