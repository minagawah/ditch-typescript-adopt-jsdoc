/**
 * <NestedProviders> is a tool to make codes easy to read.
 * It takes an array of providers, and simply wrap one another.
 * For the last one comes last, meaning, the last provider
 * in the array will be the one to wrap the preceedings.
 *
 * @module ditch/contexts/NestedProviders
 */
import React from 'react';

/**
 * @typedef GivenProviderSpec
 * @type {Object}
 * @property {React.FC<any>} provider
 * @property {any} [props]
 */

/**
 * @typedef NestedProvidersProps
 * @type {Object}
 * @property {Array<GivenProviderSpec>} [components=[]]
 * @property {React.ReactElement<any>} children
 */

/**
 * @function
 * @type {React.FC<NestedProvidersProps>}
 * @constructs module:ditch/contexts/NestedProviders.NestedProviders
 * @returns {React.ReactElement<any>}
 */
export const NestedProviders = ({ components = [], children }) =>
  components.reduce(
    /**
     * @function
     * @param {React.ReactElement<any>} acc
     * @param {GivenProviderSpec} spec
     * @returns {React.ReactElement<any>}
     */
    (acc, spec) => {
      const { provider: Provider, props } = spec;
      return <Provider {...props}>{acc}</Provider>;
    },
    children
  );
