import React, { useEffect, useState } from "react";
import { FC } from "react";
import { Check, Copy } from '../../storybook/Foundation/Icons/Icons';
import { Button, FlexLayout} from "..";
import Text from "../Text/Text";

const CopyClipboard: FC<CopyClipboardI> = ({
  value = "",
  label,
  align = "none",
  timeout = 3000,
}: CopyClipboardI): JSX.Element => {
  const [status, setstatus] = useState(false);
  const [active, setactive] = useState(false);
  function copyText(): void {
    !status
      ? navigator.clipboard.writeText(value)
      : navigator.clipboard.writeText("");
  }
  useEffect(() => {
    setTimeout(() => setactive(false), 3000);
  }, []);
  return (
    <>
      <FlexLayout halign={align} valign="center" spacing="loose">
        <Text>{label}</Text>
        <Button
        accessibilityLabel="Copy To Clipboard"
          type="outlined"
          size="extraThin"
          icon={active ? <Check /> : <Copy size={20} />}
          onClick={() => {
            copyText();
            setstatus(!status);
            !status && setactive(!active);
            setTimeout(() => setactive(false), 3000);
          }}
        ></Button>
      </FlexLayout>
    </>
  );
};
export interface CopyClipboardI {
  value?: string | any;
  label?: string | any;
  align?: "fill" | "center" | "end" | "none";
  timeout?: number;
}
export default CopyClipboard;
