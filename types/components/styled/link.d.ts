export const StyledLink: React.FC<StyledLinksProps>;
export type StyledLinksProps = {
    to: Object;
    styles?: import('@emotion/serialize').CSSInterpolation;
    children?: React.ReactElement<any>;
};
import React from 'react';
