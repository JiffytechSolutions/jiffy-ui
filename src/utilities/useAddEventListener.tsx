import { useEffect } from "react";

interface AddEventListenerI {
  eventType: string;
  listener: (event: Event) => void;
  capture?: boolean;
  dependency?: any;
}

export function useAddEventListener({
  eventType,
  listener,
  capture = false,
  dependency = null,
}: AddEventListenerI) {
  useEffect(() => {
    window.addEventListener(eventType, listener, capture ?? false);
    return () => {
      window.removeEventListener(eventType, listener, capture ?? false);
    };
  }, [dependency]);
}
