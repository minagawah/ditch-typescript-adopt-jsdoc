/**
 * For visibility of this `Menu` component,
 * it does not have its own state nor
 * a handler function. Instead, it depends
 * solely on that (the mentioned two above)
 * which passed down from the component
 * using this `Menu` component.
 *
 * @module ditch/components/menu
 */

import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import tw, { css } from 'twin.macro';

import { Z_INDEX_MENU } from '../constants';
import { gen_code_4 } from '../lib/utils';
import { useLanguage } from '../contexts/Language';
import { FlagJpIcon } from './icons/flag_jp';
import { FlagUsIcon } from './icons/flag_us';
import { MenuIcon } from './icons/menu';
import { flagStyle } from '../styles/shared';

const MENU_LIST = [
  { id: 'home', path: '/home' },
  { id: 'about', path: '/about' },
].map(
  item =>
    /** @type {{ id: string, path: string, key: string }} */ ({
      ...item,
      key: gen_code_4(),
    })
);

const menuWrapperStyle = css`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: ${Z_INDEX_MENU};
  ${tw`flex flex-col justify-start items-end`}
`;

const menuStyle = css`
  padding: 0.5rem 0.5rem;
  a,
  a:visited,
  a:hover,
  a:active {
    color: #ffffff;
  }
  color: #ffffff;
  font-size: 2rem;
  line-height: 3.2rem;
  ${tw`mt-2 flex flex-col justify-start items-end font-semibold`}
`;

const inactiveStyle = css`
  opacity: 0.35;
`;

const iconWrapperStyle = css`
  margin-top: 0.5rem;
  margin-right: 0.5rem;
`;

/**
 * @typedef MenuIconStyles
 * @type {Object}
 * @property {string} colorActive
 * @property {string} colorInactive
 */

/**
 * @typedef MenuStyles
 * @type {Object}
 * @property {MenuIconStyles} [icon]
 */

/**
 * @typedef MenuProps
 * @type {Object}
 * @property {boolean} [visible]
 * @property {function(boolean): void} [showMenu]
 * @property {string} [page]
 * @property {MenuStyles} [styles]
 * @property {string} [language]
 */

/**
 * @public
 * @type {React.FC<MenuProps>}
 * @constructs module:ditch/components/menu.Menu
 * @returns {React.ReactElement<any>}
 */
export const Menu = ({
  visible: is_menu_visible, // Notice the state is given.
  showMenu, // Notice the handler function is given.
  page,
  styles: given_styles = {},
}) => {
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();
  const [iconStyle, setIconStyle] = useState({});

  const { icon: given_icon_style } = given_styles;

  const changeLanguage = useCallback(
    /**
     * @function
     * @param {React.ChangeEvent<any>} e - Or, consider 'React.MouseEvent'.
     * @param {import('../types.js').Locale} language
     * @returns {void}
     */
    (e, language) => {
      e.stopPropagation();
      setLanguage(language);
    },
    []
  );

  const toggle = useCallback(
    /** @type {function(React.ChangeEvent<any>): void} */
    e => {
      e.stopPropagation();
      showMenu(is_menu_visible ? false : true);
    },
    [is_menu_visible]
  );

  useEffect(() => {
    const active = given_icon_style?.colorActive || '#ffffff';
    const inactive = given_icon_style?.colorInactive || '#b9b9b9';

    setIconStyle({
      size: '1.8rem',
      color: is_menu_visible ? active : inactive,
    });
  }, [is_menu_visible]);

  return (
    <div id="menu-wrapper" css={menuWrapperStyle}>
      <div id="icon-wrapper" css={iconWrapperStyle}>
        <div onClick={toggle} tw="bg-red-400 p-5">
          <MenuIcon styles={iconStyle} />
        </div>
      </div>

      {is_menu_visible && (
        <div id="menu" css={menuStyle}>
          {MENU_LIST.map(menu => {
            const name = t(`menu.${menu.id}`);
            return page === menu.id ? (
              <div key={menu.key} css={inactiveStyle}>
                {name}
              </div>
            ) : (
              <Link
                key={menu.key}
                to={menu.path}
                onClick={() => showMenu(false)}
              >
                {name}
              </Link>
            );
          })}

          <div tw="mt-4" onClick={e => changeLanguage(e, 'en')}>
            <FlagUsIcon styles={flagStyle} />
          </div>

          <div tw="mt-4" onClick={e => changeLanguage(e, 'ja')}>
            <FlagJpIcon styles={flagStyle} />
          </div>
        </div>
      )}
    </div>
  );
};
