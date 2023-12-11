/**
 * @module ditch/components/icons/search
 */

import React from 'react';

import { generic_icon_props_handler } from '../../lib/utils';
import Icon from '../../assets/search.svg';

/**
 * @public
 * @type {React.FC<import('../../types.js').GenericIconProps>}
 * @constructs module:ditch/components/icons/search.SearchIcon
 * @returns {React.ReactElement<any>}
 */
export const SearchIcon = props => (
  <Icon {...generic_icon_props_handler(props)} />
);
