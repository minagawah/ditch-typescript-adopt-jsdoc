/**
 * @module ditch/pages/home
 */

import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import tw, { css } from 'twin.macro';

import { get_items_all } from '../data';
import { useScreenSize } from '../contexts/ScreenSize';
import { Items } from '../components/items';

/** @typedef {import('../data.js').Item} Item */

/** @type {import('@emotion/serialize').CSSInterpolation} */
const containerStyle = css`
  ${tw`w-full box-border px-2 pt-8 pb-8 flex flex-col justify-start items-center bg-gray-100`}
  height: auto;
  min-height: 100vh;
`;

const MAX_ITEM_WIDTH_PC = '20vw';
const MAX_ITEM_WIDTH_MOBILE = '30vw';

/** @type {import('../components/items.jsx').ItemsStyles} */
const defaultItemStyles = {
  list: undefined,
  item: null,
};

/**
 * @public
 * @type {import('react-router-dom').LoaderFunction}
 * @name module:ditch/pages/home~loader
 * @returns {Promise.<{ items: Array.<Item> }>}
 */
export async function loader() {
  const res =
    /** @type {import('../lib/Result.js').Result<Array.<Item>, Error>} */
    await get_items_all();
  return { items: res.unwrap_or([]) };
}

/**
 * @typedef ItemsAllLoadedData
 * @type {Object}
 * @property {Array.<Item>} [items] - initially empty
 */

/**
 * @public
 * @type {React.FC}
 * @constructs module:ditch/pages/home.Home
 * @returns {React.ReactElement<any>}
 */
export const Home = () => {
  const [itemStyles, setItemStyles] = useState(defaultItemStyles);
  const { items } = /** @type {ItemsAllLoadedData} */ (useLoaderData());
  const screenSize = useScreenSize();
  useEffect(() => {
    if (typeof screenSize?.isMobile === 'boolean') {
      let max = '1px';

      if (screenSize.isMobile) {
        max = MAX_ITEM_WIDTH_MOBILE;
      } else {
        max = MAX_ITEM_WIDTH_PC;
      }

      setItemStyles({
        ...defaultItemStyles,
        item: css`
          & img {
            ${tw`object-cover`}
            max-width: ${max};
            vertical-align: top;
          }
        `,
      });
    }
  }, [screenSize?.isMobile]);

  return (
    <div id="container" css={containerStyle}>
      <Items items={items} styles={itemStyles} />
    </div>
  );
};
