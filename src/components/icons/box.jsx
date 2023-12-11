/**
 * @module ditch/components/icons/box
 */

import React from 'react';

import { generic_icon_props_handler } from '../../lib/utils';
import Icon from '../../assets/box.svg';

/**
 * @public
 * @type {React.FC<import('../../types.js').GenericIconProps>}
 * @constructs module:ditch/components/icons/box.BoxIcon
 * @returns {React.ReactElement<any>}
 */
export const BoxIcon = props => <Icon {...generic_icon_props_handler(props)} />;
