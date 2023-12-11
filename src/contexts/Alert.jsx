// @ts-nocheck
import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import tw, { css } from 'twin.macro';

import { noop } from '../lib/utils';
import { Z_INDEX_ALERT } from '../constants';
import { useCover } from './Cover';

import { buttonStyle } from '../styles/shared';

const DEFAULT_DURATION = 2500;

const DEFAULT_ALERT_WRAPPER_STYLE = css`
  ${tw`absolute flex flex-col justify-start items-center box-border px-4`}
  top: 30vh;
  left: 0px;
  width: 100%;
  z-index: ${Z_INDEX_ALERT};
`;

const DEFAULT_ALERT_STYLE = tw`px-7 py-5 rounded-md bg-gray-100 text-gray-600 text-2xl font-medium text-center`;

const DEFAULT_ALERT_BUTTON_STYLE = css`
  ${tw`mt-2 !inline-block`}
  ${buttonStyle}
`;

// ----------------------------------------------------------------
// AlertContext
// ----------------------------------------------------------------

/**
 * @typedef Alert.AlertContext
 * @property {Function} setAlert
 */
const AlertContext = createContext({
  setAlert: noop,
});

// ----------------------------------------------------------------
// AlertProvider
// ----------------------------------------------------------------

export const AlertProvider = props => {
  const { visible: is_cover_visible, showCover, hideCover } = useCover();

  const [alert, setAlert] = useState(null);

  // A ref for `alert` used later for cleanup (for existence check).
  // We want a clone copy because we manually empty the content
  // of `alert` when the cover is gone (which is handled by context/Cover).
  const copy = useRef(null);

  const timer_id = useRef(null);
  const cover_lock_id = useRef(null);

  const cleanup = useCallback(() => {
    if (copy.current) {
      setAlert(null);
      hideCover(cover_lock_id.current);
      copy.current = null;
      timer_id.current = null;
      cover_lock_id.current = null;
    }
  }, []);

  /**
   * Example:<pre>
   * ## Closes in 2.5 seconds, no buttons.
   * setAlert({
   *   message: 'You have 10 messages',
   * });
   *
   * ## Explicitly specifying 4 seconds for closing the alert.
   * setAlert({
   *   message: 'You look stunning',
   *   duration: 4000,
   * });
   *
   * ## Shows a button "OK", forbids auto-closing.
   * setAlert({
   *   message: 'You have just deleted the vital file',
   *   btn_text: 'OK',
   *   auto_close: false,
   * });
   * </pre>
   * @typedef Alert.AlertContext.setAlert
   * @function
   * @param {Object} [payload]
   * @param {Object} [payload.]
   */

  /**
   * @type {Alert.AlertContext.setAlert}
   */
  const _set_alert = useCallback(payload => {
    const {
      message,
      duration = DEFAULT_DURATION,
      styles = {},
      btn_text, // DEFAULT: no buttons
      auto_close = true, // DEFAULT: closes automatically
    } = payload;

    cover_lock_id.current = showCover();

    copy.current = {
      styles,
      top,
      message,
      btn_text,
      auto_close,
    };

    setAlert(copy.current);

    if (timer_id.current) {
      clearTimeout(timer_id.current);
    }

    // `auto_close === TRUE` by default
    if (auto_close) {
      timer_id.current = setTimeout(cleanup, duration);
    }

    return cleanup;
  }, []);

  useEffect(() => {
    if (!is_cover_visible) {
      setAlert(null);
    }
  }, [is_cover_visible]);

  return (
    <>
      {alert && (
        <div
          id="alert-wrapper"
          css={[DEFAULT_ALERT_WRAPPER_STYLE, alert?.styles?.wrapper]}
        >
          <div id="alert" css={[DEFAULT_ALERT_STYLE, alert?.styles?.alert]}>
            <div>{alert?.message}</div>

            {alert?.btn_text && (
              <div
                id="alert-button"
                css={[DEFAULT_ALERT_BUTTON_STYLE, alert?.styles?.button]}
                onClick={cleanup}
              >
                {alert.btn_text}
              </div>
            )}
          </div>
        </div>
      )}

      <AlertContext.Provider value={{ setAlert: _set_alert }} {...props} />
    </>
  );
};

// ----------------------------------------------------------------
// useAlert
// ----------------------------------------------------------------

export const useAlert = () => useContext(AlertContext);
