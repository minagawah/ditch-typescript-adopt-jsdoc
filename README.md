# ditch-typescript-adopt-jsdoc

**WIP:**  
**This repo is still in progress!!!**

## 1. Why am I not using TypeScript

I use TS at work, and it's been around 5 years.
But, for my private projects, I don't use TS.
Simply, for the time spent, I don't feel like getting much.
When I write in TS, I feel like I'm struggling with something which isn't supposed to be there.
I feel like I'm fighting with ghosts.
After 5 or 6 hours of such struggles, I always feel that I struggled with something that wasn't worth it.
For the time spent, I could have spent more time for something much worthy.

You would probably say "Here goes another TS hater..."

Well, consider this:

There's an interesting phenomenon I've been experiencing which puzzles even myself.  
I want you to also think *WHY* it happens.  
Here's how it goes.  

```
I love Rust. When I write programs in Rust,
it is much faster than otherwise writing in TS...
```

So, tell me. What would be the rational behind this?  
Actually, I've been thinking about it for quite a while, and I think I know why.

Types in Rust, when they are in the codes, they are what they are.
Types in TS, on the other hand, they are the *sugar coated* version of JS.
Although types in TS ensure JS codes to be type-safe, they don't necessarily have to represent actual data.
When we struggle in TS, 99.8% of a time, it is about finding ways for types to work. Or, I feel like I'm always *cheating* for the types to work. I feel like I'm putting efforts not for programs, but rather for TS itself. In a way, I am shadow boxing all the time...

So, now you know why I don't spend much time in TS. It is just not for me.
I don't have complaints over the fact that my companies or the team members keep on writing in TS.
Nor, do I have any intentions to persuade anyone for doing the same as I do.
It is just, I would rather choose Rust or plain old JS for my own projects.

I guess I will need to wait for the future JS to come up with its own *native typings* implementation,
Until then, I will continue with what I like to stick with...

## 2. About

A sample React app with a bunch of JSDoc comments which should allow us to generate `d.ts` files.

- Many JSDoc examples
- JSDoc notations for Crockford's factory pattern, especially, when we want generic types for them.
- Integration of Emotion + Tailwind (via twin.macro).

## 3. Instructions

All `*.d.ts` files will be emitted to [./types](./types) folder.

If you want your own custom types, you have 2 folders:
- For JSDoc defined types should be in [./src/types.js](./src/types.js).
- For additional TS types should be inside [./src/d.ts](./src/d.ts) folder.

```
# Running the sample app
npm install
npm start

# Generate '*.d.ts' files
npm type:generate

# Generate JSDoc documents
npm jsdoc
```

## 4. Example

Let's say, you want:

1. JSDoc comments for _Crockford's factory pattern_,
1. which should allow TSC to interpret and geneate `*.d.ts` files,
1. and allow to assign parametric types to the presented types (e.g. `Result<number>`).

You may find examples in:

- [src/lib/Result.js](src/lib/Result.js)
- [src/data.js](src/data.js)

However, since they are very long, you may find the shorter version bellow:

`/src/lib/Result.js`

```js
/**
 * @module xxx/Result
 */

/**
 * @template T
 * @typedef {function(T): void} Ok
 */

/**
 * @template T
 * @typedef {function(): T | null} Unwrap
 */

/**
 * @template T
 * @typedef Entity
 * @type {Object}
 * @property {Ok<T>} ok
 * @property {Unwrap<T>} unwrap
 */

/**
 * @template T
 * @name Result
 * @returns {Entity<T>}
 */
export const Result = value => {
  const self = {};

  let _value = null;

  /** @type {Ok<T>} */
  self.ok = value => {
    _value = value;
  };

  /** @type {Unwrap<T>} */
  self.unwrap = () => _value;

  return self;
};
```

and then there are 2 ways to use these types:

`/src/data.js`

```js
// One way is to set `Entity` for the returned result.
/** @type {module:xxx/Result~Entity<string>} */
const result = Result('hello');

// Or, you can cast `Result` type to `Result` function.
const result = (
    /** @type {module:xxx/Result~Result<string>} */
    Result
  )('hello');
```

This is what you get:

`/types/lib/Result.d.ts`

```typescript
export function Result<T>(value?: T): Entity<T>;
export type Ok<T> = (arg0: T) => void;
export type Unwrap<T> = () => T | null;
export type Entity<T> = {
  ok: Ok<T>;
  unwrap: Unwrap<T>;
};
```

## 5. Installed NPM Packages

### React

- react
- react-dom
- react-router
- react-router-dom
- history
- i18next
- i18next-browser-languagedetector
- react-i18next
- react-responsive-carousel

### Babel

- core-js
- @babel/cli
- @babel/core
- @babel/preset-env
- @babel/preset-react
- babel-loader
- babel-plugin-macros

### Webpack

- webpack
- webpack-cli
- webpack-dev-server
- file-loader
- css-loader
- style-loader
- postcss-loader
- @svgr/webpack
- raw-loader
- html-webpack-plugin
- copy-webpack-plugin
- mini-css-extract-plugin
- clean-webpack-plugin
- license-webpack-plugin

### ESLint & Prettier

- prettier
- eslint
- eslint-config-prettier
  - Filters out all the ESLint rules which conflict with Prettier.
- eslint-plugin-prettier
  - Orchestrates ESLint and Prettier together.
- eslint-plugin-react

### Emotion & Tailwind

- autoprefixer
- @emotion/css
- @emotion/react
- @emotion/styled
- @emotion/babel-plugin-jsx-pragmatic
- babel-plugin-macros
- babel-plugin-preval (allows `module.exports` in ES6)
- tailwindcss
- twin.macro

### JSDoc

- jsdoc
- jsdoc-tsimport-plugin
- jsdoc-to-markdown
- ~~tsd-jsdoc~~
- typescript
- @types/react
- @types/react-dom
- @types/sanitize-html

### Others

- js-cookie
- ramda
- moment
- sanitize-html
- rimraf
- nodemon

```shell
npm install --save core-js @emotion/css \
  @emotion/react @emotion/styled \
  react react-dom react-router react-router-dom history \
  i18next i18next-browser-languagedetector \
  react-i18next react-responsive-carousel \
  ramda moment sanitize-html js-cookie;

npm install --save-dev @babel/cli @babel/core \
  @babel/preset-env @babel/preset-react \
  babel-loader babel-plugin-macros babel-plugin-preval \
  webpack webpack-cli webpack-dev-server \
  file-loader css-loader style-loader postcss-loader \
  @svgr/webpack raw-loader \
  html-webpack-plugin copy-webpack-plugin \
  mini-css-extract-plugin \
  clean-webpack-plugin license-webpack-plugin \
  prettier eslint \
  eslint-config-prettier eslint-plugin-prettier eslint-plugin-react \
  autoprefixer @emotion/babel-plugin-jsx-pragmatic \
  babel-plugin-macros tailwindcss twin.macro \
  jsdoc jsdoc-tsimport-plugin jsdoc-to-markdown \
  typescript @types/react @types/react @types/sanitize-html \
  rimraf nodemon;
```

``

## 6. License

Dual-licensed under either of the followings.  
Choose at your option.

- The UNLICENSE ([LICENSE.UNLICENSE](LICENSE.UNLICENSE))
- MIT license ([LICENSE.MIT](LICENSE.MIT))
