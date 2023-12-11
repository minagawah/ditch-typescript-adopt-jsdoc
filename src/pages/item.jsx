/**
 * @module ditch/pages/item.Item
 */

import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import tw, { css } from 'twin.macro';

import { get_item_by_id } from '../data';
import { BackIcon } from '../components/icons/back';

/** @typedef {import("../data.js").Item} Item */

const wrapperStyle = css`
  ${tw`w-full flex flex-col justify-start items-center`}
`;

const wrapperInnerStyle = css`
  ${tw`flex flex-col justify-start items-start font-semibold text-xl`}
  @media (max-width: 767px) {
    img {
      width: 75%;
      max-width: 771px;
    }
  }
  @media (min-width: 768px) {
    img {
      width: auto;
      max-height: 435px;
    }
  }
`;

/**
 * @typedef ItemLoaderFunctionArgs
 * @type {Object}
 * @property {Object} params;
 * @property {string} params.itemId
 */

/**
 * @public
 * @type {import("react-router-dom").LoaderFunction<ItemLoaderFunctionArgs>}
 * @name module:ditch/pages/item~loader
 * @returns {Promise.<{ item: Item }>}
 */
export async function loader(args) {
  const { params: inner } = args || {};
  const res =
    /** @type {import("../lib/Result.js").Result<Item, Error>} */
    get_item_by_id(inner.itemId);
  return { item: res.unwrap_or(null) };
}

/**
 * @typedef ItemLoadedData
 * @type {Object}
 * @property {Item} [item] - initially empty
 */

/**
 * @public
 * @type {React.FC}
 * @constructs module:ditch/pages/item.Item
 * @returns {React.ReactElement<any>}
 */
export const Item = () => {
  const { i18n } = useTranslation();
  const { item } = /** @type {ItemLoadedData} */ (useLoaderData());
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (item?.title && i18n?.language) {
      setTitle(item.title[i18n.language]);
    }
  }, [item?.title, i18n?.language]);

  return (
    <div
      id="container"
      tw="w-full box-border px-2 pt-8 pb-8 flex flex-col justify-start items-center"
    >
      <Link key={item?.id} to="/" tw="w-full">
        <BackIcon styles={{ size: '30px', color: '#808080' }} />
      </Link>

      <div id="wrapper" css={wrapperStyle}>
        <Link id="wrapper-inner" key={item?.id} to="/" css={wrapperInnerStyle}>
          <div tw="mt-2">{title}</div>
          <img src="assets/art_seagull.jpg" />
        </Link>
      </div>
    </div>
  );
};
