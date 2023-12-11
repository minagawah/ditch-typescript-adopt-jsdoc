// @ts-nocheck
export const APP_NAME = 'ditch-typescript-adopt-jsdoc';

export const DOCUMENT_ROOT = NODE_ENV === 'production' ? '/mina/ditch/' : '/';

// export const NAV_HEIGHT = 52;
// export const HEADER_HEIGHT_PC = 64;
// export const HEADER_MARGIN_PC = 36;
// export const HEADER_HEIGHT_MOBILE = 64;
// export const HEADER_MARGIN_MOBILE = 36;

export const DATETIME_FORMAT = {
  year: 'YYYY',
  month: 'M',
  day: 'D',
  hour: 'H',
  minute: 'm',
  second: 's',
};

export const COOKIE_NAME_BASE = 'ditch';

export const DURATION_MINUTE = 60; // 1 minute
export const DURATION_HOUR = DURATION_MINUTE * 60; // 1 hour
export const DURATION_DAY = DURATION_HOUR * 24; // 1 day
export const DURATION_DAYS_30 = DURATION_DAY * 30; // 30 days
export const DURATION_DAYS_60 = DURATION_DAY * 60; // 60 days
export const DURATION_YEAR = DURATION_DAY * 365; // 1 year
export const DURATION_YEARS_100 = DURATION_YEAR * 100; // 100 years

export const CACHE_KEY = APP_NAME;
export const CACHE_VERSION = 'v1';
export const CACHE_OFFLINE = `${DOCUMENT_ROOT}offline.html`;

export const CACHE_NAMES = [
  'google-font',
  'google-font-styles',
  'pages',
  'assets',
  'documents',
  'images',
].reduce((acc, key) => {
  acc[key] = `${CACHE_KEY}-${key}-${CACHE_VERSION}`;
  return acc;
}, {});

// export const Z_INDEX_FENGSHUI_PIES = 100;
export const Z_INDEX_FENGSHUI_ER_SHI_SI = 90;
export const Z_INDEX_FENGSHUI_ER_SHI_SI_INFO = 100;
export const Z_INDEX_FENGSHUI_BAGUA = 110;
export const Z_INDEX_FENGSHUI_BAGUA_INFO = 120;
export const Z_INDEX_FENGSHUI_CIRCLE = 130;
export const Z_INDEX_FENGSHUI_NORTH = 140;
export const Z_INDEX_FENGSHUI_JIU_XING_BOXES = 150;
export const Z_INDEX_FENGSHUI_JIU_XING = 160;
export const Z_INDEX_COVER = 400;
export const Z_INDEX_MENU = 500;
export const Z_INDEX_ALERT = 600;

export const BAZI_TYPE_KEYS = ['year', 'month', 'hour', 'day'];
export const GANZHI_TYPE_KEYS = ['stem', 'branch'];

export const RADIAN_15 = Math.PI / 12; // 15 degrees
export const RADIAN_30 = Math.PI / 6; // 30 degrees
export const RADIAN_45 = Math.PI / 4; // 45 degrees
export const RADIAN_90 = Math.PI / 2; // 90 degrees
