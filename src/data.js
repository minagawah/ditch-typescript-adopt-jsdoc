/**
 * @module ditch/data
 */

import { Result } from './lib/Result';

/** @typedef {import("./types.js").Language} Language */

/**
 * @typedef Item
 * @property {string} id
 * @property {Language} title
 * @property {Language} description
 * @property {string} url
 */

/**
 * @typedef ItemsAllResult
 * @type {import("./lib/Result.js").Entity<Array.<Item>, Error>}
 */

/**
 * @typedef ItemResult
 * @type {import("./lib/Result.js").Entity<Item, Error>}
 */

/**
 * @public
 * @function
 * @name ditch/data.get_items_all
 * @returns {Promise.<ItemsAllResult>}
 */
export async function get_items_all() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        /** @type {import('./lib/Result.js').Result<Array.<Item>, Error>} */
        Result(_get_mock_items())
      );
    }, 500);
  });
}

/**
 * @public
 * @function
 * @name ditch/data.get_item_by_id
 * @param {string} id
 * @returns {ItemResult}
 */
export function get_item_by_id(id) {
  const items = _get_mock_items();
  let data;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      data = items[i];
      break;
    }
  }
  return /** @type {import('./lib/Result').Result<Item, Error>} */ Result(data);
}

/**
 * @private
 * @function
 * @name ditch/data._get_mock_items
 * @returns {Array.<Item>}
 */
function _get_mock_items() {
  return [
    {
      id: 'item-0001',
      title: {
        en: 'Pretty!',
        ja: 'かわいい！',
      },
      description: {
        en: 'It is very pretty.',
        ja: 'とても可愛いです',
      },
      url: 'assets/art_seagull.jpg',
    },
    {
      id: 'item-0002',
      title: {
        en: 'Evil Seagull',
        ja: '邪悪なカモメ',
      },
      description: {
        en: 'Would you like to have a very evil seagul?',
        ja: 'とても邪悪なカモメなのですが、いかがでしょうか...',
      },
      url: 'assets/art_seagull.jpg',
    },
    {
      id: 'item-0003',
      title: {
        en: 'Large Seagull',
        ja: '巨大なカモメ',
      },
      description: {
        en: 'Very huge!!',
        ja: 'めちゃ巨大！！',
      },
      url: 'assets/art_seagull.jpg',
    },
    {
      id: 'item-0004',
      title: {
        en: 'Seagull',
        ja: 'カモメ',
      },
      description: {
        en: 'Very nice seagul',
        ja: 'とてもステキなカモメです',
      },
      url: 'assets/art_seagull.jpg',
    },
  ];
}
