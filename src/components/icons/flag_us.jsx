/**
 * @module ditch/components/icons/flag_us
 */

import React from 'react';
import Icon from '../../assets/flag_us.svg';

/**
 * @typedef IconProps
 * @type {Object}
 * @property {import('@emotion/serialize').CSSInterpolation} [styles]
 */

/**
 * @public
 * @type {React.FC<IconProps>}
 * @constructs module:ditch/components/icons/flag_us.FlagUsIcon
 * @returns {React.ReactElement<any>}
 */
export const FlagUsIcon = ({ styles, ...props }) => {
  props = {
    ...props,
    css: styles,
  };

  return <Icon {...props} />;
};
