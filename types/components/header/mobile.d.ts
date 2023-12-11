export const HEIGHT: number;
export const MARGIN_SIZE: 36;
export const HeaderMobile: React.FC<HeaderMobileProps>;
export type CSSInterpolation = import('@emotion/serialize').CSSInterpolation;
export type HeaderMobileProps = {
    page?: string;
    styles?: CSSInterpolation;
    children?: React.ReactElement<any>;
};
import React from 'react';
