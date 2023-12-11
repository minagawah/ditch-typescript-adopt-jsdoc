/**
 * @module ditch/components/icons/profile
 */

import React from 'react';

import { generic_icon_props_handler } from '../../lib/utils';
import Icon from '../../assets/profile.svg';

/**
 * @public
 * @type {React.FC<import('../../types.js').GenericIconProps>}
 * @constructs module:ditch/components/icons/profile.ProfileIcon
 * @returns {React.ReactElement<any>}
 */
export const ProfileIcon = props => (
  <Icon {...generic_icon_props_handler(props)} />
);
