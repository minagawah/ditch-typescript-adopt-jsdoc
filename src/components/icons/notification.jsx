/**
 * @module ditch/components/icons/notification
 */

import React from 'react';

import { generic_icon_props_handler } from '../../lib/utils';
import Icon from '../../assets/notify.svg';

/**
 * @public
 * @type {React.FC<import('../../types.js').GenericIconProps>}
 * @constructs module:ditch/components/icons/notification.NotificationIcon
 * @returns {React.ReactElement<any>}
 */
export const NotificationIcon = props => (
  <Icon {...generic_icon_props_handler(props)} />
);
