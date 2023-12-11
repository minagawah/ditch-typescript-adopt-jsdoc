// @ts-nocheck
import React, { useContext, createContext, useState, useCallback } from 'react';

import { gen_code_4 } from '../lib/utils';

const MAX_ERRORS = 15;

const ErrorsContext = createContext({
  errors: [],
  setError: () => {},
});

export const ErrorsProvider = props => {
  const [errors, setError] = useState([]);

  const proxy = useCallback(error => {
    setError(prev => {
      const size = prev.length;
      const arr = [...prev];
      if (size <= MAX_ERRORS) {
        arr.push({ key: gen_code_4(), error });
      }
      return arr;
    });
  }, []);

  return (
    <ErrorsContext.Provider value={{ errors, setError: proxy }} {...props} />
  );
};

export const useErrors = () => useContext(ErrorsContext);

/* eslint-disable react/display-name */
export const withErrors = Component => props => {
  const { errors, setError } = useErrors();
  return <Component {...props} errors={errors} setError={setError} />;
};
/* eslint-enable react/display-name */
