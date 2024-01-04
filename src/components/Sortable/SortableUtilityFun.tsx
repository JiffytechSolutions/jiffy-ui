export type elementRect = {
  top: number;
  left: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
};

export const pointInRangeArr = (
  arr: elementRect[],
  point: { x: number; y: number }
): number => {
  const { x, y } = point;
  let minDistance = Number.MAX_SAFE_INTEGER;
  let nearestIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    const currRect = arr[i];

    // Check if the point is inside the rectangle
    if (
      currRect.top <= y &&
      currRect.bottom >= y &&
      currRect.left <= x &&
      currRect.right >= x
    ) {
      return i; // Return the index of the first rectangle that contains the point
    }

    // Calculate the vertical distance from the point to the rectangle
    const rowDistance = Math.abs(y - (currRect.top + currRect.height / 2));

    // Calculate the horizontal distance from the point to the rectangle
    const colDistance = Math.abs(x - (currRect.left + currRect.width / 2));

    // Update the nearest index if the current rectangle is closer in both row and column
    if (
      rowDistance < minDistance ||
      (rowDistance === minDistance &&
        colDistance <
          Math.abs(x - (arr[nearestIndex].left + arr[nearestIndex].width / 2)))
    ) {
      minDistance = rowDistance;
      nearestIndex = i;
    }
  }

  return nearestIndex;
};

export const getClientXY = (event: MouseEvent | TouchEvent | any) => {
  let clientX = -1,
    clientY = -1;

  if (
    event.type === "mousemove" ||
    event.type === "mouseup" ||
    event.type === "mousedown"
  ) {
    event = event as MouseEvent;
    clientX = event?.clientX;
    clientY = event?.clientY;
  } else {
    event = event as TouchEvent;
    clientX = event.touches[0]?.clientX;
    clientY = event.touches[0]?.clientY;
  }

  return { clientX, clientY };
};

export const swapArray = (from: number, to: number, arr: any[]): any[] => {
  let res = [...arr];
  const delItem = arr[from];
  res.splice(from, 1);
  res.splice(to, 0, delItem);
  return [...res];
};

export const makeRangeArray = (container: HTMLElement) => {
  const containerRect = container.getBoundingClientRect();
  const res = Array.from(container.children).map((item) => {
    const currRect = item.getBoundingClientRect();
    const currRange = {
      top: currRect.top + container.scrollTop - containerRect.top,
      bottom: currRect.bottom + container.scrollTop - containerRect.top,
      left: currRect.left + container.scrollLeft - containerRect.left,
      right: currRect.right + container.scrollLeft - containerRect.left,
      width: currRect.width,
      height: currRect.height,
    };
    return currRange;
  });
  return res;
};
