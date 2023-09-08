import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
} from "react";

import "./Sortable.css";
export interface SortableI {
  data: any;
  direction?: "vertical" | "horizontal";
  onSort: (data: any) => void;
  animationDuration?: number;
  renderItem: (data: any, index: number) => void | any;
  customClass?: string;
}

const Sortable: FC<SortableI> = ({
  data,
  renderItem = () => {},
  onSort = () => {},
  animationDuration = 200,
  direction = "vertical",
  customClass = "",
}) => {
  const list = useRef<any>();
  const [dragging, setDragging] = useState<any>();
  const [willEndDragging, setWillEndDragging] = useState<any>();
  const touchId = useRef();
  const dragMoveHandler: any = useRef();
  const draggedItemPosition: any = useRef();
  const itemShifts: any = useRef();
  const itemsOrder: any = useRef();
  const prevItems: any = useRef();

  if (data !== prevItems.current) {
    prevItems.current = data;
    itemsOrder.current = data.map((_: any, index: number) => index);
  }

  useEffect(() => {
    const onTouchMove = () => {};
    window.addEventListener("touchmove", onTouchMove);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  const onDragStart: any = useCallback(
    (node: ReactNode, x: number, touch: any) => {
      const item: any = getItem(list.current, node);
      const [itemNode, position] = item;
      if (direction == "vertical" && list?.current) {
        setDragging({
          touch,
          initialPosition: position,
          itemHeights: Array.prototype.map.call(
            list.current.childNodes,
            (node) => node.getBoundingClientRect().height
          ),
          itemTopOffset:
            itemNode.getBoundingClientRect().top -
            list.current.childNodes[0].getBoundingClientRect().top,
          itemSpacing:
            list.current.childNodes[1].getBoundingClientRect().top -
            list.current.childNodes[0].getBoundingClientRect().bottom,
          dragStartY: x,
        });
        draggedItemPosition.current = {
          previous: position,
          new: position,
          shiftY: 0,
        };
      } else {
        setDragging({
          touch,
          initialPosition: position,
          itemHeights: Array.prototype.map.call(
            list.current.childNodes,
            (node) => node.getBoundingClientRect().width
          ),
          itemSpacing:
            list.current.childNodes[1].getBoundingClientRect().left -
            list.current.childNodes[0].getBoundingClientRect().right,

          itemoffsetLeft:
            itemNode.getBoundingClientRect().left -
            list.current.childNodes[0].getBoundingClientRect().left,

          dragStartX: x,
        });

        draggedItemPosition.current = {
          previous: position,
          new: position,
          shiftX: 0,
        };
      }

      itemShifts.current = data.map(() => 0);
    },
    [dragging, direction]
  );

  const onMouseDown = useCallback(
    (event: any) => {
      const d = direction == "vertical" ? event.pageY : event.pageX;
      onDragStart(event.target, d);
    },
    [onDragStart, direction]
  );

  const onDragMove = useCallback(
    (event: any) => {
      let x;
      if (dragging.touch !== undefined) {
        for (const touch of event.changedTouches) {
          if (touch.identifier === dragging.touch) {
            direction == "vertical" ? touch.pageY : touch.pageX;
            break;
          }
        }
      } else {
        x = direction == "vertical" ? event.pageY : event.pageX;
      }

      event.preventDefault();
      const a =
        direction == "vertical" ? dragging.dragStartY : dragging.dragStartX;
      const moved = x - a;
      const draggedItemOffsetTop =
        direction == "vertical"
          ? dragging.itemTopOffset + moved
          : dragging.itemoffsetLeft + moved;
      const position = getDraggedItemPosition(
        dragging.itemHeights,
        dragging.itemSpacing,
        draggedItemOffsetTop,
        dragging.initialPosition
      );
      const draggedItemHeight = dragging.itemHeights[dragging.initialPosition];
      // Update list items' positions.
      itemShifts.current = data.map((_: any, index: number) => {
        if (index < dragging.initialPosition) {
          if (index >= position) {
            return draggedItemHeight + dragging.itemSpacing;
          } else {
            return 0;
          }
        } else if (index > dragging.initialPosition) {
          if (index <= position) {
            return -1 * (draggedItemHeight + dragging.itemSpacing);
          } else {
            return 0;
          }
        } else {
          return moved;
        }
      });
      // Apply item shifts Y.
      let i = 0;
      while (i < data.length && list?.current) {
        list.current.childNodes[i].style.transform =
          direction == "vertical"
            ? `translateY(${itemShifts.current[i]}px)`
            : `translateX(${itemShifts.current[i]}px)`;
        i++;
      }

      draggedItemPosition.current = {
        previous: dragging.initialPosition,
        new: position,
        shiftX:
          getDraggedItemPositionY(
            dragging.itemHeights,
            dragging.itemSpacing,
            dragging.initialPosition,
            position
          ) -
          getDraggedItemPositionY(
            dragging.itemHeights,
            dragging.itemSpacing,
            dragging.initialPosition,
            dragging.initialPosition
          ),
      };
    },
    [dragging, direction]
  );

  const onDragEnd = useCallback(() => {
    setDragging("");
    setWillEndDragging(true);
    const newItemsOrder = getNewItemsOrder(
      itemsOrder.current,
      draggedItemPosition.current.previous,
      draggedItemPosition.current.new
    );
    setTimeout(() => {
      setWillEndDragging(false);
      itemsOrder.current = newItemsOrder;
      onSort(newItemsOrder.map((index: number) => data[index]));
    }, animationDuration);
  }, [itemsOrder.current]);

  useEffect(() => {
    if (dragging) {
      dragMoveHandler.current = onDragMove;
      if (dragging.touch !== undefined) {
        touchId.current = dragging.touch;
        window.addEventListener("touchmove", dragMoveHandler.current, {
          passive: false,
        });
      } else {
        window.addEventListener("mousemove", dragMoveHandler.current, {
          passive: false,
        });
        window.addEventListener("mouseup", onDragEnd);
      }
    } else {
      if (touchId.current !== undefined) {
        touchId.current = undefined;
        window.removeEventListener("touchmove", dragMoveHandler.current, false);
      } else {
        window.removeEventListener("mousemove", dragMoveHandler.current, false);
        window.removeEventListener("mouseup", onDragEnd);
      }
      dragMoveHandler.current = undefined;
    }
  }, [dragging]);

  useEffect(() => {
    if (willEndDragging) {
      // Reset dragged item position.
      list.current.childNodes[
        draggedItemPosition.current.previous
      ].style.transform =
        direction == "vertical"
          ? `translateY(${draggedItemPosition.current.shiftY}px)`
          : `translateX(${draggedItemPosition.current.shiftX}px)`;
    }
  }, [willEndDragging, direction]);

  const getItemStyle = (
    isDragged: boolean,
    willEndDragging: any | boolean,
    shift: number,
    animationDuration: number
  ) => {
    const style: any = {
      position: "relative",
      transition: `all ${animationDuration}ms ease`,
    };
    if (isDragged) {
      style.zIndex = 99999999999999999999;
      if (!willEndDragging) {
        style.transition = undefined;
      }
    } else {
      style.transform =
        direction == "vertical"
          ? `translateY(${shift}px)`
          : `translateX(${shift}px)`;
    }
    return style;
  };

  const getItem = (list: ReactNode, node: any) => {
    let childNode;
    while (node) {
      if (childNode && node === list) {
        let i = 0;
        while (i < node.childNodes.length) {
          if (node.childNodes[i] === childNode) {
            return [childNode, i];
          }
          i++;
        }
      }
      childNode = node;
      node = node.parentElement;
    }
  };

  const getDraggedItemPosition = (
    itemHeights: Array<number>,
    itemSpacing: number,
    draggedItemOffsetTop: number,
    initialPosition: number
  ) => {
    const scanLineY =
      draggedItemOffsetTop + itemHeights[initialPosition] / 2 + itemSpacing / 2;
    let y = 0;
    let i = 0;
    while (i < itemHeights.length) {
      y += itemHeights[i] + itemSpacing;
      if (scanLineY <= y) {
        return i;
      }
      i++;
    }
    return itemHeights.length - 1;
  };

  const getDraggedItemPositionY = (
    itemHeights: Array<number>,
    itemSpacing: number,
    initialPosition: number,
    position: number
  ) => {
    let top = 0;
    let j = 0;
    while (j < position) {
      if (j === initialPosition) {
        position++;
      } else {
        top += itemHeights[j] + itemSpacing;
      }
      j++;
    }
    return top;
  };

  const getNewItemsOrder = (
    itemsOrder: Array<number>,
    fromPosition: number,
    toPosition: number
  ) => {
    if (toPosition < fromPosition) {
      return itemsOrder
        .slice(0, toPosition)
        .concat(itemsOrder[fromPosition])
        .concat(itemsOrder.slice(toPosition, fromPosition))
        .concat(itemsOrder.slice(fromPosition + 1));
    }
    if (toPosition > fromPosition) {
      return itemsOrder
        .slice(0, fromPosition)
        .concat(itemsOrder.slice(fromPosition + 1, toPosition + 1))
        .concat(itemsOrder[fromPosition])
        .concat(itemsOrder.slice(toPosition + 1));
    }
    return itemsOrder.slice();
  };

  return (
    <div
      className={`inte-sortable ${customClass}`.replace(/\s\s+/g, " ").trim()}
    >
      <ul
        tabIndex={0}
        ref={list}
        className={`inte-sortable__wrapper ${
          direction === "vertical"
            ? "inte-sortable--vertical"
            : "inte-sortable--horizontal"
        }`
          .replace(/\s\s+/g, " ")
          .trim()}
      >
        {itemsOrder.current.map(
          (changesIndex: number, currentIndex: number) => (
            <li
              key={currentIndex}
              className={` inte-sortable__item  ${
                dragging &&
                currentIndex === draggedItemPosition.current.previous
                  ? "inte-sortable__item--active"
                  : ""
              }`
                .replace(/\s\s+/g, " ")
                .trim()}
              style={
                dragging || willEndDragging
                  ? getItemStyle(
                      currentIndex === draggedItemPosition.current.previous,
                      willEndDragging,
                      itemShifts.current[currentIndex],
                      animationDuration
                    )
                  : { transform: "none" }
              }
              onMouseDown={onMouseDown}
            >
              {renderItem(data, changesIndex)}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default Sortable;
