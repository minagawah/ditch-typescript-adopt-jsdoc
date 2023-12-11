// @ts-nocheck
/**
 * So, the ideas is to prevent from closing the cover
 * for the one just opened. Whenever a request comes
 * for opening the cover, it will generate a random ID,
 * and will push the ID to an array. When a request comes
 * (along with the original ID) for closing, it will check
 * if the ID being the last item in the array. If it was,
 * then will close the cover, and will empty the array.
 * Except, it will forciblly close for click events.
 * This is a preventive measure for when timers are set,
 * and the old one closing the new ones.
 *
 * Say, a component requested to open the cover.
 * A moment later, another requested the same, too.
 * Both having timers to close the cover.
 * The first one will attempt to close the cover.
 * Though, we still want the second one remain effective.
 * So, we are not closing yet. Only when the timer
 * for the second one fires, we would close the cover.
 */
import React, { useContext, createContext, useState, useCallback } from 'react';
import { css } from 'twin.macro';

import { Z_INDEX_COVER } from '../constants';
import { gen_code_12 } from '../lib/utils';

const coverStyle = css`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 500vh;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: ${Z_INDEX_COVER};
`;

// ----------------------------------------------------------------
// CoverContext
// ----------------------------------------------------------------

const CoverContext = createContext({
  visible: false,
  showCover: () => {},
  hideCover: () => {},
});

// ----------------------------------------------------------------
// CoverProvider
// ----------------------------------------------------------------

export const CoverProvider = props => {
  const [visible, setVisible] = useState(false);

  // `ids` does not have to be a ref because
  // there is only 1 provider exists in the app.
  const [ids, setIDs] = useState([]);

  const close_all = useCallback(() => {
    if (ids.length) {
      setIDs([]); // Remove all the IDs.
    }
    setVisible(false);
  }, [ids]);

  // For CLICK EVENT, closes all.
  const click = useCallback(
    e => {
      e.stopPropagation();
      close_all();
    },
    [close_all]
  );

  const showCover = useCallback(() => {
    const lock_id = gen_code_12();

    setVisible(true);

    // Generating a unique ID.
    setIDs([...(ids && ids.length ? ids.slice(0) : [])].push(lock_id));

    // It is the component using this provider
    // (which is `component/layout` for this app)
    // to remember the generated ID.
    return lock_id;
  }, [ids]);

  const hideCover = useCallback(
    lock_id => {
      // Only close the cover when the given `lock_id`
      // being the last item in the array.
      if (!ids.length || (lock_id && ids[ids.length - 1] === lock_id)) {
        close_all();
      }
    },
    [ids, close_all]
  );

  return (
    <>
      {visible && <div id="cover" css={coverStyle} onClick={click}></div>}
      <CoverContext.Provider
        value={{ visible, showCover, hideCover }}
        {...props}
      />
    </>
  );
};

// ----------------------------------------------------------------
// useCover
// ----------------------------------------------------------------

export const useCover = () => useContext(CoverContext);
