import React, { useCallback, useState } from "react";
import ActionList from "../../ActionList/ActionList";
import { Card } from "../../Card";
import { FlexLayout } from "../../FlexLayout";
import Button from "../../Button/Button";
import ButtonGroup from "../ButtonGroup";
import ButtonGroupDoc from "../Document/ButtonGroupDoc";
import Text from "../../Text/Text";

export default {
  title: "Components/Actions/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    segmented: {
      description: "Set whether Segmented or not",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = (rest: any) => {
  return (
    <Card title={"Button Group"}>
      <ButtonGroup {...rest}>
        <Button type="outlined">Button</Button>
        <Button type="outlined">Button</Button>
        <Button type="outlined">Button</Button>
      </ButtonGroup>
    </Card>
  );
};

export const Primary: any = Template.bind({});

//Types Segmented
export const Segmented: any = Template.bind({});
const typessize = [
  "primary",
  "danger",
  "dangerOutlined",
  "secondary",
  "outlined",
];
Segmented.decorators = [
  () => (
    <Card title={"Segmenetd Buttons"}>
      <FlexLayout direction="vertical" spacing="loose">
        {typessize.map((variant: any, index) => (
          <FlexLayout direction="vertical" spacing="extraTight" key={index}>
            <Text fontweight="bolder" type="T-7">
              {variant}
            </Text>
            <ButtonGroup segmented key={index}>
              <Button type={variant}>Button</Button>
              <Button type={variant}>Button</Button>
              <Button type={variant}>Button</Button>
            </ButtonGroup>
          </FlexLayout>
        ))}
      </FlexLayout>
    </Card>
  ),
];

//Types Segmented with ActionList
export const SegmentedWithActionList: any = Template.bind({});
SegmentedWithActionList.decorators = [
  () => {
    const [active, setActive] = useState(false);
    const toggleActive = useCallback(() => setActive((active) => !active), []);
    return (
      <Card title={"Segmented Button With ActionList"}>
        <ButtonGroup segmented>
          <Button type="secondary">Button</Button>
          <Button type="secondary">Button</Button>
          <ActionList
            onClose={toggleActive}
            activator={
              <Button
                type="secondary"
                onClick={toggleActive}
                disclosure
                iconAlign="right"
              >
                Action List
              </Button>
            }
            isOpen={active}
            options={[
              {
                items: [
                  {
                    content: "Action 1",
                    onClick: () => alert("Hello 1"),
                  },
                  {
                    content: "Action 1",
                    onClick: () => alert("Hello 1"),
                  },
                  {
                    content: "Action 1",
                    onClick: () => alert("Hello 1"),
                  },
                ],
              },
            ]}
          />
        </ButtonGroup>
      </Card>
    );
  },
];
export function Documentation() {
  return <ButtonGroupDoc />;
}
