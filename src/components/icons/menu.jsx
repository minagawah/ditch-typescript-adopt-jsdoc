/**
 * @module ditch/components/icons/menu
 */

import React from 'react';

import { generic_icon_props_handler } from '../../lib/utils';
import Icon from '../../assets/menu.svg';

/**
 * @public
 * @type {React.FC<import('../../types.js').GenericIconProps>}
 * @constructs module:ditch/components/icons/menu.MenuIcon
 * @returns {React.ReactElement<any>}
 */
export const MenuIcon = props => (
  <Icon {...generic_icon_props_handler(props)} />
);
