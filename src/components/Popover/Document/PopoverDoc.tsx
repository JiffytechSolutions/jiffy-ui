import React from "react";
import {ChevronUp} from "../../../storybook/Foundation/Icons/Icons";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import Button from "../../Button/Button";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import FormElement from "../../Form/FormElement/FormElement";
import Select from "../../Form/Select/Select";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";

// Button Types
const types = [
  "primary",
  "danger",
  "dangerOutlined",
  "secondary",
  "outlined",
  "dangerPlain",
  "textButton",
];
const thikness = ["large", "thin", "extraThin"];

export const PopoverDoc = () => {
  return (
    <>
      <div className="story-documentation">
        <div className="block--section">
          <TextStyles
            alignment="left"
            displayTypes="SM-3.4"
            fontweight="extraBold"
            textcolor="dark"
            type="Display"
            utility="storybook-doc--heading"
          >
            Usage
          </TextStyles>
          <FlexLayout direction="vertical" spacing="loose">
            <FlexLayout direction="vertical" spacing="extraTight">
              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Popovers appear either at the top or bottom of their target. The
                preferred and default position is bottom. Popovers use auto
                positioning if there is not enough space. Popover can contain
                any element inside of it.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </div>
        <hr className="section-devider" />

        {/* Do’s & Don’ts section */}
        <div className="block--section">
          <TextStyles
            alignment="left"
            displayTypes="SM-3.4"
            fontweight="extraBold"
            textcolor="dark"
            type="Display"
            utility="storybook-doc--heading"
          >
            Do’s & Don’ts
          </TextStyles>
          <FlexLayout direction="vertical" spacing="loose">
            <FlexLayout direction="vertical" spacing="tight">
              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Pop over must contain predictable and clear information so that
                user should be able to anticipate what will happen when they
                click on an action item. Never deceive merchants by mislabeling
                an action.
              </TextStyles>
              <div className="inner_card_custom">
                <div className="inner_card_custom">
                  <FlexLayout spacing="tight">
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <Card cardType="filled" customClass="custom--popover-doc">
                        <FlexLayout spacing="loose" direction="vertical">
                          <div className="custom--popover-doc--inner">
                            <Button
                              type="outlined"
                              icon={<ChevronUp size="20px" />}
                              iconAlign="right"
                            >
                              Pendent
                            </Button>
                            <Card cardType="shadowed">
                              <FormElement>
                                <FlexLayout
                                  direction="vertical"
                                  spacing="loose"
                                >
                                  <Select
                                    label="New order adding options"
                                    onChange={function noRefCheck() {}}
                                    options={[
                                      {
                                        label: "Order",
                                        value: "valuedf",
                                      },
                                      {
                                        label: "Order 1",
                                        value: "value",
                                      },
                                    ]}
                                    value=""
                                  />
                                  <Select
                                    label="Buy"
                                    onChange={function noRefCheck() {}}
                                    options={[
                                      {
                                        label: "",
                                        value: "valuedf",
                                      },
                                      {
                                        label: "",
                                        value: "value",
                                      },
                                    ]}
                                    value=""
                                  />
                                  <hr />
                                  <FlexLayout
                                    halign="end"
                                    spacing="mediumTight"
                                  >
                                    <Button size="thin" type="secondary">
                                      Cancel
                                    </Button>
                                    <Button size="thin">Add</Button>
                                  </FlexLayout>
                                </FlexLayout>
                              </FormElement>
                            </Card>
                          </div>
                          <FlexLayout
                            direction="vertical"
                            spacing="tight"
                            halign="start"
                          >
                            <div className="inte-do-dont--line no"></div>
                            <div className="text--do-dont no">
                              <TextStyles
                                alignment="left"
                                fontweight="extraBold"
                                subheadingTypes="XS-1.6"
                                textcolor="dark"
                                type="SubHeading"
                                utility="none"
                              >
                                Don't
                              </TextStyles>
                            </div>
                          </FlexLayout>
                        </FlexLayout>
                      </Card>
                    </FlexChild>
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <Card cardType="filled" customClass="custom--popover-doc">
                        <FlexLayout spacing="loose" direction="vertical">
                          <div className="custom--popover-doc--inner">
                            <Button
                              type="outlined"
                              icon={<ChevronUp size="20px" />}
                              iconAlign="right"
                            >
                              Pendent
                            </Button>
                            <Card cardType="shadowed">
                              <FormElement>
                                <FlexLayout
                                  direction="vertical"
                                  spacing="loose"
                                >
                                  <Select
                                    label="Add new order"
                                    onChange={function noRefCheck() {}}
                                    options={[
                                      {
                                        label: "Order",
                                        value: "valuedf",
                                      },
                                      {
                                        label: "Order 1",
                                        value: "value",
                                      },
                                    ]}
                                    value=""
                                  />
                                  <Select
                                    label="Buy shipping label"
                                    onChange={function noRefCheck() {}}
                                    options={[
                                      {
                                        label: "",
                                        value: "valuedf",
                                      },
                                      {
                                        label: "",
                                        value: "value",
                                      },
                                    ]}
                                    value=""
                                  />
                                  <hr />
                                  <FlexLayout
                                    halign="end"
                                    spacing="mediumTight"
                                  >
                                    <Button size="thin" type="secondary">
                                      Cancel
                                    </Button>
                                    <Button size="thin">Add</Button>
                                  </FlexLayout>
                                </FlexLayout>
                              </FormElement>
                            </Card>
                          </div>
                          <FlexLayout
                            direction="vertical"
                            spacing="tight"
                            halign="start"
                          >
                            <div className="inte-do-dont--line yes"></div>
                            <div className="text--do-dont yes">
                              <TextStyles
                                alignment="left"
                                fontweight="extraBold"
                                subheadingTypes="XS-1.6"
                                textcolor="dark"
                                type="SubHeading"
                                utility="none"
                              >
                                Do
                              </TextStyles>
                            </div>
                          </FlexLayout>
                        </FlexLayout>
                      </Card>
                    </FlexChild>
                  </FlexLayout>
                </div>
              </div>
            </FlexLayout>
            <hr className="section-devider sub-section" />

            <div className="block--section">
              <TextStyles
                alignment="left"
                displayTypes="SM-3.4"
                fontweight="extraBold"
                textcolor="dark"
                type="Display"
                utility="storybook-doc--heading"
              >
                Best Practices
              </TextStyles>
              <FlexLayout direction="vertical" spacing="loose">
                <FlexLayout spacing="extraTight" direction="vertical">
                  <FlexLayout spacing="extraTight">
                    <TextStyles
                      alignment="left"
                      fontweight="extraBold"
                      subheadingTypes="SM-1.8"
                      textcolor="dark"
                      type="SubHeading"
                      utility="storybook-doc--paragraph"
                    ></TextStyles>
                    <TextStyles
                      alignment="left"
                      fontweight="normal"
                      subheadingTypes="SM-1.8"
                      textcolor="light"
                      type="SubHeading"
                      utility="storybook-doc--paragraph"
                    >
                      Popovers should:
                    </TextStyles>
                  </FlexLayout>
                  <div className="storybook--lists">
                    <List type="disc">
                      <TextStyles>
                        Be placed near the activator or the element that
                        triggers the popover
                      </TextStyles>
                      <TextStyles>
                        Prioritize primary information and actions, merchants
                        should utilize the Popover for secondary or less
                        critical information, as it remains concealed until
                        triggered.
                      </TextStyles>
                      <TextStyles>
                        Ought to include related navigation or actions.
                      </TextStyles>
                      <TextStyles>
                        Be activated by clearly defined trigger action so that
                        the merchant would know what exactly the element does
                      </TextStyles>
                    </List>
                  </div>
                </FlexLayout>
              </FlexLayout>
            </div>

            <div className="block--section">
              <TextStyles
                alignment="left"
                displayTypes="SM-3.4"
                fontweight="extraBold"
                textcolor="dark"
                type="Display"
                utility="storybook-doc--heading"
              >
                Guidelines
              </TextStyles>
              <FlexLayout direction="vertical" spacing="loose">
                <FlexLayout spacing="extraTight" direction="vertical">
                  <div className="storybook--lists">
                    <List type="disc">
                      <TextStyles>
                        Do not use for short text, instead use Tooltip.
                      </TextStyles>
                      <TextStyles>
                        Do not hide important or essential content inside of a
                        popover.
                      </TextStyles>
                    </List>
                  </div>
                </FlexLayout>
              </FlexLayout>
            </div>
          </FlexLayout>
        </div>
        <hr className="section-devider" />
        <StoryBookFooter />
      </div>
    </>
  );
};
export default PopoverDoc;
