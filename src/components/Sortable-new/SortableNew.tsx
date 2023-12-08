import React, { useRef, useState } from "react";
import "./SortableNew.css";
import getClassNames from "../../utilities/getClassnames";

const SortableNew = ({
  data,
  renderItem,
  onSortEnd,
  customClass = "",
}: SortableNewI) => {
  const [items, setItems] = useState(data);
  const [draggedIndex, setDraggedIndex] = useState<any>(null);
  const [draggedEle, setDraggedEle] = useState<any>([]);
  const [ind, setInd] = useState(0);
  const [flag, setFlag] = useState(false);
  const gridRef: any = useRef<any>(null);

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDragStart = (e: any, index: number) => {
    e.dataTransfer.setData("index", index);
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(index, 1);
    setDraggedEle([draggedItem]);
    setDraggedIndex(index);
    setFlag(true);
  };

  const dragEnter = (e: any, index: number) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(index, 1);
    updatedItems.splice(index, 0, draggedItem);
    setItems(updatedItems);
    setInd(index);
    setDraggedIndex(null);
  };

  const handleDrop = (e: any, targetIndex: number) => {
    const sourceIndex = e.dataTransfer.getData("index");
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(sourceIndex, 1);
    updatedItems.splice(targetIndex, 0, draggedItem);
    setItems(updatedItems);
    onSortEnd?.(updatedItems);
    setDraggedIndex(null);
    setFlag(false);
  };

  const handleGridDragOver = (e: any) => {
    if (!e.clientY) return;
    const mouseY = e.clientY || e.touches[0].clientY;
    const gridRect = gridRef.current.getBoundingClientRect();
    const scrollThreshold = gridRect.height / 4;
    if (mouseY < 100) return;
    if (mouseY < gridRect.top + scrollThreshold) {
      // Scroll up
      // gridRef.current.scrollTop -= 10;
    } else if (mouseY > gridRect.bottom - scrollThreshold) {
      // Scroll down
      // gridRef.current.scrollTop += 10;
    }
  };

  return (
    <div
      className={getClassNames({
        "sortable-grid": true,
        [customClass]: customClass,
      })}
      ref={gridRef}
      onDrag={handleGridDragOver}
    >
      {items.map((item: any, index: number) => (
        <div
          key={index}
          className={getClassNames({
            "grid-item": true,
            "grid-item--hovered": flag && ind === index,
            dragging: draggedIndex === index,
          })}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => {
            handleDrop(e, index);
          }}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragLeave={() => console.log(index, "drag leave")}
        >
          {renderItem(item, index) as React.ReactNode}
        </div>
      ))}
    </div>
  );
};

export interface SortableNewI {
  customClass?: string;
  renderItem: (data: any, index: number) => void;
  onSortEnd?: (data: any) => void;
  data: any;
}
export default SortableNew;