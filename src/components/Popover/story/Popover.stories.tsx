import React, { useCallback, useEffect, useState } from "react";
import Popover from "../Popover";
import { Card, Button, Modal, Text } from "../..";
import { TextField } from "../../Form";
import { FlexLayout, Select } from "../../..";
import ChoiceList from "../../ChoiceList/ChoiceList";
import PopoverDoc from "../Document/PopoverDoc";

export default {
  title: "Components/Overlays/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>A popover is a layer that pops up over all other elements on a page. They let merchants access additional content and actions without cluttering the page.</h4></div><div class='inte - flex__item'><p><blockquote>The Popover component shows floating content in relation to a target.</blockquote></p></div></div>",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=2109-169927&t=tzMhm7j5DhR6wij0-0",
    },
  },
  argTypes: {
    isOpen: {
      description: "Show or hide the Popover",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    activator: {
      description: "This element on which popover triggers",
      control: {
        disable: true,
      },
      default: {
        description: "This element on which popover triggers",
      },
    },
    popoverWidth: {
      description: "Here you can change popover width",
      control: {
        type: "number",
      },
      defaultValue: 250,
    },
    isCloseOnEsc: {
      description: "Esc key press then close popover",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    customClass: {
      description: "Add customClass in popover",
      control: {
        type: "text",
      },
      defaultValue:''
    },
    customRef: {
      description:
        "Takes a callback and that will be called with the HTML element as a parameter",
    },
    direction: {
      description:
        "Here you can change popover open direction as left or right but default show left side",
      control: {
        type: "radio",
        options: ["left", "right", "auto"],
      },
      defaultValue: "auto",
    },
    onClose: {
      description:
        "onClose is a callback function that is triggered when a component or element is closed or dismissed.",
      control: {
        type: "function",
      },
    },
    [`children`]: {
      description: "Popover Accept string or React Node",
      required: true,
      control: {
        disable: true,
      },
    },
    heading: {
      description: "This heading props is working on mobile device",
      control: {
        disable: true,
      },
    },
  },
};

const Template = ({ ...rest }) => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [value, setvalue] = useState<any>([]);
  const [choiceValue, setChoiceValue] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleChoiceList = () => {
    setOpen((prev) => !prev);
  };

  const activator = (
    <Button
      ariaExpanded={!show ? false : true}
      type="outlined"
      onClick={toggleChoiceList}
    >
      ChoiceList
    </Button>
  );

  const options = [
    {
      label: "Choice 1",
      value: "Choice 1",
    },
    {
      label: "Choice 2",
      value: "Choice 2",
    },
    {
      label: "Choice 3",
      value: "Choice 3",
    },
    {
      label: "Choice 4",
      value: "Choice 4",
    },
    {
      label: "Choice 5",
      value: "Choice 5",
    },
    {
      label: "Choice 6",
      value: "Choice 6",
    },
  ];
  const [value1, setValue1] = useState("");
  const onSelectChange = useCallback(
    (val: any) => {
      setValue1(val);
    },
    [value1]
  );

  useEffect(() => {
    setShow(rest.isOpen);
  }, [rest.isOpen]);

  return (
    <Card customClass="popover-custom">
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <TextField />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eos
          nisi neque perferendis reiciendis quibusdam laboriosam animi similique
          quas voluptate! Repellendus voluptate possimus similique numquam
          perferendis quo fuga impedit eos. Aliquam quibusdam repudiandae et. Et
          eius facere, ipsum praesentium laudantium consectetur cum expedita in
          itatibus labore explicabo aliquid voluptatibus obcaecati facere!
        </Text>
      </Modal>
      <FlexLayout spacing="loose" halign="center">
        <Popover
          {...rest}
          isOpen={show}
          heading="Popover Heading"
          onClose={() => {
            setShow(false);
            setOpen(false);
          }}
          activator={
            <Button
              type="outlined"
              iconAlign="right"
              disclosure
              onClick={() => setShow(!show)}
              ariaExpanded={!show ? false : true}
            >
              Popover
            </Button>
          }
          popoverWidth={rest.popoverWidth}
        >
          <FlexLayout direction="vertical" spacing="loose">
            <Button
              content="Clicked"
              onClick={() => setShowModal(!showModal)}
            ></Button>
            <TextField
              type="text"
              label="Name"
              placeHolder={"Placeholder"}
              value={value}
              onChange={(data) => setvalue(data)}
            />
            <TextField
              type="text"
              label="Name"
              placeHolder={"Placeholder"}
              value={value}
              onChange={(data) => setvalue(data)}
            />
            <TextField
              type="text"
              label="Name"
              placeHolder={"Placeholder"}
              value={value}
              onChange={(data) => setvalue(data)}
            />{" "}
            <TextField
              type="text"
              label="Name"
              placeHolder={"Placeholder"}
              value={value}
              onChange={(data) => setvalue(data)}
            />{" "}
            <TextField
              type="text"
              label="Name"
              placeHolder={"Placeholder"}
              value={value}
              onChange={(data) => setvalue(data)}
            />{" "}
            <TextField
              type="text"
              label="Name"
              placeHolder={"Placeholder"}
              value={value}
              onChange={(data) => setvalue(data)}
            />{" "}
            <TextField
              type="text"
              label="Name"
              placeHolder={"Placeholder"}
              value={value}
              onChange={(data) => setvalue(data)}
            />{" "}
            <TextField
              type="text"
              label="Name"
              placeHolder={"Placeholder"}
              value={value}
              onChange={(data) => setvalue(data)}
            />{" "}
            <TextField
              type="text"
              label="Name"
              placeHolder={"Placeholder"}
              value={value}
              onChange={(data) => setvalue(data)}
            />
            <Select
              value={value1}
              onChange={onSelectChange}
              options={options}
            />
            <ChoiceList
              value={value}
              title={rest.title}
              activator={activator}
              isOpen={open}
              options={options}
              isMulti={rest.multi}
              onChange={(val: any) => {
                setChoiceValue(value);
              }}
              onClose={() => setOpen(false)}
            />
            <FlexLayout halign="end" spacing="mediumTight">
              <Button size="extraThin" type="secondary">
                Cancel
              </Button>
              <Button size="extraThin">Save</Button>
            </FlexLayout>
          </FlexLayout>
        </Popover>
      </FlexLayout>
    </Card>
  );
};

export const Primary = Template.bind({});

export function Documentation() {
  return <PopoverDoc />;
}
