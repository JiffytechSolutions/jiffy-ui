import { useEffect } from "react";

export function useAddEventListener(
  eventType: string,
  listener: (event: Event) => void,
  capture: boolean = false,
  dependency: any = null
) {
  useEffect(() => {
    window.addEventListener(eventType, listener, capture);
    return () => {
      window.removeEventListener(eventType, listener, capture);
    };
  }, [dependency]);
}
