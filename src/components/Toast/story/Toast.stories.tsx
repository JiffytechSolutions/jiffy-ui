import React, { useState } from "react";
import Button from "../../Button/Button";
import { Card, FlexLayout } from "../..";
import * as Icon from "../../../storybook/Foundation/Icons/Icons";
import useToast from "../useToast";
import AppProvider from "../../../utilities/context/AppContext";
import Toast from "../component/Toast";
import ToastDoc from "../Document/ToastDoc";
const allIcons: any = { ...Icon };
export default {
  title: "Components/Feedback/Toast",
  component: Toast,
  decorators: [
    (Story: any) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
  ],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=6026-293435&t=fwx7SHLr0Vi8Wxq1-0",
    },
  },
  argTypes: {
    message: {
      description: `Message to be displayed inside toast (<b style="color:red">required</b>)`,
      control: {
        type: "text",
      },
      defaultValue: "Welcome",
    },
    description: {
      description: "Description to be displayed inside toast",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    type: {
      description: "Toast type",
      control: {
        type: "radio",
        options: ["default", "success", "error"],
      },
      defaultValue: "default",
    },
    timeout: {
      description: "set timer for toast",
      control: {
        type: "number",
      },
      defaultValue: 3000,
    },
    icon: {
      description: "set icon beside help text",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Wind",
    },
    showProgressBar: {
      description: `Show progress bar if this prop is true (<b>progress will decrease with time</b>)`,
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isPauseOnHover: {
      description: "Pause the toast time while hovering the toast",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    onUndo: {
      description: "callback function , when undo is clicked",
      control: {
        type: "function",
        disable: true,
      },
    },
    hasDestroyIcon: {
      description: "Close toast on button click",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    customClass: {
      description: "Add custom class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  const showToast = useToast();
  return (
    <Card title="Primary Toast">
      <Button
        onClick={() =>
          showToast({
            description: rest.description,
            showProgressBar: rest.showProgressBar,
            message: rest.message,
            timeout: rest.timeout,
            hasDestroyIcon: rest.hasDestroyIcon,
            customClass: rest.customClass,
            type: rest.type,
            isPauseOnHover: rest.isPauseOnHover,
            icon: allIcons[rest.icon]({
              size: 20,
              color: "var(--inte-G0)",
            }),
          })
        }
      >
        click
      </Button>
    </Card>
  );
};
export const Primary = Template.bind({});
// Types of toast
export const Types: any = Template.bind({});
Types.decorators = [
  () => {
    const showToast = useToast();
    return (
      <Card title="Toast types">
        <FlexLayout spacing="loose">
          <Button
            onClick={() => {
              showToast({
                message: "This is default toast",
                type: "default",
              });
            }}
            type="primary"
          >
            Default
          </Button>
          <Button
            onClick={() => {
              showToast({
                message: "This is success toast",
                type: "success",
              });
            }}
            type="primary"
          >
            Success
          </Button>
          <Button
            onClick={() => {
              showToast({
                message: "This is error toast",
                type: "error",
              });
            }}
            type="primary"
          >
            error
          </Button>
        </FlexLayout>
      </Card>
    );
  },
];
// Simple toast
export const simple_toast: any = Template.bind({});
simple_toast.decorators = [
  () => {
    const showToast = useToast();
    return (
      <Card title="Simple Toast">
        <Button
          onClick={() => {
            showToast({
              message: "This is Simple Toast",
              hasDestroyIcon: false,
            });
          }}
        >
          Simple Toast
        </Button>
      </Card>
    );
  },
];
// With icon
export const toast_with_icon: any = Template.bind({});
toast_with_icon.decorators = [
  () => {
    const showToast = useToast();
    return (
      <Card title="Toast With Icon">
        <Button
          onClick={() => {
            showToast({
              message: "Toast with icon",
              icon: <Icon.Home size={20} />,
              hasDestroyIcon: false,
            });
          }}
        >
          Click
        </Button>
      </Card>
    );
  },
];
// With icon and description
export const toast_with_icon_and_description: any = Template.bind({});
toast_with_icon_and_description.decorators = [
  () => {
    const showToast = useToast();
    return (
      <Card title="Toast With Icon and Description">
        <Button
          onClick={() => {
            showToast({
              message: "Toast",
              icon: <Icon.Home size={20} />,
              description: "Toast with description",
              hasDestroyIcon: false,
            });
          }}
        >
          Click
        </Button>
      </Card>
    );
  },
];
// With destroy
export const toast_with_destroy: any = Template.bind({});
toast_with_destroy.decorators = [
  () => {
    const showToast = useToast();
    return (
      <Card title="Toast With destroy">
        <Button
          onClick={() => {
            showToast({
              message: "Toast with destroy",
              hasDestroyIcon: true,
            });
          }}
        >
          Click
        </Button>
      </Card>
    );
  },
];
// With reversible action
export const toast_with_reversible_action: any = Template.bind({});
toast_with_reversible_action.decorators = [
  () => {
    const showToast = useToast();
    return (
      <Card title="Toast with reversible action">
        <>
          <Button
            onClick={() =>
              showToast({
                message: "Toast with Reversible action",
                onUndo: () =>
                  showToast({ message: "toast undo button clicked" }),
                hasDestroyIcon: false,
              })
            }
          >
            Click
          </Button>
        </>
      </Card>
    );
  },
];
// With animation
export const toast_with_animation: any = Template.bind({});
toast_with_animation.decorators = [
  () => {
    const showToast = useToast();
    return (
      <Card title="Toast with Animation">
        <Button
          onClick={() => {
            showToast({
              message: "Toast with Animation",
              timeout: 5000,
              showProgressBar: true,
            });
          }}
        >
          Click
        </Button>
      </Card>
    );
  },
];
// Pause on hover
export const toast_with_pauseOnHover: any = Template.bind({});
toast_with_pauseOnHover.decorators = [
  () => {
    const showToast = useToast();
    return (
      <Card title="Toast with pause on hover">
        <Button
          onClick={() => {
            showToast({
              message: "Toast with pause on hover",
              timeout: 5000,
              isPauseOnHover: true,
              showProgressBar: true,
            });
          }}
        >
          Click
        </Button>
      </Card>
    );
  },
];
// With all features
export const toast_with_all_features: any = Template.bind({});
toast_with_all_features.decorators = [
  () => {
    const showToast = useToast();
    const [t, setT] = useState(5000);
    return (
      <Card title="Toast with all features">
        <Button
          onClick={() => {
            showToast({
              message: "Toast with All Features",
              description: "Toast having description",
              icon: <Icon.Home size={20} />,
              timeout: t,
              showProgressBar: true,
              onUndo: () => {
                showToast({
                  type: "success",
                  timeout: 3000,
                  message: "Undo clicked",
                  icon: <Icon.Home size={20} />,
                  showProgressBar: true,
                });
              },
              hasDestroyIcon: true,
              isPauseOnHover: true,
            });
          }}
        >
          Click
        </Button>
      </Card>
    );
  },
];
export function Documentation() {
  return <ToastDoc />;
}
