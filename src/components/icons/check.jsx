/**
 * @module ditch/components/icons/check
 */

import React from 'react';

import { generic_icon_props_handler } from '../../lib/utils';
import Icon from '../../assets/check.svg';

/**
 * @public
 * @type {React.FC<import('../../types.js').GenericIconProps>}
 * @constructs module:ditch/components/icons/check.CheckIcon
 * @returns {React.ReactElement<any>}
 */
export const CheckIcon = props => (
  <Icon {...generic_icon_props_handler(props)} />
);
