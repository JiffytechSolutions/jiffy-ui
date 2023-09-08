import React from "react";
import ToolTip from "../ToolTip";
import { Button, Card, FlexLayout } from "../..";
import { AlertCircle } from "../../../storybook/Foundation/Icons/Icons";
import TooltipDoc from "../Document/TooltipDoc";

export default {
  title: "Components/Overlays/ToolTip",
  component: ToolTip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=3046-246599&t=jB8SHT55jmiwmfpo-0",
    },
  },
  argTypes: {
    activator: {
      description: "Element on which Tooltip triggers",
      control: {
        disable: true,
      },
    },
    helpText: {
      description: "Help Text Accepts string value or React Node",
      control: {
        type: "text",
      },
      defaultValue:
        "Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu is going to migrate from a new place to another placeLorem ipsum dolaaler isseu is going to",
    },
    direction: {
      description: "Choose any direction other render default direction  ",
      control: {
        type: "radio",
        options: ["top", "right", "bottom", "left"],
      },
      defaultValue: "top",
    },
    isOpen: {
      description:
        "If you default tooltip showing open then pass open value is true",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    customClass: {
      description: "Add customClass in tooltip",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <div style={{ position: "relative", top: "200px" }}>
      <Card>
        <FlexLayout halign="center">
          <ToolTip
            {...rest}
            isOpen={rest.isOpen}
            helpText={
              <FlexLayout direction="vertical" spacing="mediumLoose">
                <>{rest.helpText}</>
                <FlexLayout halign="fill" valign="center">
                  <Button
                    content="Less More"
                    type="dangerPlain"
                    onClick={() => alert("Less More Button Clicked")}
                  />
                  <Button
                    content="Show More"
                    type="textButton"
                    onClick={() => alert("Show More Button Clicked")}
                  />
                </FlexLayout>
              </FlexLayout>
            }
            direction={rest.direction}
            activator={<Button type="outlined" icon={<AlertCircle />} />}
          />
        </FlexLayout>
      </Card>
    </div>
  );
};

export const Primary = Template.bind({});

// Tooltip direction
export const Tooltip_direction: any = Template.bind({});
Tooltip_direction.decorators = [
  () => {
    const direction = ["bottom", "left", "right", "top"];
    return (
      <Card>
        <FlexLayout direction="vertical" spacing="extraLoose" wrap="wrap">
          {direction.map((item: any) => {
            return (
              <Card cardType="bordered">
                <FlexLayout spacing="extraLoose" halign="center">
                  <ToolTip
                    isOpen={false}
                    helpText={
                      <FlexLayout direction="vertical" spacing="mediumLoose">
                        Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler
                        isseu is going Lorem ipsum dolaaler isseu
                        <FlexLayout halign="fill" valign="center">
                          <Button content="Less" type="dangerPlain" />
                          <Button content="Show More" type="textButton" />
                        </FlexLayout>
                      </FlexLayout>
                    }
                    direction={item}
                    activator={<Button content={`Tooltip open ${item}`} />}
                  />
                </FlexLayout>
              </Card>
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];

// Tooltip Top
export const Tooltip_Top: any = Template.bind({});
Tooltip_Top.decorators = [
  () => {
    return (
      <div
        style={{
          position: "relative",
          top: "200px",
        }}
      >
        <Card>
          <FlexLayout halign="fill" wrap="wrap">
            <ToolTip
              isOpen={false}
              helpText={
                <FlexLayout direction="vertical" spacing="mediumLoose">
                  Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu
                  is going Lorem ipsum dolaaler isseu
                  <FlexLayout halign="fill" valign="center">
                    <Button content="Less" type="dangerPlain" />
                    <Button content="Show More" type="textButton" />
                  </FlexLayout>
                </FlexLayout>
              }
              direction="top"
              activator={<Button content="Tooltip Open Top Left" />}
            />
            <ToolTip
              isOpen={false}
              helpText={
                <FlexLayout direction="vertical" spacing="mediumLoose">
                  Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu
                  is going Lorem ipsum dolaaler isseu
                  <FlexLayout halign="fill" valign="center">
                    <Button content="Less" type="dangerPlain" />
                    <Button content="Show More" type="textButton" />
                  </FlexLayout>
                </FlexLayout>
              }
              direction="top"
              activator={<Button content="Tooltip Open Top Center" />}
            />
            <ToolTip
              isOpen={false}
              helpText={
                <FlexLayout direction="vertical" spacing="mediumLoose">
                  Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu
                  is going Lorem ipsum dolaaler isseu
                  <FlexLayout halign="fill" valign="center">
                    <Button content="Less" type="dangerPlain" />
                    <Button content="Show More" type="textButton" />
                  </FlexLayout>
                </FlexLayout>
              }
              direction="top"
              activator={<Button content="Tooltip Open Top Right" />}
            />
          </FlexLayout>
        </Card>
      </div>
    );
  },
];

// Tooltip Right
export const Tooltip_Right: any = Template.bind({});
Tooltip_Right.decorators = [
  () => {
    return (
      <Card cardType="bordered">
        <FlexLayout halign="center">
          <ToolTip
            isOpen={false}
            helpText={
              <FlexLayout direction="vertical" spacing="mediumLoose">
                Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu
                is going Lorem ipsum dolaaler isseu
                <FlexLayout halign="fill" valign="center">
                  <Button content="Less" type="dangerPlain" />
                  <Button content="Show More" type="textButton" />
                </FlexLayout>
              </FlexLayout>
            }
            direction="right"
            activator={<Button content="Tooltip Open Right Bottom" />}
          />
        </FlexLayout>
        <div
          style={{
            position: "absolute",
            right: "0",
            left: "0",
            top: "200px",
          }}
        >
          <Card>
            <FlexLayout halign="center">
              <ToolTip
                isOpen={false}
                helpText={
                  <FlexLayout direction="vertical" spacing="mediumLoose">
                    Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler
                    isseu is going Lorem ipsum dolaaler isseu
                    <FlexLayout halign="fill" valign="center">
                      <Button content="Less" type="dangerPlain" />
                      <Button content="Show More" type="textButton" />
                    </FlexLayout>
                  </FlexLayout>
                }
                direction="right"
                activator={<Button content="Tooltip Open Right Center" />}
              />
            </FlexLayout>
          </Card>
        </div>

        <div
          style={{ position: "absolute", bottom: "0", right: "0", left: "0" }}
        >
          <Card>
            <FlexLayout halign="center">
              <ToolTip
                isOpen={false}
                helpText={
                  <FlexLayout direction="vertical" spacing="mediumLoose">
                    Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler
                    isseu is going Lorem ipsum dolaaler isseu
                    <FlexLayout halign="fill" valign="center">
                      <Button content="Less" type="dangerPlain" />
                      <Button content="Show More" type="textButton" />
                    </FlexLayout>
                  </FlexLayout>
                }
                direction="right"
                activator={<Button content="Tooltip Open Right Top" />}
              />
            </FlexLayout>
          </Card>
        </div>
      </Card>
    );
  },
];

// Tooltip Bottom
export const Tooltip_Bottom: any = Template.bind({});
Tooltip_Bottom.decorators = [
  () => {
    return (
      <Card>
        <FlexLayout halign="fill" wrap="wrap">
          <ToolTip
            isOpen={false}
            helpText={
              <FlexLayout direction="vertical" spacing="mediumLoose">
                Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu
                is going Lorem ipsum dolaaler isseu
                <FlexLayout halign="fill" valign="center">
                  <Button content="Less" type="dangerPlain" />
                  <Button content="Show More" type="textButton" />
                </FlexLayout>
              </FlexLayout>
            }
            direction="bottom"
            activator={<Button content="Tooltip Open Bottom Left" />}
          />
          <ToolTip
            isOpen={false}
            helpText={
              <FlexLayout direction="vertical" spacing="mediumLoose">
                Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu
                is going Lorem ipsum dolaaler isseu
                <FlexLayout halign="fill" valign="center">
                  <Button content="Less" type="dangerPlain" />
                  <Button content="Show More" type="textButton" />
                </FlexLayout>
              </FlexLayout>
            }
            direction="bottom"
            activator={<Button content="Tooltip Open Bottom Center" />}
          />
          <ToolTip
            isOpen={false}
            helpText={
              <FlexLayout direction="vertical" spacing="mediumLoose">
                Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu
                is going Lorem ipsum dolaaler isseu
                <FlexLayout halign="fill" valign="center">
                  <Button content="Less" type="dangerPlain" />
                  <Button content="Show More" type="textButton" />
                </FlexLayout>
              </FlexLayout>
            }
            direction="bottom"
            activator={<Button content="Tooltip Open Bottom Right" />}
          />
        </FlexLayout>
      </Card>
    );
  },
];

// Tooltip Left
export const Tooltip_Left: any = Template.bind({});
Tooltip_Left.decorators = [
  () => {
    return (
      <Card cardType="bordered">
        <FlexLayout halign="center">
          <ToolTip
            isOpen={false}
            helpText={
              <FlexLayout direction="vertical" spacing="mediumLoose">
                Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu
                is going Lorem ipsum dolaaler isseu
                <FlexLayout halign="fill" valign="center">
                  <Button content="Less" type="dangerPlain" />
                  <Button content="Show More" type="textButton" />
                </FlexLayout>
              </FlexLayout>
            }
            direction="left"
            activator={<Button content="Tooltip Open Left Bottom" />}
          />
        </FlexLayout>
        <div
          style={{
            position: "absolute",
            right: "0",
            left: "0",
            top: "200px",
          }}
        >
          <Card>
            <FlexLayout halign="center">
              <ToolTip
                isOpen={false}
                helpText={
                  <FlexLayout direction="vertical" spacing="mediumLoose">
                    Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler
                    isseu is going Lorem ipsum dolaaler isseu
                    <FlexLayout halign="fill" valign="center">
                      <Button content="Less" type="dangerPlain" />
                      <Button content="Show More" type="textButton" />
                    </FlexLayout>
                  </FlexLayout>
                }
                direction="left"
                activator={<Button content="Tooltip Open Left Center" />}
              />
            </FlexLayout>
          </Card>
        </div>

        <div
          style={{ position: "absolute", bottom: "0", right: "0", left: "0" }}
        >
          <Card>
            <FlexLayout halign="center">
              <ToolTip
                isOpen={false}
                helpText={
                  <FlexLayout direction="vertical" spacing="mediumLoose">
                    Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler
                    isseu is going Lorem ipsum dolaaler isseu
                    <FlexLayout halign="fill" valign="center">
                      <Button content="Less" type="dangerPlain" />
                      <Button content="Show More" type="textButton" />
                    </FlexLayout>
                  </FlexLayout>
                }
                direction="left"
                activator={<Button content="Tooltip Open Left Top" />}
              />
            </FlexLayout>
          </Card>
        </div>
      </Card>
    );
  },
];
export function Documentation() {
  return <TooltipDoc />;
}