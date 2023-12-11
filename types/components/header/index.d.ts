export const Header: React.FC<HeaderProps>;
export type CSSInterpolation = import('@emotion/serialize').CSSInterpolation;
export type HeaderProps = {
    page?: string;
    styles?: CSSInterpolation;
    children?: React.ReactElement<any>;
};
import React from 'react';
