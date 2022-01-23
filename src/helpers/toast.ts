import { ReactText } from "react";
import { toast as toastify, ToastOptions } from "react-toastify";

type type = "default" | "info" | "success" | "error";

const defaultOptions: ToastOptions = {
  autoClose: 2500,
  position: "bottom-right",
  pauseOnFocusLoss: false,
  pauseOnHover: false,
};

export const toast = (
  type: type,
  text: string,
  hideProgressBar = true
): ReactText => {
  switch (type) {
    case "default":
      return toastify(text, { ...defaultOptions, hideProgressBar });
    case "info":
      return toastify.info(text, { ...defaultOptions, hideProgressBar });
    case "success":
      return toastify.success(text, { ...defaultOptions, hideProgressBar });
    case "error":
      return toastify.error(text, { ...defaultOptions, hideProgressBar });
    default:
      return toastify(text, { ...defaultOptions, hideProgressBar });
  }
};
