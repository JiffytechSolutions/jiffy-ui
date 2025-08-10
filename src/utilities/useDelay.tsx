import { useEffect, useRef, useState } from "react";

const useDelay = (isMounted: boolean, delayTime: number) => {
  const [show, setShow] = useState(false);
  const timeoutRef: any = useRef();
  useEffect(() => {
    if (isMounted && !show) {
      setShow(true);
    } else if (!isMounted && show) {
      timeoutRef.current = setTimeout(() => setShow(false), delayTime);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [isMounted, delayTime, show]);
  return show;
};

export default useDelay;
