/**
 * @module ditch/components/styled/link
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

/**
 * @typedef StyledLinksProps
 * @type {Object}
 * @property {Object} to
 * @property {import('@emotion/serialize').CSSInterpolation} [styles={}]
 * @property {React.ReactElement<any>} [children]
 */

/**
 * @public
 * @type {React.FC<StyledLinksProps>}
 * @constructs module:ditch/components/styled/link.StyledLinks
 * @returns {React.ReactElement<any>}
 */
export const StyledLink = ({ children, to, styles }) => {
  const WrappedLink = styled(NavLink)(styles);
  return <WrappedLink to={to}>{children}</WrappedLink>;
};
