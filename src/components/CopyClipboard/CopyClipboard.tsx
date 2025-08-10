import React, { useEffect, useState } from "react";
import { FC } from "react";

import  TextStyle  from "../TextStyle/TextStyle";
import  Button  from "../Button/Button";
import { Check, Copy } from "react-feather";
import "./CopyClipboard.css";
export interface CopyClipboardI {
  value: string | any;
  label?: string | any;
  iconAlign?: "left" | "right";
  timeout?: number;
  customClass?: string;
  onClick?: () => void;
}

const CopyClipboard: FC<CopyClipboardI> = ({
  value = "",
  label,
  iconAlign = "right",
  timeout = 3000,
  onClick = () => {
    //
  },
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
  }, [timeout]);
  return (
    <div className="copy-to__clipboard" onClick={onClick}
    >
      {label && iconAlign === "right" && <TextStyle as="p">{label}</TextStyle>}
      <Button
        children=""
        variant="Secondry"
        icon={active ? <Check color="#00A251" size={20} /> : <Copy size={20} />}
        onClick={() => {
          copyText();
          setstatus(!status);
          !status && setactive(!active);
          setTimeout(() => setactive(false), timeout);
        }}
      />
      {label && iconAlign === "left" && <TextStyle as="p">{label}</TextStyle>}
    </div>
  );
};

export default CopyClipboard;
