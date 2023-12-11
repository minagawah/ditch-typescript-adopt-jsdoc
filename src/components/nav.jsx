/**
 * @module ditch/components/nav
 */

import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import tw, { css } from 'twin.macro';

import { HomeIcon } from './icons/home';
import { NotificationIcon } from './icons/notification';
import { BoxIcon } from './icons/box';
import { ProfileIcon } from './icons/profile';
import { int } from '../lib/utils';

export const HEIGHT = 52;

const ICON_COLOR = '#202020';

const iconWrapperSytle = css`
  ${tw`flex flex-col justify-center items-center`}
  & .icon-text {
    ${tw`flex flex-col justify-center items-center text-xs`}
  }
`;

/**
 * @public
 * @type {React.FC<{ styles: import('@emotion/serialize').CSSInterpolation }>}
 * @constructs module:ditch/components/nav.Nav
 * @returns {React.ReactElement<any>}
 */
export const Nav = ({ styles }) => {
  const { t } = useTranslation();
  const [iconSize, setIconSize] = useState('0px');
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      const { offsetWidth: width } = ref.current;
      let limit = width / 4;
      limit = limit < HEIGHT ? limit : HEIGHT;
      const size = int(limit * 0.5);
      console.log('[components/nav] size:', size);
      setIconSize(`${size}px`);
    }
  }, [ref]);

  useEffect(() => {
    if (styles) {
      console.log('[components/nav] styles:', styles);
    }
  }, [styles]);

  return (
    <div
      id="nav"
      ref={ref}
      css={[
        tw`w-full text-gray-800`,
        css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: 1fr;
        `,
        styles,
      ]}
    >
      <div className="icon-wrapper" css={iconWrapperSytle}>
        <HomeIcon styles={{ size: iconSize, color: ICON_COLOR }} />
        <div className="icon-text">{t('nav.home')}</div>
      </div>

      <div css={iconWrapperSytle}>
        <NotificationIcon styles={{ size: iconSize, color: ICON_COLOR }} />
        <div className="icon-text">{t('nav.notification')}</div>
      </div>

      <div css={iconWrapperSytle}>
        <BoxIcon styles={{ size: iconSize, color: ICON_COLOR }} />
        <div className="icon-text">{t('nav.publish')}</div>
      </div>

      <div css={iconWrapperSytle}>
        <ProfileIcon styles={{ size: iconSize, color: ICON_COLOR }} />
        <div className="icon-text">{t('nav.mypage')}</div>
      </div>
    </div>
  );
};
