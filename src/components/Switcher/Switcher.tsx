import React, { useId } from "react";
import { classnames } from "../../utilities/globalFunction";
import "./Switcher.css";

function Switcher(props: SwitcherI): JSX.Element {
  const { checked, onChange, label, isDisabled = false } = props;

  const rId = useId();
  return (
    <div
      className={classnames({
        "jf-toggle__wrapper": true,
        "jf-toggle--disabled": isDisabled,
      })}
    >
      <label htmlFor={`jf-toggle-${rId}`}>
        <input
          id={`jf-toggle-${rId}`}
          disabled={isDisabled}
          aria-label={`jf-toggle-${rId}`}
          type="checkbox"
          className="jf-toggle"
          checked={checked}
          onChange={() => onChange?.(!checked)}
        ></input>
        {label && <span className="jf-toggle__text">{label}</span>}
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