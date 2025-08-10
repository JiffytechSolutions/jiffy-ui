const isClickBelow = (node: Node, popoverRef: any) => {
    let mainContainerChildren = document.getElementById('inte-portalContainer')?.children
    if (!mainContainerChildren) return
    let flag = false
    for (let i = 0; i < mainContainerChildren.length; i++) {
      if (flag && mainContainerChildren[i].contains(node)) return true
      if (mainContainerChildren[i].contains(popoverRef.current)) flag = true
    }
    return false
  }
  const myHandleClick = (parentRef: any, popoverRef: any, onClose: any, event: MouseEvent) => {
    if (!(event.target instanceof Node) ||
      parentRef?.current?.contains(event.target) ||
      popoverRef?.current?.contains(event.target) ||
      isClickBelow(event.target, popoverRef)
    ) {
      return;
    }
    else onClose()
  };
  const handleClickOutside = (parentRef: React.RefObject<HTMLElement>, popoverRef: React.RefObject<HTMLElement>, onClose: Function) => {
    return (event: MouseEvent) => {
      myHandleClick(parentRef, popoverRef, onClose, event);
    };
  };
  export default handleClickOutside
  