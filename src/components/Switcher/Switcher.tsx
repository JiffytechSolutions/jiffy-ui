import React, { useId } from "react";
import { classnames } from "../../utilities/globalFunction";
import "./Switcher.css";

function Switcher(props: SwitcherI): JSX.Element {
  const { checked, onChange, label, isDisabled = false } = props;

  const rId = useId();
  return (
    <div
      className={classnames({
        "Pixel-toggle__wrapper": true,
        "Pixel-toggle--disabled": isDisabled,
      })}
    >
      <label htmlFor={`Pixel-toggle-${rId}`}>
        <input
          id={`Pixel-toggle-${rId}`}
          disabled={isDisabled}
          aria-label={`Pixel-toggle-${rId}`}
          type="checkbox"
          className="Pixel-toggle"
          checked={checked}
          onChange={() => onChange?.(!checked)}
        ></input>
        {label && <span className="Pixel-toggle__text">{label}</span>}
      </label>
    </div>
  );
}
export interface SwitcherI {
  checked?: boolean;
  onChange?: (newState: boolean) => void;
  label?: React.ReactNode;
  isDisabled?: boolean;
}

export default Switcher;