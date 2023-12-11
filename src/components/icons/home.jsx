/**
 * @module ditch/components/icons/home
 */

import React from 'react';

import { generic_icon_props_handler } from '../../lib/utils';
import Icon from '../../assets/home.svg';

/**
 * @public
 * @type {React.FC<import('../../types.js').GenericIconProps>}
 * @constructs module:ditch/components/icons/home.HomeIcon
 * @returns {React.ReactElement<any>}
 */
export const HomeIcon = props => (
  <Icon {...generic_icon_props_handler(props)} />
);
