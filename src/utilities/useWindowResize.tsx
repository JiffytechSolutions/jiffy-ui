import { useState, useEffect, useCallback } from "react";
export default function useWindowResize(debounceDelay = 200) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const debouncedUpdateWindowWidth = useCallback(() => {
    let timeoutId: any;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateWindowWidth, debounceDelay);
    };
  }, [updateWindowWidth, debounceDelay]);

  useEffect(() => {
    const handleResize = debouncedUpdateWindowWidth();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [debouncedUpdateWindowWidth]);
  
  return windowWidth;
}
