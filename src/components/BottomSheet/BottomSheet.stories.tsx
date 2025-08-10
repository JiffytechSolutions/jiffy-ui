import { useState } from "react";

import TextStyle from "../TextStyle/TextStyle";
import BottomSheet from "./BottomSheet";
import Button from "../Button/Button";
import React from "react";
export default {
  title: "components/BottomSheet",
  component: BottomSheet,
  tags: ["autodocs"],
  argTypes: {},
};
const Template = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>

      <Button onClick={() => setIsOpen(true)} children="Open" />
      <BottomSheet isOpen={isOpen} onDismiss={() => setIsOpen(false)} heading="Bottom Sheet">
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
      </BottomSheet>
    </>
  );
};
export const Primary = Template.bind({});
