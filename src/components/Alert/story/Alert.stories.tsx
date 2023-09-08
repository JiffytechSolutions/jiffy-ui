import React from "react";
import { Alert, Card, TextLink, Text } from "../..";
import FlexLayout from "../../FlexLayout/FlexLayout";
import * as Icons from "../../../storybook/Foundation/Icons/Icons"
import { AlertCircle, AlertTriangle, CheckCircle, Info, User } from "../../../storybook/Foundation/Icons/Icons";
import AlertDoc from "../Document/AlertDoc";
const allIcons: any = { ...Icons };



export default {
  title: "Components/Feedback/Alert",
  component: Alert,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=124-9399&t=tb1dL4Z7hEk2Cb1x-0",
    },
  },
  argTypes: {
    type: {
      description: "Set your Alert type",
      control: {
        type: "radio",
        options: ["default", "warning", "success", "danger", "info"],
      },
      defaultValue: "default",
    },
    title: {
      description: "Set your Alert Title",
      control: {
        type: "text",
      },
      defaultValue: "Alert Text Message",
    },
    onClose: {
      description: "Manage onClose Function",
      control: {
        type: "function",
      },
    },
    hasDestroy: {
      description: "Enable Or disable Dismissible Behaviour of Alert",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    icon: {
      description: "Set Button Icon",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "User",
    },
    description: {
      description: "Set the message for the Alert",
      control: {
        type: "text",
      },
      defaultValue:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim",
    },
    primaryAction: {
      description: `Set Primary action  
       <u><strong>Note<span style="color: red;">*</span></strong></u>
          Give Primary Action like this:-
          <pre>
            <code>
               { 
                content:"Primary",
                type: "primary" 
              }
            </code>
          </pre>`,
      control: {
        disable: true
      },
    },
    seconadaryAction: {
      description: `Set Secondary action 
       <u><strong>Note<span style="color: red;">*</span></strong></u>
          Give secondary Action like this:-
          <pre>
            <code>
               { 
                content:"Secondary",
                type: "secondary" 
              }
            </code>
          </pre>`,
      control: {
        disable: true
      },

    },
    customClass: {
      description: "Add a customClass  ",
      control: {
        type: "text",
      },
      defaultValue: ""
    },
  },
};

const destroyf = () => {
  alert("Destroy Clicked!!");
};

const Template = ({ ...rest }: any) => {
  return (
    <Card title="Alerts">
      <Alert
        {...rest}
        onClose={destroyf}
        destroy={rest.destroy}
        icon={allIcons[rest.icon]({
          size: 20,
          color: "red",
        })}
        type={rest.type}

        description={rest.description}
      />


    </Card>
  );
};

export const Primary = Template.bind({});

const type = [
  {
    type: "default",
    icon: <User size='20' />
  },
  {
    type: "info",
    icon: <Info size='20' />
  },
  {
    type: "success",
    icon: <CheckCircle size='20' />
  },
  {
    type: "warning",
    icon: <AlertTriangle size="20" />
  },
  {
    type: "danger",
    icon: <AlertCircle size='15' />
  },

];
// alert Types
export const Types: any = Template.bind({});
Types.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {type.map((item: any, index) => {
          return (
            <Alert key={index} type={item.type} title={"Normal Alert Message."} />
          );
        })}
      </FlexLayout>
    </Card>
  ),
];

//Alert With No actions
export const AlertWithNoActions: any = Template.bind({});
AlertWithNoActions.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {type.map((items: any) => {
          return (
            <Alert icon={items.icon} type={items.type} title={"Normal Alert Message."} />
          )
        })}
      </FlexLayout>
    </Card>
  ),
];
//Alert With heading 
export const AlertWithHeading: any = Template.bind({});
AlertWithHeading.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {
          type.map((items: any) => {
            return (<Alert icon={items.icon} type={items.type} title={"Alert Message."} description={"Alert description."} />)
          })
        }
      </FlexLayout>
    </Card>
  ),
];
//Alert WithPrimaryAction 
export const AlertWithPrimaryAction: any = Template.bind({});
AlertWithPrimaryAction.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {type.map((items: any) => {
          return (
            <Alert icon={items.icon}
              type={items.type}
              title={"Alert Message."}
              description={"Alert descrption."}
              primaryAction={{
                content: "Learn More"
              }}
            />
          )
        })}

      </FlexLayout>
    </Card>
  ),
];
//Alert WithSecondaryAction 
export const AlertWithSecondaryAction: any = Template.bind({});
AlertWithSecondaryAction.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {type.map((items: any) => {
          return (
            <Alert icon={items.icon}
              type={items.type}
              title={"Alert Message."}
              description={"Alert Decription."}
              primaryAction={{
                content: "Learn More"
              }}
              seconadaryAction={{
                content: "Learn More"
              }}
            />
          )
        })}
      </FlexLayout>
    </Card>
  ),
];
//Alert With destroy
export const AlertWithDestroy: any = Template.bind({});
AlertWithDestroy.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {type.map((items: any) => {
          return (
            <Alert icon={items.icon}
              type={items.type}
              hasDestroy
              title={"Alert Message"}
              description={"Alert Description."}
              primaryAction={{
                content: "Learn More"
              }}
              seconadaryAction={{
                content: "Learn More"
              }}
            />
          )
        })}
      </FlexLayout>
    </Card>
  ),
];
//Alert with link
export const AlertWithLink: any = Template.bind({});
AlertWithLink.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose" direction="vertical">
        {type.map((items: any) => {
          return (
            <Alert icon={items.icon}
              type={items.type}
              hasDestroy
              title={<FlexLayout valign="center" spacing="extraTight">
                <Text type="T-7">Alert Message.</Text>
                <TextLink label='Link Here' />
              </FlexLayout>}
            />
          )
        })}
      </FlexLayout>
    </Card>
  ),
];

export function Documentation() {
  return (
    <AlertDoc />
  );
}



