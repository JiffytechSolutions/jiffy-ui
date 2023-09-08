import React, { useState } from "react";
import { Card } from "../../Card";
import RangeSlider from "../RangeSlider";
import RangeSliderDoc from "../Document/RangeSliderDoc";

export default {
  title: "Components/Behaviour/RangeSlider",
  component: RangeSlider,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=1560-100597&t=tzMhm7j5DhR6wij0-0",
    },
  },
  argTypes: {
    min: {
      description: "The minimum value the slider can slide to",
      control: {
        type: "number",
      },
      defaultValue: 1,
    },
    max: {
      description: "The maximum value the slider can slide to",
      control: {
        type: "number",
      },
      defaultValue: 100,
    },
    value: {
      description:
        "The value of slider. When range is false, use number, otherwise, use [number, number]",
      control: {
        type: true,
      },
    },
    step: {
      description:
        "The slider can step through values. Must greater than 0, and be divided by (max - min) . When marks no null, step can be null",
      control: {
        type: "number",
      },
      defaultValue: 1,
    },
    isRange: {
      description:
        "Dual thumb mode and pass range value true or false , default value false",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isDisable: {
      description: "Add Label in Range Slider",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    onChange: {
      description:
        "Callback function that is fired when the user changes the slider's value",
      control: {
        type: "function",
      },
    },
    label: {
      description: "Add Label in Range Slider",
      control: {
        type: "text",
      },
      defaultValue: "Label",
    },
    toolTip: {
      description:
        "Here tooltip is a boolean prop when tooltip prop is used the passed value is true then tooltip shows. But here the default value is false",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    id: {
      description: "You can pass / add id string or number",
      control: {
        type: true,
      },
    },
    customClass: {
      description:
        "You can add extra class in range slider using props customClass",
      control: {
        type: true,
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const [single, setSingle] = useState(16);
  function singleRange(e: number) {
    setSingle(e);
    // console.log(e, "ele");
  }

  const [double, setDouble] = useState<[number, number]>([20, 60]);
  function doubleRange(e: any) {
    setDouble(e);
    // console.log(e, "ele");
  }

  return (
    <>
      {rest.isRange ? (
        <Card
          title={`Min: ${rest.min}, Max: ${rest.max}, step: ${rest.step}, Current-Value: [${double[0]}, ${double[1]}]`}
          cardType="bordered"
        >
          <RangeSlider
            toolTip={rest.toolTip}
            isRange={rest.isRange}
            isDisable={rest.isDisable}
            min={rest.min}
            max={rest.max}
            step={rest.step}
            label={rest.label}
            value={double}
            onChange={function (value: [number, number]): void {
              doubleRange(value);
            }}
          />
        </Card>
      ) : (
        <Card
          title={`Min: 1, Max:100, step:1, Value:${single}`}
          cardType="bordered"
        >
          <RangeSlider
            isRange={rest.isRange}
            toolTip={rest.toolTip}
            isDisable={rest.isDisable}
            min={rest.min}
            max={rest.max}
            label={rest.label}
            onChange={singleRange}
            step={rest.step}
            value={single}
          />
        </Card>
      )}
    </>
  );
};

export const Primary = Template.bind({});
// Single Range Slider
export const Single_Range_Slider: any = Template.bind({});
Single_Range_Slider.decorators = [
  () => {
    const [singleVal, setSingleVal] = useState(41);
    const singleRange = (value: number) => {
      setSingleVal(value);
    };
    return (
      <Card cardType="bordered">
        <RangeSlider
          label="Label"
          isDisable={false}
          value={singleVal}
          min={1}
          max={200}
          step={1}
          onChange={singleRange}
        />
      </Card>
    );
  },
];

// Double Range Slider
export const Double_Range_Slider: any = Template.bind({});
Double_Range_Slider.decorators = [
  () => {
    const [rangeVal, setRangeVal] = useState<[number, number]>([31, 61]);
    const doubleRange = (values: any) => {
      setRangeVal(values);
    };

    return (
      <Card cardType="bordered">
        <RangeSlider
          label="Label"
          isRange={true}
          isDisable={false}
          min={1}
          max={100}
          step={1}
          onChange={doubleRange}
          value={[rangeVal[0], rangeVal[1]]}
        />
      </Card>
    );
  },
];

// Decimal Range Slider value
export const Decimal_Range_Slider_Value: any = Template.bind({});
Decimal_Range_Slider_Value.decorators = [
  () => {
    const [rangeVal, setRangeVal] = useState<[number, number]>([12000, 30000]);
    const doubleRange = (values: any) => {
      setRangeVal(values);
    };
    const [singleVal, setSingleVal] = useState(15000);
    const singleRange = (value: number) => {
      setSingleVal(value);
    };
    return (
      <Card title="Range Slider With Decimal Value">
        <Card
          cardType="bordered"
          title="Min: 1, Max: 50000.9867, step: 1, Range-Value: 15,000"
        >
          <RangeSlider
            label="Label"
            isDisable={false}
            value={singleVal}
            min={1}
            max={50000.9867}
            step={1}
            onChange={singleRange}
          />
        </Card>
        <br />
        <Card
          cardType="bordered"
          title="Min: 1, Max: 50000.9867, step: 1, Range-Value: [12,000  30,000]"
        >
          <RangeSlider
            label="Label"
            isRange={true}
            isDisable={false}
            min={1}
            max={50000.9867}
            step={1}
            onChange={doubleRange}
            value={[rangeVal[0], rangeVal[1]]}
          />
        </Card>
      </Card>
    );
  },
];

// Single Range Slider Disabled
export const Single_Range_Slider_Disabled: any = Template.bind({});
Single_Range_Slider_Disabled.decorators = [
  () => {
    const [singleVal, setSingleVal] = useState(41);
    const singleRange = (value: number) => {
      setSingleVal(value);
    };
    return (
      <Card cardType="bordered">
        <RangeSlider
          label="Label"
          isDisable={true}
          value={singleVal}
          min={1}
          max={200}
          step={1}
          onChange={singleRange}
        />
      </Card>
    );
  },
];

// Double Range Slider Disabled
export const Double_Range_Slider_Disabled: any = Template.bind({});
Double_Range_Slider_Disabled.decorators = [
  () => {
    const [rangeVal, setRangeVal] = useState<[number, number]>([31, 61]);
    const doubleRange = (values: any) => {
      setRangeVal(values);
    };

    return (
      <Card cardType="bordered">
        <RangeSlider
          label="Label"
          isRange={true}
          isDisable={true}
          min={1}
          max={100}
          step={1}
          onChange={doubleRange}
          value={[rangeVal[0], rangeVal[1]]}
        />
      </Card>
    );
  },
];

// Single Range Slider Step
export const Single_Range_Slider_Step: any = Template.bind({});
Single_Range_Slider_Step.decorators = [
  () => {
    const [singleVal, setSingleVal] = useState(71);
    const singleRange = (value: number) => {
      setSingleVal(value);
    };

    return (
      <Card
        cardType="bordered"
        title="Range slider step value 5, but you can change step value"
      >
        <RangeSlider
          label="Label"
          value={singleVal}
          min={1}
          max={100}
          step={5}
          onChange={singleRange}
        />
      </Card>
    );
  },
];

// Double Range Slider step
export const Double_Range_Slider_Step: any = Template.bind({});
Double_Range_Slider_Step.decorators = [
  () => {
    const [rangeVal, setRangeVal] = useState<[number, number]>([26, 76]);
    const doubleRange = (values: any) => {
      setRangeVal(values);
    };

    return (
      <Card
        cardType="bordered"
        title="Range slider step value 5, but you can change step value"
      >
        <RangeSlider
          label="Label"
          isRange={true}
          min={1}
          max={100}
          step={5}
          onChange={doubleRange}
          value={[rangeVal[0], rangeVal[1]]}
        />
      </Card>
    );
  },
];

//  Range Slider with  tooltip
export const Range_Slider_With__Tooltip: any = Template.bind({});
Range_Slider_With__Tooltip.decorators = [
  () => {
    const [rangeVal, setRangeVal] = useState<[number, number]>([20, 40]);
    const doubleRange = (values: any) => {
      setRangeVal(values);
    };
    const [singleVal, setSingleVal] = useState(15);
    const singleRange = (value: number) => {
      setSingleVal(value);
    };
    return (
      <Card title="Range Slider With Decimal Value">
        <Card
          cardType="bordered"
          title="Min: 1, Max: 10, step: 1, Range-Value: 15"
        >
          <RangeSlider
            toolTip={true}
            label="Label"
            isDisable={false}
            value={singleVal}
            min={1}
            max={100}
            step={1}
            onChange={singleRange}
          />
        </Card>
        <br />
        <Card
          cardType="bordered"
          title="Min: 1, Max: 100, step: 1, Range-Value: [20  40]"
        >
          <RangeSlider
            label="Label"
            toolTip={true}
            isRange={true}
            isDisable={false}
            min={1}
            max={100}
            step={1}
            onChange={doubleRange}
            value={[rangeVal[0], rangeVal[1]]}
          />
        </Card>
      </Card>
    );
  },
];

export function Documentation() {
  return <RangeSliderDoc />;
}
