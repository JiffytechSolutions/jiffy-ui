import React, { useState } from "react";
import {
  User,
  UserCheck,
  Logout,
  Bell,
  Settings,
} from "../../../storybook/Foundation/Icons/Icons";
import ActionList from "../../ActionList/ActionList";
import Button from "../../Button/Button";
import { Card } from "../../Card";
import { FlexLayout } from "../../FlexLayout";
import Popover from "../../Popover/Popover";
import AppBar from "../AppBar";
import AppBarDoc from "../Document/AppBarDoc";
import { logo, mobileLogo } from "./logo";

export default {
  title: "Components/Layout/AppBar",
  component: AppBar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=5984-312505&t=vybTUvZSW4IIqAUa-0",
    },
  },
  argTypes: {
    connectLeft: {
      name: "connectLeft",
      description: "Placed on left side of App Bar",
      control: {
        type: "text",
        disable: true,
      },
    },
    connectRight: {
      name: "connectRight",
      description: "Placed on right side of App Bar",
      control: {
        type: "text",
        disable: true,
      },
    },
    customClass: {
      description: "Add custom class",
      control: {
        type: "text",
      },
      defaultValue: "custom_class",
    },
    stickyTop: {
      description: "Fix at the top",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
};

const CustomActionList = () => {
  const [active, setActive] = useState(false);

  return (
    <ActionList
      onClose={() => setActive(false)}
      activator={
        <Button
          type="outlined"
          onClick={() => setActive(!active)}
          icon={<User size="20" />}
        ></Button>
      }
      isOpen={active}
      options={[
        {
          items: [
            {
              content: "Profile",
              prefixIcon: <UserCheck size="20" />,
              onClick: () => alert("Hello 1"),
            },
            {
              content: "Settings",
              prefixIcon: <Settings size="20" />,
              onClick: () => alert("Hello 1"),
            },
            {
              content: "Logout",
              destructive: true,
              prefixIcon: <Logout size="20" color="var(--inte-R400)" />,
              onClick: () => alert("Hello 1"),
            },
          ],
        },
      ]}
    />
  );
};

const CustomPopover = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      isOpen={open}
      onClose={() => setOpen(false)}
      activator={
        <Button
          type="outlined"
          onClick={() => setOpen(!open)}
          icon={<Bell size={20} />}
        />
      }
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sequi
        nemo excepturi ullam officiis vel quod! Nemo sapiente facere eius?
      </div>
    </Popover>
  );
};

const Template = ({ ...rest }) => {
  return (
    <Card>
      <AppBar
        {...rest}
        connectLeft={logo}
        connectRight={
          <FlexLayout spacing="tight">
            <CustomPopover />
            <CustomActionList />
          </FlexLayout>
        }
      />
    </Card>
  );
};

export const Primary = Template.bind({});

export const AppBarWithoutLogo: any = Template.bind({});
AppBarWithoutLogo.decorators = [
  () => (
    <AppBar
      connectRight={
        <FlexLayout spacing="tight">
          <CustomPopover />
          <CustomActionList />
        </FlexLayout>
      }
    />
  ),
];

export const AppBarWithoutConnectedRight: any = Template.bind({});
AppBarWithoutConnectedRight.decorators = [() => <AppBar connectLeft={logo} />];
export function Documentation() {
  return <AppBarDoc />;
}
