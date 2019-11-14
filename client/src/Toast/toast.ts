import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToast = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT
  });
};

export const dangerToast = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT
  });
};

export const infoToast = (message: string) => {
  toast.info(message, {
    position: toast.POSITION.TOP_RIGHT
  });
};
