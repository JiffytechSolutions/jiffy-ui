import { useState } from "react";
import  Button  from "../Button/Button";
import SideSheet from "./SideSheet";
import HorizontalFlex from "../HorizontalFlex/HorizontalFlex";
import TextStyle from "../TextStyle/TextStyle";
import React from "react";

export default {
  title: "components(Done)/SideSheet",
  component: SideSheet,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      description: "Select card type",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    onDismiss: {
      description: "Select card type",
      control: {
        type: "",
      },
      defaultValue: "",
    },
    children: {
      description: "Select card type",
      control: {
        type: "ReactNode",
      },
      defaultValue: "",
    },
    title: {
      description: "Select card type",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    footer: {
      description: "Select card type",
      control: {
        type: "ReactNode",
      },
      defaultValue: "",
    }
  }
};
const Template = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} children="Open" />
      <SideSheet isOpen={isOpen} onDismiss={() => setIsOpen(false)} title={rest.title}
        footer={
          <HorizontalFlex gap={18} align={{
            sm: "center",
            md: "center",
            lg: "spaceAround",
          }}>
            <Button color="Primary" children="Proceed" />
            <Button color="Primary" variant="Secondry" children="cancel" />
          </HorizontalFlex>
        }
      >
        <TextStyle as="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </TextStyle>
      </SideSheet>
    </>
  );
};
export const Primary = Template.bind({});
