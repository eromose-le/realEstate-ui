import { Slide, ToastPosition, toast } from "react-toastify";

type ToastType = "success" | "error";

interface ToastOptions {
  position?: ToastPosition;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: number;
  theme?: string;
  transition?: any;
}

export const Notify = (
  message: string,
  type: ToastType,
  options: ToastOptions = {}
): void => {
  const defaultOptions: ToastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "light",
    transition: Slide,
  };

  const toastOptions: ToastOptions = { ...defaultOptions, ...options };

  if (type === "success") {
    toast.success(message, toastOptions);
  } else if (type === "error") {
    toast.error(message, toastOptions);
  }
};

// Example usage:
// Notify("Custom message", "success", {
//   position: "bottom-right",
//   autoClose: 3000,
// });
