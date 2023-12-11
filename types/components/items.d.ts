export const Items: React.FC<ItemsProps>;
export type CSSInterpolation = import('@emotion/serialize').CSSInterpolation;
export type ItemData = import("../data.js").Item;
export type ItemsStyles = {
    list?: CSSInterpolation;
    item?: CSSInterpolation;
};
export type ItemsProps = {
    items?: Array<ItemData>;
    styles?: ItemsStyles;
};
import React from 'react';
