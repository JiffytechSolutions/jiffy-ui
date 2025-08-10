import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalI {
  children: ReactNode | ReactNode[];
}

const createPortalContainer = (id: string, parent: HTMLElement) => {
  const container = document.createElement("div");
  container.id = id;
  parent.appendChild(container);
  return container;
};

const Portal: React.FC<PortalI> = ({ children }) => {
  let container = document.getElementById("pixel-portalContainer");
  if (!container) {
    container = createPortalContainer("pixel-portalContainer", document.body);
  }
  useEffect(() => {
    return () => {
      if (!container?.hasChildNodes()) {
        container?.remove();
      }
    };
  }, []);

  return createPortal(children, container);
};

export default Portal;
