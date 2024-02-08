import React, { useState } from "react";
import { FilterIcon } from "../../../storybook/Foundation/Icons/Icons";
import Button from "../../Button/Button";
import { FormElement, Select, TextField } from "../../Form";
import Checkbox from "../../Form/Checkbox/Checkbox";
import Filter from "../Filter";

const initialState = {
  badgeCount: { status: 0, sales: 0, metrics: 0, budget: 0 },
  value: {
    status: "",
    sales: {
      selectValue: "",
      textValue: "",
    },
    metrics: {
      finish: false,
      warning: false,
      error: false,
      pending: false,
    },
  },
};

const Custom = ({ ...rest }) => {
  const [badgeCount, setBadgeCount] = useState(initialState.badgeCount);

  const [value, setValue] = useState(initialState.value);

  const [open, setOpen] = useState(false);

  const handleSelectChange = () => {};

  const handelCheckboxChange = (
    key: "finish" | "warning" | "error" | "pending",
    state: boolean
  ) => {
    if (state)
      setBadgeCount({ ...badgeCount, metrics: badgeCount.metrics + 1 });
    else setBadgeCount({ ...badgeCount, metrics: badgeCount.metrics - 1 });
    let metrics: any = { ...value.metrics };
    metrics[key] = state;
    setValue({ ...value, metrics: metrics });
  };

  const handelTextFieldChange = (val: string) => {
    let newSales = { ...value.sales };
    if (val.length) setBadgeCount({ ...badgeCount, sales: 1 });
    else setBadgeCount({ ...badgeCount, sales: 0 });

    newSales.textValue = val;
    setValue({ ...value, sales: newSales });
  };

  const handleClearAll = () => {
    setBadgeCount(initialState.badgeCount);
    setValue(initialState.value);
    setOpen(false);
  };

  const clearMetricsFilter = () => {
    setValue((prev) => ({ ...prev, metrics: initialState.value.metrics }));
    setBadgeCount((prev) => ({ ...prev, metrics: 0 }));
  };

  const clearSalesFilter = () => {
    setValue((prev) => ({ ...prev, sales: initialState.value.sales }));
    setBadgeCount((prev) => ({ ...prev, sales: 0 }));
  };

  const clearStatusFilter = () => {
    setValue((prev) => ({ ...prev, status: initialState.value.status }));
    setBadgeCount((prev) => ({ ...prev, status: 0 }));
  };

  const testFilter = [
    {
      key: "status",
      label: "Status Hello",
      badgeCount: badgeCount.status,
      children: <SelectRender value="" onChange={handleSelectChange} />,
      isApplied: badgeCount.status > 0,
      onRemove: clearStatusFilter,
    },
    {
      key: "sales",
      label: "Sales hello",
      badgeCount: badgeCount.sales,
      children: (
        <FormElement>
          <SelectRender value="" onChange={handleSelectChange} />
          <TextFieldRender
            value={value.sales.textValue}
            onChange={handelTextFieldChange}
          />
          <TextField />
        </FormElement>
      ),
      isApplied: badgeCount.sales > 0,
      onRemove: clearSalesFilter,
    },
    {
      key: "metrics",
      label: "Metrics hello",
      badgeCount: badgeCount.metrics,
      children: (
        <FormElement>
          <CheckBoxRender
            labelVal="Finished"
            value={value.metrics.finish}
            onChange={(state) => handelCheckboxChange("finish", state)}
          />
          <CheckBoxRender
            labelVal="Warning"
            value={value.metrics.warning}
            onChange={(state) => handelCheckboxChange("warning", state)}
          />
          <CheckBoxRender
            labelVal="Error"
            value={value.metrics.error}
            onChange={(state) => handelCheckboxChange("error", state)}
          />
          <CheckBoxRender
            labelVal="Pending"
            value={value.metrics.pending}
            onChange={(state) => handelCheckboxChange("pending", state)}
          />
        </FormElement>
      ),
      isApplied: badgeCount.metrics > 0,
      onRemove: clearMetricsFilter,
    },
  ];

  return (
    <Filter
      {...rest}
      filters={testFilter}
      activator={
        <Button
          type="outlined"
          size="large"
          icon={<FilterIcon size="20" />}
          onClick={() => setOpen((prev) => !open)}
        >
          Filter
        </Button>
      }
      isOpen={open}
      onClose={() => setOpen(false)}
      secondaryAction={{
        children: "Clear All",
        type: "outlined",
        halign: "center",
        isFullWidth: true,
        onClick: () => alert("Clear All button clicked"),
      }}
      primaryAction={{
        children: "Apply",
        halign: "center",
        isFullWidth: true,
        onClick: () => alert("Apply button clicked"),
        isDisabled: true,
      }}
    />
  );
};

interface TextFieldRenderI {
  value?: string;
  onChange?: (e: any) => void;
  labelVal?: string;
}
export function TextFieldRender({ value, onChange }: TextFieldRenderI) {
  const [val, setVal] = useState(value);
  return (
    <TextField
      placeHolder="Enter text"
      value={value ?? val}
      onChange={(e) => {
        onChange && onChange(e);
        setVal(e);
      }}
    />
  );
}
export function SelectRender({ value, onChange }: TextFieldRenderI) {
  const [selected, setSelected] = useState<any>([]);
  return (
    <Select
      value={selected}
      placeHolder="Select Value"
      onChange={(e) => {
        onChange && onChange(e);
        setSelected(e);
      }}
      options={[
        {
          label: "Option 1",
          value: "valuedf",
        },
        {
          label: "Option 2",
          value: "value",
        },
      ]}
    />
  );
}
interface CheckboxRenderI {
  value?: boolean;
  onChange?: (e: any) => void;
  labelVal?: string;
}
export function CheckBoxRender({ labelVal, value, onChange }: CheckboxRenderI) {
  const [val, setVal] = useState(false);
  return (
    <Checkbox
      checked={value ?? val}
      label={labelVal}
      onChange={() => {
        onChange && onChange(!value);
        setVal(!val);
      }}
    />
  );
}

export default Custom;
