export const HEIGHT: 120;
export const MARGIN_SIZE: 36;
export const HeaderPc: React.FC<HeaderPcProps>;
export type CSSInterpolation = import('@emotion/serialize').CSSInterpolation;
export type HeaderPcProps = {
    page?: string;
    styles?: CSSInterpolation;
    children?: React.ReactElement<any>;
};
import React from 'react';
