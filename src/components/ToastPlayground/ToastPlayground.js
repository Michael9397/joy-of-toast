import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toastType, setToastType] = React.useState('notice');
  const [message, setMessage] = React.useState('');
  const [toasts, setToasts] = React.useState([]);
  const [toastCount, setToastCount] = React.useState(0);

  const addToast = ()=> {
    if (!message) return;
    const newToast = {
      key:toastCount,
      toastId:toastCount,
      status:toastType,
      message,
      cancelToast
    };
    setToasts([...toasts, newToast]);
    setToastCount(toastCount + 1);
    setToastType('notice');
    setMessage('');
  }
  const cancelToast = (toastId) => {
    const newToasts = toasts.filter((toast) => toast.toastId !== toastId);
    setToasts(newToasts);
  }
  console.log(toasts);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {toasts.map((obj) => (
        <>
          <Toast key={obj.toastCount} toastId={obj.toastCount} message={obj.message} status={obj.status} cancelToast={obj.cancelToast}/>
        </>
      ))}
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
            <Button onClick={() => addToast()}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
