// @ts-nocheck
import React, { useContext, createContext, useState } from 'react';

// ----------------------------------------------------------------
// DebugContext
// ----------------------------------------------------------------

const DebugContext = createContext({
  debug: null,
  setDebug: () => {},
});

// ----------------------------------------------------------------
// DebugProvider
// ----------------------------------------------------------------

export const DebugProvider = props => {
  const [debug, setDebug] = useState(null);

  // const _proxy = useCallback(d => {
  //   setDebug(d);
  // }, []);

  return <DebugContext.Provider value={{ debug, setDebug }} {...props} />;
};

// ----------------------------------------------------------------
// useDebug
// ----------------------------------------------------------------

export const useDebug = () => useContext(DebugContext);
