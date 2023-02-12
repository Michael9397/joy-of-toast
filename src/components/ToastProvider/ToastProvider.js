import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, status) {
    if (!message) return;
    const uniqueKey = crypto.randomUUID();
    const newToast = {
      key:uniqueKey,
      toastId:uniqueKey,
      status,
      message
    };
    setToasts([...toasts, newToast]);
  }

  function removeToast(toastId) {
    const newToasts = toasts.filter((toast) => toast.toastId !== toastId);
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
