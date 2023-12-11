/**
 * @module ditch/components/items
 */

import React from 'react';
import tw from 'twin.macro';

import { Item } from './item';

/** @typedef {import('@emotion/serialize').CSSInterpolation} CSSInterpolation */
/** @typedef {import("../data.js").Item} ItemData */

/** @type {CSSInterpolation} */
const wrapperStyle = tw`
  w-full flex flex-wrap flex-row justify-start items-start gap-2
`;

/**
 * @typedef ItemsStyles
 * @type {Object}
 * @property {CSSInterpolation} [list] - Styles for 'components/items'
 * @property {CSSInterpolation} [item] - Styles for 'components/item'
 */

/**
 * @typedef ItemsProps
 * @type {Object}
 * @property {Array.<ItemData>} [items]
 * @property {ItemsStyles} [styles={}]
 */

/**
 * @public
 * @type {React.FC<ItemsProps>}
 * @constructs module:ditch/components/items.Items
 * @returns {React.ReactElement<any>}
 */
export const Items = ({ items, styles = {} }) => {
  return (
    <div css={[wrapperStyle, styles.list]}>
      {items?.length ? (
        <>
          {items.map(item => (
            <Item key={item?.id} item={item} styles={styles.item} />
          ))}
        </>
      ) : null}
    </div>
  );
};
