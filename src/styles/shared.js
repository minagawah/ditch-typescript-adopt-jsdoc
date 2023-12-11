// @ts-nocheck
import tw, { css } from 'twin.macro';

import { TW_CUSTOM_COLORS } from '../tw.colors';

export { TW_CUSTOM_COLORS };

export const buttonStyle = tw`block px-5 py-2 rounded-lg cursor-pointer border-0 drop-shadow-2xl bg-primary text-center text-lg font-bold text-white hover:text-white visited:text-white focus:outline-none focus:shadow`;

// border border-solid border-gray-300
export const buttonSecondaryStyle = css`
  ${buttonStyle}
  ${tw`bg-secondary text-gray-600 hover:text-gray-600 visited:text-gray-600`}
`;

export const buttonDangerStyle = css`
  ${buttonStyle}
  ${tw`bg-danger`}
`;

export const flagStyle = css`
  ${tw`border border-solid border-gray-200`}
  @media (max-width: 767px) {
    max-width: 32px;
  }
  @media (min-width: 768px) {
    max-width: 48px;
  }
  width: auto;
  height: auto;
`;

export const boldLinkStyle = css`
  ${tw`font-bold text-lg underline text-gray-600 link:text-gray-600 hover:text-gray-600 visited:text-gray-600`}
`;
export const inputStyle = tw`px-2 py-2 rounded border border-solid border-gray-300 shadow-inner drop-shadow-2xl focus:outline-none focus:shadow`;

// div.1: control > ValueContainer
// div.1: control > ValueContainer > Input > div > input
// div.2: menu > MenuList > option
export const selectStyle = css`
  font-weight: 900;
  & div:nth-of-type(1) > div:nth-of-type(1) {
    justify-content: center;
    & input {
      font-weight: 900;
    }
  }
  & div:nth-of-type(2) > div:nth-of-type(1) > div {
    text-align: center;
  }
`;
