import Dropdown from "./Dropdown";
import Button from "../Button/Button";
import { useRef, useState } from "react";
import VerticalFlex from "../VerticalFlex/VerticalFlex";
import TextField from "../Input/TextField/TextField";
import Checkbox from "../Input/Checkbox/Checkbox";
import Divider from "../Divider/Divider";
import TextStyle from "../TextStyle/TextStyle";
import React from "react";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

const Template = ({ ...rest }) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<any>();
  const handleButtonClick = (event: any) => {
    const container = document.querySelector(".custom-btn");
    if (container && !container.contains(event.target)) {
      setOpen((open) => !open);
    }
  };
  return (
    <>
      {/* <button
        className="custom-btn"
        onClick={() => setOpen((open) => !open)}
        ref={btnRef}
      >
        Click to Open
      </button> */}
      <Button color="Primary" variant="Primary" ref={btnRef} onClick={() => setOpen((open) => !open)}>Click to open Dropdown</Button>
      <Dropdown
        open={open}
        zIndex={100}
        padding={12}
        ref={btnRef}
        onOutsideClick={(e) => handleButtonClick(e)}
      >
        {/* <VerticalFlex gap={20}>
          <Button variant="Tertiary" children="button 1" />
          <Button variant="Tertiary" children="button 2" />
          <Button variant="Tertiary" children="button 3" />
          <Button variant="Tertiary" children="button 4" />
          <Button variant="Tertiary" children="button 5" />
          <Button variant="Tertiary" children="button 6" />
          <Button variant="Tertiary" children="button 7" />
          <Button variant="Tertiary" children="button 8" />
        </VerticalFlex> */}
        <VerticalFlex gap={20}>
          <VerticalFlex gap={2}>
            <TextStyle type="LgHeading" as="h5">Login your account</TextStyle>
            <TextStyle type="LgBody" as="p" textColor="Secondary">Please fill the following details with given details</TextStyle>
          </VerticalFlex>
          <VerticalFlex gap={16}>
            <VerticalFlex gap={10}>
              <TextField type="text" label="User name" placeholder="Enter user name here.." />
              <TextField type="password" label="Password" placeholder="Enter password here.." />
              <Checkbox label="Save my password" />
            </VerticalFlex>
            <Divider thickness={"Thinner"} />
            <Button children="Login" variant="Primary" color="Primary" isFullWidth />
          </VerticalFlex>
        </VerticalFlex>
      </Dropdown>
    </>
  );
};

export const Default = Template.bind({});
