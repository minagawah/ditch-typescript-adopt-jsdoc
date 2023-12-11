/**
 * @typedef {string} NODE_ENV
 * @typedef {string} PUBLIC_URL
 */

/**
 * @typedef Locale
 * @type {'en' | 'ja'}
 */

/**
 * @typedef Language
 * @type {Object.<string, string>}
 * @property {string} en
 * @property {string} ja
 */

/**
 * @typedef GenericIconStyles
 * @type {Object}
 * @property {string} [size='32px']
 * @property {string} [color='#333333']
 */

/**
 * @template {Object} [T=GenericIconStyles]
 * @typedef GenericIconProps
 * @type {Object}
 * @property {T} [styles]
 * @property {import('@emotion/serialize').CSSInterpolation} [css]
 * @property {React.ReactElement<any>} [children]
 */

export {};
