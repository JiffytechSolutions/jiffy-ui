import React, { useEffect, useState } from "react";
import { FC } from "react";
import { Check, Copy } from "../../storybook/Foundation/Icons/Icons";
import { Button } from "..";
import Text from "../Text/Text";
import getClassNames from "../../utilities/getClassnames";
import "./CopyClipboard.css";
export interface CopyClipboardI {
  value: string | any;
  label?: string | any;
  align?: "start" | "center" | "end" | "fill";
  iconAlign?: "left" | "right";
  timeout?: number;
  customClass?: string;
}

const CopyClipboard: FC<CopyClipboardI> = ({
  value = "",
  label,
  iconAlign = "right",
  align = "start",
  timeout = 3000,

  customClass = "",
}: CopyClipboardI): JSX.Element => {
  const [status, setstatus] = useState(false);

  const [active, setactive] = useState(false);
  function copyText(): void {
    !status
      ? navigator.clipboard.writeText(value)
      : navigator.clipboard.writeText("");
  }
  useEffect(() => {
    setTimeout(() => setactive(false), timeout);
  }, []);
  return (
    <div
      className={getClassNames({
        "inte-copyClipboard": true,
        "inte-copyClip__center": align == "center",
        "inte-copyClip__end": align == "end",
        "inte-copyClip__fill": align === "fill",

        [customClass]: customClass,
      })}
    >
      {label && iconAlign == "right" && <Text>{label}</Text>}
      <Button
        accessibilityLabel="Copy To Clipboard"
        type="outlined"
        size="extraThin"
        icon={active ? <Check /> : <Copy size={20} />}
        onClick={() => {
          copyText();
          setstatus(!status);
          !status && setactive(!active);
          setTimeout(() => setactive(false), timeout);
        }}
      />
      {label && iconAlign == "left" && <Text>{label}</Text>}
    </div>
  );
};

export default CopyClipboard;
