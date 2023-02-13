import React from 'react';
import { ToastContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
      <ol
        className={styles.wrapper}
        role="region"
        aria-live="assertive"
        aria-label="Notification"
      >
        {toasts.map((obj) => (
          <li key={obj.toastId} className={styles.toastWrapper}>
            <Toast toastId={obj.toastId} message={obj.message} status={obj.status} />
          </li>
        ))}
      </ol>
  );
}

export default ToastShelf;
