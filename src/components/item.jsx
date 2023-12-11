/**
 * @module ditch/components/item
 */

import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

/**
 * @typedef ItemProps
 * @type {Object}
 * @property {import('../data.js').Item} item
 * @property {import('@emotion/serialize').CSSInterpolation} [styles]
 */

/**
 * @public
 * @type {React.FC<ItemProps>}
 * @constructs module:ditch/components/item.Item
 * @returns {React.ReactElement<any>}
 */
export const Item = ({ item, styles }) => {
  return (
    <Link
      key={item?.id}
      to={`/items/${item?.id}`}
      css={[tw`flex flex-col justify-start items-center`, styles]}
    >
      <img src="assets/art_seagull.jpg" />
    </Link>
  );
};
