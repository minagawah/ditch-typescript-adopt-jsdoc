// @ts-nocheck
/**
 * @module ditch/components/styled/select
 */

import React from 'react';
// import Select from 'react-select';
import styled from '@emotion/styled';

/** @typedef {import('@emotion/serialize').CSSInterpolation} CSSInterpolation */

const Select = () => {};

/**
 * @typedef StyledSelectProps
 * @type {Object}
 * @property {Object} to
 * @property {CSSInterpolation} [styles]
 * @property {CSSInterpolation} [innerStyles]
 * @property {React.ReactElement<any>} [children]
 */

/* eslint-disable react/display-name */
/**
 * @public
 * @type {React.FC<StyledSelectProps>}
 * @constructs module:ditch/components/styled/link.StyledSelect
 * @returns {React.ReactElement<any>}
 */
export const StyledSelect = React.forwardRef(
  ({ styles: outerStyles, innerStyles, ...props }, ref) => {
    const WrappedSelect = styled(Select)(outerStyles);
    props = {
      ...props,
      styles: innerStyles,
    };
    return <WrappedSelect ref={ref} {...props} />;
  }
);
/* eslint-enable react/display-name */
