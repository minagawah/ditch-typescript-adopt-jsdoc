export const Item: React.FC<ItemProps>;
export type ItemProps = {
    item: import('../data.js').Item;
    styles?: import('@emotion/serialize').CSSInterpolation;
};
import React from 'react';
