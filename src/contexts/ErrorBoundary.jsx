// @ts-nocheck
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import tw, { css } from 'twin.macro';

import { withErrors } from './Errors';

class ErrorBoundaryClass extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    // 'info' for the 2nd argument
    const { setError } = this.props;
    this.setState({ hasError: true });
    setError(error);
  }

  render() {
    if (this.state.hasError) {
      const { errors } = this.props;
      return (
        <div tw="p-2 bg-red-500 text-white w-full h-screen">
          {errors.length ? (
            <div>
              {errors.map((err, i) => {
                const msg = err?.error?.message || 'Unknown Error';
                return (
                  <h2 key={err.key}>
                    [{i}] {msg}
                  </h2>
                );
              })}
            </div>
          ) : (
            <h1>Unknown Error</h1>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export const ErrorBoundary = withErrors(ErrorBoundaryClass);

// ErrorBoundaryClass.propTypes = {
//   setError: PropTypes.function,
//   error: PropTypes.array,
//   children: PropTypes.object,
// };
