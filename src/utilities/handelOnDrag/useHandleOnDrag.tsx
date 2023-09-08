import { useEffect, useState } from "react";
import useMobileDevice from "../useMobileDevice";
import "./handleOnDrag.css";

const useHandleOnDrag = (
  parentRef: any,
  scrollRef: any,
  isOpen: boolean,
  onClose = () => {
    //
  }
) => {
  const isMobileDevice = useMobileDevice();
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [event, setEvent] = useState();
  const toggleClass = (a: string, b: string) => {
    parentRef?.current?.classList.remove(a);
    parentRef?.current?.classList.add(b);
  };
  useEffect(() => {
    if (!isMobileDevice) return;
    isOpen
      ? toggleClass("inte-mobileDevice--out", "inte-mobileDevice--in")
      : toggleClass("inte-mobileDevice--in", "inte-mobileDevice--out");
  }, [isOpen]);

  const handleTouchStart = (event: any) => {
    event.stopPropagation();
    if (event) {
      setEvent(event.currentTarget);
    }
    setStartY(event.touches[0].clientY);
    setCurrentY(event.touches[0].clientY);
  };

  const handleTouchMove = (event: any) => {
    event.stopPropagation();
    const deltaYs = event.touches[0].clientY - startY;
    if (deltaYs > 0) {
      setCurrentY(event.touches[0].clientY);
    }
  };

  const handleTouchEnd = (event: any) => {
    event.stopPropagation();
    const topValue = (startY - currentY) * -1;
    if (topValue >= parentRef?.current.offsetHeight / 2) {
      // Close dropdown when self half height
      onClose();
      setTimeout(() => {
        setStartY(0);
        setCurrentY(0);
      }, 200);
    } else {
      parentRef?.current?.classList.add("inte-mobileDevice__scrollTop");
      setStartY(0);
      setCurrentY(0);
      setTimeout(() => {
        parentRef?.current?.classList.remove("inte-mobileDevice__scrollTop");
      }, 200);
    }
  };
  useEffect(() => {
    if (parentRef?.current && scrollRef?.current) {
      const { scrollTop } = scrollRef.current;
      if (scrollTop === 0) {
        parentRef.current.style.bottom = `-${currentY - startY}px`;
      } else if (
        scrollTop !== 0 &&
        !scrollRef.current.contains(event) &&
        parentRef.current.contains(event)
      ) {
        parentRef.current.style.bottom = `-${currentY - startY}px`;
      }
    }
  }, [currentY, startY, handleTouchMove, handleTouchEnd, scrollRef?.current]);

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
};

export default useHandleOnDrag;
