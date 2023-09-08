import React, { useContext } from "react";
import { AppContext } from "../../utilities/context/AppContext";
import ToastInner, { ToastI } from "./component/ToastInner";
const useToast = () => {
  const context = useContext(AppContext);
  const toastItem = ({
    message,
    description,
    type,
    hasDestroyIcon,
    timeout,
    icon,
    showProgressBar,
    onUndo,
    isPauseOnHover,
    customClass,
  }: ToastI) => {
    const toast = (
      <ToastInner
        message={message}
        description={description}
        type={type}
        hasDestroyIcon={hasDestroyIcon}
        timeout={timeout}
        icon={icon}
        showProgressBar={showProgressBar}
        onUndo={onUndo}
        isPauseOnHover={isPauseOnHover}
        customClass={customClass}
      />
    );
    context.toast.handleToastItems(toast);
  };
  return toastItem;
};
export default useToast;
