import React from 'react';

import Button from '../Button';
import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";
import { ToastContext } from '../ToastProvider/ToastProvider';
import VisuallyHidden from '../VisuallyHidden';
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastType, setToastType] = React.useState('notice');
  const { addToast } = React.useContext(ToastContext);
  const messageRef = React.useRef(null);

  function createNewToast(event) {
    event.preventDefault();
    addToast(messageRef.current.value, toastType);
    messageRef.current.value = '';
    setToastType('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf/>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea ref={messageRef} id="message" className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) => (
              <label key={variant} htmlFor={`variant-${variant}`}>
                <input
                  type="radio"
                  name="variant"
                  id={`variant-${variant}`}
                  value={variant}
                  checked={toastType === variant}
                  onChange={(e) => setToastType(e.target.value)}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <form onSubmit={(event) => createNewToast(event)}>
              <Button>
                Pop Toast!
                <VisuallyHidden>
                  Dismiss message
                </VisuallyHidden>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
