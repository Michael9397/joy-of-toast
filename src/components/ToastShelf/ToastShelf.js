import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, setToasts}) {
  const cancelToast = (toastId) => {
    const newToasts = toasts.filter((toast) => toast.toastId !== toastId);
    setToasts(newToasts);
  }

  return (
      <ol className={styles.wrapper}>
        {toasts.map((obj) => (
          <li key={obj.toastId} className={styles.toastWrapper}>
            <Toast toastId={obj.toastId} message={obj.message} status={obj.status} cancelToast={cancelToast}/>
          </li>
        ))}
      </ol>
  );
}

export default ToastShelf;
