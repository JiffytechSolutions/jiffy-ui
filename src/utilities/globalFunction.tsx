interface OptI {
  label: string;
  value: string | number;
}
export interface SimpleObjI {
  label: string;
  value: string | number;
  description?: string;
  isDisabled?: boolean;
}
export interface GroupedObjI {
  label: string;
  group: SimpleObjI[];
}
interface ClassesI {
  [className: string]: any;
}
export const getPositionOfFixedElement = (
  parentEle: HTMLElement,
  childEle: HTMLElement,
  direction: string
): any => {
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
    left:
      direction === "left" && isLeftHaveSpace
        ? parentDimension.left
        : isRightHaveSpace
          ? parentDimension.right - childEle.offsetWidth
          : isLeftHaveSpace
            ? parentDimension.left
            : parentDimension.left -
              (childEle.offsetWidth - parentEle.offsetWidth) / 2,
  };
};

export const changePosition = (
  parentRef: any,
  popoverRef: React.RefObject<HTMLElement>,
  options: any = {}
): (() => void) => {
  const { direction = "auto", width = false } = options;

  return () => {
    if (!popoverRef.current || !parentRef.current) return;
    if (width) {
      popoverRef.current.style.width =
        parentRef.current.getBoundingClientRect().width + "px";
    }
    const { top, left } = getPositionOfFixedElement(
      parentRef.current,
      popoverRef.current,
      direction
    );
    popoverRef.current.style.left = `${left / 10}rem`;
    popoverRef.current.style.top = `${top / 10}rem`;
  };
};
// Get matching label of values in case of simple data
export const getMatchingLabels = (options: OptI[], valueArr: any[]) => {
  return valueArr.reduce((acc: any, val: any) => {
    const match = options.find((option) => option.value === val);
    if (match) {
      acc.push(match);
    }
    return acc;
  }, []);
};

export function getMatchingGroupLabels(
  groupOptions: GroupedObjI[],
  value: any,
  isMulti: boolean
) {
  const valuesToMatch = isMulti ? new Set(value) : new Set([value]);
  const labels = [];
  for (const groupOption of groupOptions) {
    for (const option of groupOption.group) {
      if (valuesToMatch.has(option.value)) {
        labels.push(option);
      }
    }
  }
  return labels;
}

export const classnames = (classes: ClassesI) => {
  return Object.keys(classes)
    .filter((className) => classes[className])
    .join(" ");
};
