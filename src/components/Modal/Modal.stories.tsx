import { useState } from "react";
import Button from "../Button/Button";
import Modal from "./Modal";
import FlexLayout from "../FlexLayout/FlexLayout";
import TextStyle from "../TextStyle/TextStyle";
import React from "react";

export default {
  title: "components/Modal",
  component: Modal,
  parameters: { docs: { autodocs: true, }, },
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
      <Modal
        isOpen={isOpen} onDismiss={() => setIsOpen(false)} title={'Modal title'}
        // footer={
        //   <FlexLayout gap={12} align={{
        //     sm: "end",
        //     md: "end",
        //     lg: "end",
        //   }}>
        //     <Button color="Primary" children="Proceed" />
        //     <Button color="Primary" variant="Secondry" children="cancel" />
        //   </FlexLayout>
        // }
        primaryAction={{
          children: "Ok",
          color: "Primary",
          isDisabled: false,
          isLoading: false,
          onClick: () => {
            alert("Primary action click1");
          },
        }}
        secondaryAction={{
          children: "Cancel",
          color: "Primary",
          isDisabled: false,
          isLoading: false,
          onClick: () => {
            alert("Secondary action click:)");
          },
        }}
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
      </Modal>
    </>
  );
};
export const Primary = Template.bind({});
