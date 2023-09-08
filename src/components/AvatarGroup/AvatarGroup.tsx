import React, { FC, useState } from "react";
import Avatar from "../Avatar/Avatar";
import Popover from "../Popover/Popover";
import getClassNames from "../../utilities/getClassnames";
import "./AvatarGroup.css";

const AvatarGroup: FC<AvatarGroupI> = ({
  maxCount,
  children,
  size = "large",
  customClass = "",
}) => {
  const [show, setShow] = useState(false);
  // AvatarGroup size code
  const checkSize: { [key: string]: string } = {
    small: "inte-avtarGroup--small",
    medium: "inte-avtarGroup--medium",
    large: "inte-avtarGroup--large",
  };
  const avtarSize = size && checkSize[size];
  const visibleAvatarCount =
    children.length > maxCount ? maxCount : children.length;
  const hiddenAvatarCount = children.length - visibleAvatarCount;

  return (
    <div
      className={getClassNames({
        "inte-avatarGroup": true,
        [customClass]: customClass,
        [avtarSize]: avtarSize
      })}
    >
      {
        children.map((item: any, index: number) => {
          if (index < visibleAvatarCount) return <div key={index} className={`inte-avatarGroup__item`}>{item}</div>
        })
      }
      {hiddenAvatarCount > 0 && (
        <div
          className={`inte-avatarGroup__item inte-avtarGroup--hiddenCount ${avtarSize}`}
        >
          <Popover
            customClass="inte-avatar__popover"
            isOpen={show}
            onClose={() => setShow(false)}
            activator={
              <div role={"button"} onClick={() => setShow(!show)}>
                <Avatar size={size} text={`+${hiddenAvatarCount.toString()}`} />
              </div>
            }
          >
            <div className="inte-avatarGroup__itemWrapper">
              {React.Children.toArray(children)
                .slice(visibleAvatarCount, children.length)
                .map((child, index) => {
                  return <div
                    key={index}
                    className={`inte-avatarGroup__item ${avtarSize}`}
                  >
                    {child}
                  </div>
                })}
            </div>
          </Popover>
        </div>
      )}
    </div>
  );
};
export interface AvatarGroupI {
  maxCount: number;
  children?: any;
  size?: "small" | "medium" | "large";
  customClass?: string;
}
export default AvatarGroup;
