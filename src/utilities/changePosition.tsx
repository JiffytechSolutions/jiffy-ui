import { isMobileDevice } from "./useMobileDevice";

interface Position {
  top: number;
  left: number;
}

const getPositionOfFixedElement = (
  parentEle: HTMLElement,
  childEle: HTMLElement,
  direction: string
): Position => {
  const parentDimension = parentEle.getBoundingClientRect();
  const isBottomHaveSpace =
    window.innerHeight - (parentDimension.bottom + 4) >= childEle.offsetHeight;
  let isLeftHaveSpace =
    window.innerWidth - parentDimension.left >= childEle.offsetWidth;
  let isRightHaveSpace = parentDimension.right >= childEle.offsetWidth;

  if (isBottomHaveSpace) childEle.style.transformOrigin = "top center";
  else childEle.style.transformOrigin = "bottom center";



  return {
    top: isBottomHaveSpace
      ? parentDimension.bottom + 4
      : parentDimension.top - childEle.offsetHeight - 4,
    left: (direction === "left" && isLeftHaveSpace) ? parentDimension.left : isRightHaveSpace
      ? parentDimension.right - childEle.offsetWidth
      : isLeftHaveSpace
        ? parentDimension.left
        : parentDimension.left -
        (childEle.offsetWidth - parentEle.offsetWidth) / 2,
  };
};

type ChangePositionOptions = {
  direction?: "left" | "right" | "auto";
  width?: boolean;
};

const changePosition = (
  parentRef: React.RefObject<HTMLElement>,
  popoverRef: React.RefObject<HTMLElement>,
  options: ChangePositionOptions = {}
): (() => void) => {
  const { direction = "auto", width = false } = options;

  return () => {
    if (!popoverRef.current || !parentRef.current) return;
    if (width) {
      popoverRef.current.style.width =
        parentRef.current.getBoundingClientRect().width + "px";
    }
    if (isMobileDevice()) {
      popoverRef.current.style.bottom = "0"
      popoverRef.current.style.minWidth = window.innerWidth + 'px'
      return
    }
    else {
      const { top, left } = getPositionOfFixedElement(
        parentRef.current,
        popoverRef.current,
        direction
      );
      popoverRef.current.style.left = `${left / 10}rem`;
      popoverRef.current.style.top = `${top / 10}rem`;
    }
  };
};

export default changePosition;
