import React, { useState } from "react";
import { Modal, Select, Text, TextLink } from "../..";
import Button, { ButtonI } from "../../Button/Button";
import { Card } from "../../Card";
import { FlexLayout } from "../../FlexLayout";
import { FormElement, TextField } from "../../Form";
import * as Icons from "../../../storybook/Foundation/Icons/Icons";
import ModalDoc from "../Document/ModalDoc";
const allIcons: any = { ...Icons };
export default {
  title: "Components/Overlays/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>A modal is a secondary window that communicates or provides an action inside the same process. They’re useful for communicating additional information, collecting information, or directing users without forcing them to leave the page.</h4><p><blockquote>Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content.</blockquote></p></div>",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=6158-277914&t=fwx7SHLr0Vi8Wxq1-0",
    },
  },
  argTypes: {
    id: {
      description: "Add custom Id",
      control: {
        type: "text",
        disable: true,
      },
    },
    isOpen: {
      description: "open modal",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isOverlayClose: {
      description: "Enable Modal close on overlay Click / outside modal click",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    isCloseOnEsc: {
      description: "Enable Modal close on Esc Button click",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    heading: {
      description: "Modal heading",
      control: {
        type: "text",
      },
      defaultValue: "Modal Title",
    },
    headingIcon: {
      description: "Modal Heading with Icon",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Gitlab",
    },
    otpFooter: {
      description: "Modal with otp footer",
      control: {
        disable: true,
      },
    },
    children: {
      description: "Pass what you want to see in modal as children",
      control: {
        type: "any",
      },
    },
    primaryAction: {
      description: "Pass button on primary action",
      control: {
        type: "object",
        disable: true,
      },
    },
    secondaryAction: {
      description: "Pass button on secondary action",
      control: {
        type: "object",
        disable: true,
      },
    },
    tertiaryAction: {
      description: "Pass button on tertiary action",
      control: {
        type: "object",
        disable: true,
      },
    },
    modalSize: {
      description: "set modal size",
      control: {
        type: "radio",
        options: ["small", "medium", "large", "xLarge"],
      },
      defaultValue: "medium",
    },
    onClose: {
      description: "On modal close",
      control: {
        type: "function",
        disable: true,
      },
    },
    customClass: {
      description: "Modal extra Class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  const [open1, toggleModal1] = useState(true);
  const primaryAction1 = {
    loading: false,
    content: "Proceed",
    onClick: () => {
      alert("Conngratulations You proceeded :)");
      toggleModal1(!open1);
    },
  };
  const secondaryAction1 = {
    content: "Close",
    loading: false,
    onClick: () => {
      toggleModal1(!open1);
    },
  };
  const tertiaryAction1 = {
    content: "Read More",
    onClick: () => {
      alert("Read More Action triggred");
    },
  };
  const [value1, setValue] = useState("");
  function onSelectChange(val: React.SetStateAction<string>) {
    setValue(val);
  }
  return (
    <>
      <Card title={"Modal"}>
        <FlexLayout spacing="loose">
          <Button onClick={() => toggleModal1(!open1)}>Modal</Button>
        </FlexLayout>
      </Card>
      <Modal
        headingIcon={allIcons[rest.headingIcon]({
          size: `24`,
          color: `var(--inte-G800)`,
        })}
        modalSize={rest.modalSize}
        customClass={rest.customClass}
        isOpen={!open1 || rest.open}
        heading={rest.heading}
        isOverlayClose={rest.isOverlayClose}
        isCloseOnEsc={rest.isCloseOnEsc}
        primaryAction={primaryAction1}
        secondaryAction={secondaryAction1}
        tertiaryAction={tertiaryAction1}
        onClose={() => {
          toggleModal1(!open1);
        }}
      >
        <FormElement>
          <Select
            value={value1}
            onChange={(e) => {
              onSelectChange(e);
            }}
            label="Select Options"
            options={[
              {
                label: "Option 1",
                value: "value 1",
              },
              {
                label: "Option 2",
                value: "value 2",
              },
              {
                label: "Option 3",
                value: "value 3",
              },
            ]}
          />
        </FormElement>
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
// Size
export const ModalSize: any = Template.bind({});
ModalSize.decorators = [
  () => {
    const [open1, toggleModal1] = useState(true);
    const [open2, toggleModal2] = useState(true);
    const [open3, toggleModal3] = useState(true);
    const [open4, toggleModal4] = useState(true);

    const primaryAction1 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
        toggleModal1(!open1);
      },
    };
    const secondaryAction1 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal1(!open1);
      },
    };

    const primaryAction2 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
        toggleModal2(!open2);
      },
    };
    const secondaryAction2 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal2(!open2);
      },
    };

    const primaryAction3 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
        toggleModal3(!open3);
      },
    };
    const secondaryAction3 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal3(!open3);
      },
    };
    const primaryAction4 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
        toggleModal4(!open4);
      },
    };
    const secondaryAction4 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal4(!open4);
      },
    };

    return (
      <>
        <Card>
          <FlexLayout spacing="loose" wrap="wrap">
            <Button onClick={() => toggleModal1(!open1)}>Small Modal</Button>
            <Button onClick={() => toggleModal2(!open3)}>Medium Modal</Button>
            <Button onClick={() => toggleModal3(!open3)}>Large Modal</Button>
            <Button onClick={() => toggleModal4(!open4)}>
              Extra Large Modal
            </Button>
          </FlexLayout>
        </Card>
        <Modal
          modalSize="small"
          isOpen={!open1}
          heading={"Small Modal Size"}
          primaryAction={primaryAction1}
          secondaryAction={secondaryAction1}
          onClose={() => {
            toggleModal1(!open1);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <Icons.AlertOctagon size={20} color="rgb(178, 140, 53)" />
            <FlexLayout spacing="extraTight" wrap="wrap">
              <Text as="h2" fontweight="bold">
                Small Modal Size
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
        <Modal
          modalSize="medium"
          isOpen={!open2}
          heading={"Modal Size Medium"}
          primaryAction={primaryAction2}
          secondaryAction={secondaryAction2}
          onClose={() => {
            toggleModal2(!open2);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <Icons.AlertOctagon size={20} color="rgb(178, 140, 53)" />
            <FlexLayout spacing="extraTight"  wrap="wrap">
              <Text as="h2" fontweight="bold">
                Modal Size Medium
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
        <Modal
          modalSize="large"
          isOpen={!open3}
          heading={"Modal Size Large"}
          primaryAction={primaryAction3}
          secondaryAction={secondaryAction3}
          onClose={() => {
            toggleModal3(!open3);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <Icons.AlertOctagon size={20} color="rgb(178, 140, 53)" />
            <FlexLayout spacing="extraTight"  wrap="wrap">
              <Text as="h2" fontweight="bold">
                Modal Size Large
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
        <Modal
          modalSize="xLarge"
          isOpen={!open4}
          heading={"Modal Size Extra Large"}
          primaryAction={primaryAction4}
          secondaryAction={secondaryAction4}
          onClose={() => {
            toggleModal4(!open4);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <Icons.AlertOctagon size={20} color="rgb(178, 140, 53)" />
            <FlexLayout spacing="extraTight"  wrap="wrap">
              <Text as="h2" fontweight="bold">
                Modal Size Extra Large
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </>
    );
  },
];
// PrimaryAction
export const ModalWithPrimaryAction: any = Template.bind({});
ModalWithPrimaryAction.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const primaryAction1 = {
      loading: false,
      content: "Proceed",
      onClick: () => {
        alert("Conngratulations You proceeded :)");
        toggleModal3(!open3);
      },
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          isOpen={!open3}
          heading={"Modal with Primary Action"}
          primaryAction={primaryAction1}
          onClose={() => {
            toggleModal3(!open3);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <Icons.AlertOctagon size={20} color="rgb(178, 140, 53)" />
            <FlexLayout spacing="extraTight"  wrap="wrap">
              <Text as="h2" fontweight="bolder">
                Modal With Primary Action Only
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];
//SecondaryAction
export const ModalWithSecondaryAction: any = Template.bind({});
ModalWithSecondaryAction.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const secondaryAction3 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal3(!open3);
      },
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          isOpen={!open3}
          heading={"Modal with Secondary Action"}
          secondaryAction={secondaryAction3}
          onClose={() => {
            toggleModal3(!open3);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <Icons.AlertOctagon size={20} color="rgb(178, 140, 53)" />
            <FlexLayout spacing="extraTight" wrap="wrap">
              <Text as="h2" fontweight="bold">
                Modal with Secondary Action
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];
//TertiaryAction
export const ModalWithTertiaryAction: any = Template.bind({});
ModalWithTertiaryAction.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const tertiaryAction1 = {
      content: "Read More",
      onClick: () => {
        alert("Read More Action triggred");
      },
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          isOpen={!open3}
          heading={"Modal with Tertiary Action"}
          tertiaryAction={tertiaryAction1}
          onClose={() => {
            toggleModal3(!open3);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <Icons.AlertOctagon size={20} color="rgb(178, 140, 53)" />
            <FlexLayout spacing="extraTight"  wrap="wrap">
              <Text as="h2" fontweight="bold">
                Modal with Secondary Action
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];
//Without Footer
export const ModalWithoutFooter: any = Template.bind({});
ModalWithoutFooter.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          isOpen={!open3}
          heading={"Modal WithOut Footer "}
          onClose={() => {
            toggleModal3(!open3);
          }}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <Icons.AlertOctagon size={20} color="rgb(178, 140, 53)" />
            <FlexLayout spacing="extraTight"  wrap="wrap">
              <Text as="h2" fontweight="bold">
                Modal Without Footer
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];
//Without Header
export const ModalWithoutHeader: any = Template.bind({});
ModalWithoutHeader.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const secondaryAction3 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal3(!open3);
      },
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          modalSize="large"
          isOpen={!open3}
          onClose={() => {
            toggleModal3(!open3);
          }}
          secondaryAction={secondaryAction3}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <Icons.AlertOctagon size={20} color="rgb(178, 140, 53)" />
            <FlexLayout spacing="extraTight"  wrap="wrap">
              <Text as="h2" fontweight="bold">
                Modal Without Header
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];

// Modal with Title and Icon
export const ModalWithTitleAndIcon: any = Template.bind({});
ModalWithTitleAndIcon.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const secondaryAction3 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal3(!open3);
      },
    };
    const primaryAction3 = {
      content: "Proceed",
      loading: false,
      onClick: () => {
        alert("Proceeded");
        toggleModal3(!open3);
      },
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          headingIcon={<Icons.Github size={20} />}
          heading="Modal With Icon"
          modalSize="small"
          isOpen={!open3}
          onClose={() => {
            toggleModal3(!open3);
          }}
          secondaryAction={secondaryAction3}
          primaryAction={primaryAction3}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <Icons.AlertOctagon size={20} color="rgb(178, 140, 53)" />
            <FlexLayout spacing="extraTight"  wrap="wrap">
              <Text as="h2" fontweight="bold">
                Modal With Header Icon
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];

// Modal without title icon and header icon
export const ModalWithoutTitleIconAndHeaderIcon: any = Template.bind({});
ModalWithoutTitleIconAndHeaderIcon.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const secondaryAction3 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal3(!open3);
      },
    };
    const primaryAction3 = {
      content: "Proceed",
      loading: false,
      onClick: () => {
        alert("Proceeded");
        toggleModal3(!open3);
      },
    };
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          heading="Modal Without title icon"
          modalSize="small"
          isOpen={!open3}
          onClose={() => {
            toggleModal3(!open3);
          }}
          secondaryAction={secondaryAction3}
          primaryAction={primaryAction3}
        >
          <FlexLayout spacing="loose" valign="start" wrap="noWrap">
            <FlexLayout spacing="extraTight"  wrap="wrap">
              <Text as="h2" fontweight="bold">
                Modal Without Header Icon
              </Text>
              <Text textcolor="secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];

// Modal with Danger Action
export const ModalWithDangerAction: any = Template.bind({});
ModalWithDangerAction.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    const secondaryAction3 = {
      content: "Close",
      loading: false,
      onClick: () => {
        toggleModal3(!open3);
      },
    };
    const primaryAction3: ButtonI = {
      content: "Delete",
      type: "danger",
      isLoading: false,
      onClick: () => {
        alert("You Deleted");
        toggleModal3(!open3);
      },
    };
    return (
      <Card>
        <FlexLayout>
          <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
          <Modal
            heading="Modal With danger Action"
            modalSize="small"
            isOpen={!open3}
            onClose={() => {
              toggleModal3(!open3);
            }}
            secondaryAction={secondaryAction3}
            primaryAction={primaryAction3}
          >
            <FlexLayout spacing="loose" valign="start" wrap="noWrap">
              <Icons.AlertOctagon size={20} color={"rgb(178, 140, 53)"} />
              <FlexLayout spacing="extraTight"  wrap="wrap">
                <Text as="h2" fontweight="bold">
                  Modal with Danger Action
                </Text>
                <Text textcolor="secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </FlexLayout>
            </FlexLayout>
          </Modal>
        </FlexLayout>
      </Card>
    );
  },
];
//Otp Modals
export const OtpModal: any = Template.bind({});
OtpModal.decorators = [
  () => {
    const [open3, toggleModal3] = useState(true);
    return (
      <Card>
        <Button onClick={() => toggleModal3(!open3)}> Modal</Button>
        <Modal
          heading="Verify Email Address"
          modalSize="small"
          isOpen={!open3}
          onClose={() => {
            toggleModal3(!open3);
          }}
          otpFooter={
            <FlexLayout spacing="tight" halign="around" valign="center">
              <FlexLayout spacing="mediumTight">
                <TextLink
                  label="Resend One-time passcode"
                  linkType="default"
                  onClick={() => {}}
                  target="_blank"
                  url=""
                />
                <Text textcolor="secondary">(4 attempts left)</Text>
              </FlexLayout>
              <Text> 2:00</Text>
            </FlexLayout>
          }
        >
          <FlexLayout spacing="loose" direction="vertical" wrap="noWrap">
            <Text>
              An email with a verification code has been sent to{" "}
              <Text fontweight="bolder">jondoe@gmail.com.</Text>
            </Text>

            <FlexLayout valign="center" spacing="tight" direction="vertical">
              <FlexLayout halign="center" spacing="mediumTight">
                {["1", "2", "3", "4", "5"].map((items, index: number) => {
                  return <TextField key={index} />;
                })}
              </FlexLayout>
              <Text textcolor="negative">
                Entered One-time passcode is incorrect.
              </Text>
            </FlexLayout>
          </FlexLayout>
        </Modal>
      </Card>
    );
  },
];

export function Documentation() {
  return <ModalDoc />;
}
