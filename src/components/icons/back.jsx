/**
 * @module ditch/components/icons/back
 */

import React from 'react';

import { generic_icon_props_handler } from '../../lib/utils';
import Icon from '../../assets/back.svg';

/**
 * @public
 * @type {React.FC<import('../../types.js').GenericIconProps>}
 * @constructs module:ditch/components/icons/back.BackIcon
 * @returns {React.ReactElement<any>}
 */
export const BackIcon = props => (
  <Icon {...generic_icon_props_handler(props)} />
);
