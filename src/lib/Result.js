/**
 * @module ditch/lib/Result
 */

/**
 * For the given value, sets it as `Ok` value, and sets the monad `Ok`.
 * @template T,E
 * @typedef {function(T): Entity<T,E>} OkFunction
 */

/**
 * For the given value, sets it as `Err` value, and sets the monad `Err`.
 * @template T,E
 * @typedef {function(E): Entity<T,E>} ErrFunction
 */

/**
 * Checks if the monad is `Err`.
 * @typedef {function(): boolean} IsErrFunction
 */

/**
 * Checks if the monad is `Ok`.
 * @typedef {function(): boolean} IsOkFunction
 */

/**
 * Returns the `Ok` value only when the monad is `Ok`.
 * Otherwise, throws an error.
 * @template T,E
 * @typedef {function(): T | null} UnwrapFunction
 * @throws {E | Error}
 */

/**
 * Returns the `Ok` value only when the monad is `Ok`.
 * Otherwise, returns what is given as an alternative.
 * @template T,U
 * @typedef {function(U): T | U} UnwrapOrFunction
 */

/**
 * Regardless of whether the monad being `Ok` or `Err`,
 * returns the internally held `Err`.
 * @template E
 * @typedef {function(): E | null} UnwrapErrFunction
 */

/**
 * Checks if the monad is `Err`. If it was, throws the `Err`.
 * @template E
 * @typedef {function(): void} ThrowIfErrFunction
 * @throw {E}
 */

/**
 * Returns the `Ok` value only when the monad is `Ok`.
 * Otherwise, throws the internally held `Err`.
 * @template T,E
 * @typedef {function(): T} UnwrapOrThrowFunction
 * @throw {E}
 */

/**
 * `Entity` is the actual data holder for "Result" monad.
 * Create `Entity` using `Result` factory.
 * @template T,E
 * @typedef Entity
 * @type {Object}
 * @property {OkFunction<T,E>} ok
 * @property {ErrFunction<T,E>} err
 * @property {IsErrFunction} is_err
 * @property {IsOkFunction} is_ok
 * @property {UnwrapFunction<T,E>} unwrap
 * @property {UnwrapOrFunction<T, *>} unwrap_or
 * @property {UnwrapErrFunction<E>} unwrap_err
 * @property {ThrowIfErrFunction<E>} throw_if_err
 * @property {UnwrapOrThrowFunction<T,E>} unwrap_or_throw
 * @see {@link module:ditch/lib/Result~Result}
 */

/**
 * A factory function to create a _Rust_-like "Result" monad.
 * It will return `Entity` which is the actual data holder for the monad.
 * ```js
 * // Creating "Result" monad
 * const result = Result();
 *
 * // Use `ok()` to set it to `Ok`
 * result.ok('hello');
 *
 * // Use `unwrap()` to fetch the internally held `OK` value.
 * console.log(result.unwrap());
 * --> "hello"
 *
 * // Use `err()` to set it to `Err`.
 * result.err(new Error('Something went wrong'));
 *
 * // Give a value to `unwrap_or()` so that it will become the fallback.
 * console.log(result.unwrap_or('bye'));
 * --> "bye"
 *
 * // We have some other fancy methods as well.
 * try {
 *   result.unwrap_or_throw();
 * } catch(err) {
 *   console.log(err); --> "Something went wrong"
 * }
 * ```
 * There are 2 ways to write JSDoc comments:
 * ```js
 * // One way is to set `Entity` for the returned result.
 * /** ＠type {module:xxx/Result~Entity<string, Error>} *\\/
 * const result = Result();
 *
 * // Another way is to cast `Result` type to `Result` function.
 * const result = (
 *   /** ＠type {module:xxx/Result~Result<string, Error>} *\\/
 *   Result
 * )();
 * ```
 * Note:
 * - `＠` above are not regular ascii characters, but symbols for TSC to ignore.
 * - `*\\/` above are conventions for JSDoc to ignore.
 * @function Result
 * @template T,E
 * @param {T} [value]
 * @returns {Entity<T,E>}
 * @see {@link module:ditch/lib/Result~Entity}
 */
export const Result = value => {
  /** @type {Entity<T,E>} */
  const self = {};

  /**
   * @private
   * @type {boolean}
   */
  let _ok = false;

  /**
   * @private
   * @type {E | null}
   */
  let _err = null;

  /**
   * @private
   * @type {T | null}
   */
  let _value = null;

  /** @type {OkFunction<T,E>} */
  self.ok = value => {
    _ok = true;
    _err = null;
    _value = value;
    return self;
  };

  /** @type {ErrFunction<T,E>} */
  self.err = err => {
    _ok = false;
    _err = err;
    _value = null;
    return self;
  };

  /** @type {IsErrFunction} */
  self.is_err = () => !_ok;

  /** @type {IsOkFunction} */
  self.is_ok = () => _ok;

  /** @type {UnwrapFunction<T,E>} */
  self.unwrap = () => {
    if (!_ok) throw _err || new Error('It has an error');
    return _value;
  };

  /** @type {UnwrapOrFunction<T, *>} */
  self.unwrap_or = given => (_ok ? _value : given);

  /** @type {UnwrapErrFunction<E>} */
  self.unwrap_err = () => _err;

  /** @type {ThrowIfErrFunction<E>} */
  self.throw_if_err = () => {
    if (!_ok) throw self.unwrap_err();
  };

  /** @type {UnwrapOrThrowFunction<T,E>} */
  self.unwrap_or_throw = () => {
    self.throw_if_err();
    return self.unwrap();
  };

  if (typeof value !== 'undefined') {
    self.ok(value);
  }

  return self;
};
