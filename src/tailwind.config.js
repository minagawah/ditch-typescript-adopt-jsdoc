// @preval
// @ts-nocheck

const { TW_CUSTOM_COLORS } = require('./tw.colors');

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        ...TW_CUSTOM_COLORS,
      },
    },
  },
  variants: {},
  plugins: [],
};
