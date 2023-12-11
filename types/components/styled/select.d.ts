export const StyledSelect: React.FC<StyledSelectProps>;
export type CSSInterpolation = import('@emotion/serialize').CSSInterpolation;
export type StyledSelectProps = {
    to: Object;
    styles?: CSSInterpolation;
    innerStyles?: CSSInterpolation;
    children?: React.ReactElement<any>;
};
import React from 'react';
