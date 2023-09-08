import { useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

export interface PortalComponentI {
  children: ReactNode | ReactNode[];
  type?: "toast";
}

const PortalComponent: React.FC<PortalComponentI> = ({ children, type }) => {
  let container = document.getElementById("inte-portalContainer");
  if (!container)
    container = createContainer("inte-portalContainer", document.body);

  useEffect(() => {
    return () => {
      if (!container?.hasChildNodes()) {
        container?.remove();
      }
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

const createContainer = (id: string, parent: HTMLElement) => {
  const container = document.createElement("div");
  container.id = id;
  parent.appendChild(container);
  return container;
};

export default PortalComponent;
