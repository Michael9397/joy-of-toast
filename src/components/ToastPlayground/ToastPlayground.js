import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastType, setToastType] = React.useState('notice');
  const [message, setMessage] = React.useState('');
  const [toasts, setToasts] = React.useState([]);

  const addToast = (event)=> {
    event.preventDefault();
    if (!message) return;
    const uniqueKey = crypto.randomUUID();
    const newToast = {
      key:uniqueKey,
      toastId:uniqueKey,
      status:toastType,
      message
    };
    setToasts([...toasts, newToast]);
    setToastType('notice');
    setMessage('');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} setToasts={setToasts}/>
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
            <textarea id="message" className={styles.messageInput} value={message} onChange={e => setMessage(e.target.value)} />
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
            <form onSubmit={(event) => addToast(event)}>
              <Button>Pop Toast!</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
