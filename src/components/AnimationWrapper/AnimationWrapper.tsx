import React, { useEffect, useRef, useState } from "react";
import getClassNames from "../../utilities/getClassnames";

export interface AnimationWrapperI {
  show: boolean;
  inAnimation: string;
  outAnimation: string;
  children: React.ReactNode;
}

const AnimationWrapper: React.FC<AnimationWrapperI> = ({
  show,
  children,
  inAnimation,
  outAnimation,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [removeState, setRemoveState] = useState(!show);

  useEffect(() => {
    const childElement = elementRef.current;

    if (show) {
      setRemoveState(false);
      return;
    }

    if (!childElement) return;

    childElement.classList.remove(inAnimation);
    childElement.classList.add(outAnimation);

    const handleAnimationEnd = () => {
      setRemoveState(true);
    };

    childElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      childElement.removeEventListener("animationend", handleAnimationEnd);
      childElement.classList.remove(outAnimation);
      setRemoveState(!show);
    };
  }, [show, inAnimation, outAnimation]);

  if (removeState) {
    return null;
  }

  const wrapperClassNames = getClassNames({
    "inte-animationWrapper": true,
    [inAnimation]: inAnimation,
  });

  return (
    <div className={wrapperClassNames} ref={elementRef}>
      {children}
    </div>
  );
};

export default AnimationWrapper;
