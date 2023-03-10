import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ status, message, toastId }) {
  const { removeToast } = React.useContext(ToastContext);

  const Icon = ICONS_BY_VARIANT[status];

  return (
    <div className={`${styles.toast} ${styles[status]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          { status }
        </VisuallyHidden>
        { message }
      </p>
      <button
        className={styles.closeButton}
        onClick={() => removeToast(toastId)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
