import React from "react";
import {
  AlertOctagon,
  Download,
  Gitlab,
  X,
} from "../../../storybook/Foundation/Icons/Icons";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import Accordion from "../../Accordion/Accordion";
import Button from "../../Button/Button";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";

import ButtonGroup from "../ButtonGroup";

export const ButtonGroupDoc = () => {
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
                displayTypes="SM-3.4"
                fontweight="extraBold"
                subheadingTypes="LG-2.5"
                textcolor="dark"
                type="SubHeading"
                utility="storybook-doc--subheading"
              >
                When to use
              </TextStyles>
              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Buttons are used primarily for actions, such as “Add”, “Close”,
                “Cancel”, or “Save”. Each page should have only one primary
                button, and any remaining calls to action should be represented
                as lower emphasis buttons.
              </TextStyles>
            </FlexLayout>
            <FlexLayout direction="vertical" spacing="extraTight">
              <TextStyles
                alignment="left"
                displayTypes="SM-3.4"
                fontweight="extraBold"
                subheadingTypes="LG-2.5"
                textcolor="dark"
                type="SubHeading"
                utility="storybook-doc--subheading"
              >
                When not to use
              </TextStyles>
              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Do not use buttons as navigational elements. Instead, use links
                when the desired action is to take the user to a new page. Links
                are used primarily for navigation, and usually appear within or
                directly following a sentence.
              </TextStyles>
            </FlexLayout>
          </FlexLayout>
        </div>
        <hr className="section-devider" />
        <div className="block--section">
          <TextStyles
            alignment="left"
            displayTypes="SM-3.4"
            fontweight="extraBold"
            textcolor="dark"
            type="Display"
            utility="storybook-doc--heading"
          >
            Variants
          </TextStyles>
          <FlexLayout direction="vertical" spacing="loose">
            <FlexLayout direction="vertical" spacing="tight">
              <TextStyles
                alignment="left"
                displayTypes="SM-3.4"
                fontweight="extraBold"
                subheadingTypes="LG-2.5"
                textcolor="dark"
                type="SubHeading"
                utility="storybook-doc--subheading"
              >
                Kinds
              </TextStyles>
              <div className="inner_card_custom">
                <Card cardType="filled">
                  <FlexLayout spacing="extraLoose">
                    <FlexChild desktopWidth="50" mobileWidth="50" tabWidth="50">
                      <Card cardType="shadowed" title={"Default"}>
                        <FlexLayout spacing="extraLoose" direction="vertical">
                          <FlexLayout spacing="loose">
                            <Button type="outlined">Button</Button>
                            <Button type="primary">Button</Button>
                          </FlexLayout>
                          <FlexLayout spacing="loose">
                            <Button
                              type="outlined"
                              iconAlign="left"
                              icon={<Download color="#1C2433" />}
                            ></Button>
                            <Button
                              type="primary"
                              iconAlign="left"
                              icon={<Download color="#fff" />}
                            ></Button>
                          </FlexLayout>
                          <FlexLayout spacing="loose">
                            <Button
                              type="outlined"
                              iconAlign="left"
                              icon={<Download color="#1C2433" />}
                            >
                              Button
                            </Button>
                            <Button
                              type="primary"
                              iconAlign="left"
                              icon={<Download color="#fff" />}
                            >
                              Button
                            </Button>
                          </FlexLayout>
                          <FlexLayout spacing="loose">
                            <Button
                              type="outlined"
                              iconAlign="right"
                              icon={<Download color="#1C2433" />}
                            >
                              Button
                            </Button>
                            <Button
                              type="primary"
                              iconAlign="right"
                              icon={<Download color="#fff" />}
                            >
                              Button
                            </Button>
                          </FlexLayout>
                        </FlexLayout>
                      </Card>
                    </FlexChild>
                    <FlexChild desktopWidth="50" mobileWidth="50" tabWidth="50">
                      <Card cardType="shadowed" title={"Segmented"}>
                        <FlexLayout spacing="extraLoose" direction="vertical">
                          <FlexLayout spacing="loose">
                            <ButtonGroup segmented>
                              <Button type="outlined">Button</Button>
                              <Button type="outlined">Button</Button>
                              <Button type="outlined">Button</Button>
                            </ButtonGroup>
                          </FlexLayout>
                          <FlexLayout spacing="loose">
                            <ButtonGroup segmented>
                              <Button
                                type="outlined"
                                iconAlign="left"
                                icon={<Download color="#1C2433" />}
                              ></Button>
                              <Button
                                type="outlined"
                                iconAlign="left"
                                icon={<Download color="#1C2433" />}
                              ></Button>
                              <Button
                                type="outlined"
                                iconAlign="left"
                                icon={<Download color="#1C2433" />}
                              ></Button>
                            </ButtonGroup>
                          </FlexLayout>
                          <FlexLayout spacing="loose">
                            <ButtonGroup segmented>
                              <Button
                                type="outlined"
                                iconAlign="left"
                                icon={<Download color="#1C2433" />}
                              >
                                Button
                              </Button>
                              <Button
                                type="outlined"
                                iconAlign="left"
                                icon={<Download color="#1C2433" />}
                              >
                                Button
                              </Button>
                              <Button
                                type="outlined"
                                iconAlign="left"
                                icon={<Download color="#1C2433" />}
                              >
                                Button
                              </Button>
                            </ButtonGroup>
                          </FlexLayout>
                          <FlexLayout spacing="loose">
                            <ButtonGroup segmented>
                              <Button
                                type="outlined"
                                iconAlign="right"
                                icon={<Download color="#1C2433" />}
                              >
                                Button
                              </Button>
                              <Button
                                type="outlined"
                                iconAlign="right"
                                icon={<Download color="#1C2433" />}
                              >
                                Button
                              </Button>
                              <Button
                                type="outlined"
                                iconAlign="right"
                                icon={<Download color="#1C2433" />}
                              >
                                Button
                              </Button>
                            </ButtonGroup>
                          </FlexLayout>
                        </FlexLayout>
                      </Card>
                    </FlexChild>
                  </FlexLayout>
                </Card>
              </div>
            </FlexLayout>
            <FlexLayout direction="vertical" spacing="tight">
              <TextStyles
                alignment="left"
                displayTypes="SM-3.4"
                fontweight="extraBold"
                subheadingTypes="LG-2.5"
                textcolor="dark"
                type="SubHeading"
                utility="storybook-doc--subheading"
              >
                Sizes
              </TextStyles>
              <div className="inner_card_custom">
                <Card cardType="filled">
                  <FlexLayout spacing="extraLoose" halign="fill">
                    <FlexChild>
                      <Card cardType="shadowed" title={"Large"}>
                        <FlexLayout spacing="extraLoose" direction="vertical">
                          <FlexLayout spacing="loose">
                            <Button type="outlined">Button</Button>
                            <Button type="primary">Button</Button>
                          </FlexLayout>
                          <FlexLayout spacing="loose">
                            <ButtonGroup segmented>
                              <Button type="outlined">Button</Button>
                              <Button type="outlined">Button</Button>
                              <Button type="outlined">Button</Button>
                            </ButtonGroup>
                          </FlexLayout>
                        </FlexLayout>
                      </Card>
                    </FlexChild>
                    <FlexChild>
                      <Card cardType="shadowed" title={"Thin"}>
                        <FlexLayout spacing="extraLoose" direction="vertical">
                          <FlexLayout spacing="loose">
                            <Button type="outlined" size="thin">
                              Button
                            </Button>
                            <Button type="primary" size="thin">
                              Button
                            </Button>
                          </FlexLayout>
                          <FlexLayout spacing="loose">
                            <ButtonGroup segmented>
                              <Button type="outlined" size="thin">
                                Button
                              </Button>
                              <Button type="outlined" size="thin">
                                Button
                              </Button>
                              <Button type="outlined" size="thin">
                                Button
                              </Button>
                            </ButtonGroup>
                          </FlexLayout>
                        </FlexLayout>
                      </Card>
                    </FlexChild>
                    <FlexChild>
                      <Card cardType="shadowed" title={"Extra Thin"}>
                        <FlexLayout spacing="extraLoose" direction="vertical">
                          <FlexLayout spacing="loose">
                            <Button type="outlined" size="extraThin">
                              Button
                            </Button>
                            <Button type="primary" size="extraThin">
                              Button
                            </Button>
                          </FlexLayout>
                          <FlexLayout spacing="loose">
                            <ButtonGroup segmented>
                              <Button type="outlined" size="extraThin">
                                Button
                              </Button>
                              <Button type="outlined" size="extraThin">
                                Button
                              </Button>
                              <Button type="outlined" size="extraThin">
                                Button
                              </Button>
                            </ButtonGroup>
                          </FlexLayout>
                        </FlexLayout>
                      </Card>
                    </FlexChild>
                  </FlexLayout>
                </Card>
              </div>
            </FlexLayout>
          </FlexLayout>
        </div>
        <hr className="section-devider" />

        {/* State */}
        <div className="block--section">
          <TextStyles
            alignment="left"
            displayTypes="SM-3.4"
            fontweight="extraBold"
            textcolor="dark"
            type="Display"
            utility="storybook-doc--heading"
          >
            State
          </TextStyles>
          <FlexLayout direction="vertical" spacing="loose">
            <FlexLayout direction="vertical" spacing="tight">
              <div className="inner_card_custom">
                <Card cardType="filled">
                  <FlexLayout spacing="extraLoose">
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <Card cardType="shadowed" title={"Clicked"}>
                        <div className="button--group-clickedState">
                          <ButtonGroup segmented>
                            <Button type="outlined">Button</Button>
                            <Button type="outlined">Button</Button>
                            <Button type="outlined">Button</Button>
                          </ButtonGroup>
                        </div>
                      </Card>
                    </FlexChild>
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <Card cardType="shadowed" title={"Hovered"}>
                        <div className="button--group-hoverState">
                          <ButtonGroup segmented>
                            <Button type="outlined">Button</Button>
                            <Button type="outlined">Button</Button>
                            <Button type="outlined">Button</Button>
                          </ButtonGroup>
                        </div>
                      </Card>
                    </FlexChild>
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <Card cardType="shadowed" title={"Disabled"}>
                        <div className="button--group-disabledState">
                          <ButtonGroup segmented>
                            <Button type="outlined" isDisabled>
                              Button
                            </Button>
                            <Button type="outlined">Button</Button>
                            <Button type="outlined">Button</Button>
                          </ButtonGroup>
                        </div>
                      </Card>
                    </FlexChild>
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <Card cardType="shadowed" title={"Focused"}>
                        <div className="button--group-FocusedState">
                          <ButtonGroup segmented>
                            <Button type="outlined">Button</Button>
                            <Button type="outlined">Button</Button>
                            <Button type="outlined">Button</Button>
                          </ButtonGroup>
                        </div>
                      </Card>
                    </FlexChild>
                  </FlexLayout>
                </Card>
              </div>
            </FlexLayout>
          </FlexLayout>
        </div>
        {/* Do’s & Don’ts section */}
        <hr className="section-devider" />
        <div className="block--section">
          <TextStyles
            alignment="left"
            displayTypes="SM-3.4"
            fontweight="extraBold"
            textcolor="dark"
            type="Display"
            utility="storybook-doc--heading"
          >
            Do’s &amp; Don’ts
          </TextStyles>
          <FlexLayout direction="vertical" spacing="loose">
            <FlexLayout direction="vertical" spacing="tight">
              <FlexLayout direction="vertical" spacing="extraLoose">
                <FlexLayout spacing="extraTight" direction="vertical">
                  <FlexLayout spacing="extraTight" wrap="noWrap">
                    <TextStyles
                      alignment="left"
                      fontweight="extraBold"
                      subheadingTypes="SM-1.8"
                      textcolor="dark"
                      type="SubHeading"
                      utility="storybook-doc--paragraph"
                    >
                      1-:
                    </TextStyles>
                    <TextStyles
                      alignment="left"
                      fontweight="normal"
                      subheadingTypes="SM-1.8"
                      textcolor="light"
                      type="SubHeading"
                      utility="storybook-doc--paragraph"
                    >
                      Maintain uniformity by using similar consistency of style,
                      color and shapes. Avoid combining icons with text buttons.
                    </TextStyles>
                  </FlexLayout>
                  <div className="inner_card_custom">
                    <FlexLayout spacing="tight">
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <Card cardType="filled">
                          <FlexLayout spacing="loose" direction="vertical">
                            <FlexLayout spacing="loose" halign="center">
                              <FlexLayout
                                direction="vertical"
                                spacing="loose"
                                halign="center"
                              >
                                <ButtonGroup segmented>
                                  <Button
                                    type="outlined"
                                    iconAlign="left"
                                    icon={<Download size="20px" />}
                                  >
                                    Button
                                  </Button>
                                  <Button type="outlined">Button</Button>
                                  <Button
                                    type="outlined"
                                    iconAlign="left"
                                    icon={<Download size="20px" />}
                                  ></Button>
                                </ButtonGroup>
                                <ButtonGroup segmented>
                                  <Button type="outlined" size="extraThin">
                                    Button
                                  </Button>
                                  <Button
                                    type="primary"
                                    iconAlign="left"
                                    icon={<Download size="20px" color="#fff" />}
                                  >
                                    Button
                                  </Button>
                                </ButtonGroup>
                                <ButtonGroup segmented>
                                  <Button type="outlined">Button</Button>
                                  <Button type="outlined">Button</Button>
                                  <Button type="outlined">Button</Button>
                                </ButtonGroup>
                              </FlexLayout>
                            </FlexLayout>
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
                                  Don’t
                                </TextStyles>
                              </div>
                            </FlexLayout>
                          </FlexLayout>
                        </Card>
                      </FlexChild>
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <Card cardType="filled">
                          <FlexLayout spacing="loose" direction="vertical">
                            <FlexLayout spacing="loose" halign="center">
                              <FlexLayout
                                direction="vertical"
                                spacing="loose"
                                halign="center"
                              >
                                <ButtonGroup segmented>
                                  <Button
                                    type="outlined"
                                    iconAlign="left"
                                    icon={<Download size="20px" />}
                                  ></Button>
                                  <Button
                                    type="outlined"
                                    iconAlign="left"
                                    icon={<Download size="20px" />}
                                  ></Button>
                                  <Button
                                    type="outlined"
                                    iconAlign="left"
                                    icon={<Download size="20px" />}
                                  ></Button>
                                </ButtonGroup>
                                <ButtonGroup segmented>
                                  <Button
                                    type="outlined"
                                    iconAlign="left"
                                    icon={
                                      <Download size="20px" color="#1C2433" />
                                    }
                                  >
                                    Button
                                  </Button>
                                  <Button
                                    type="outlined"
                                    iconAlign="left"
                                    icon={
                                      <Download size="20px" color="#1C2433" />
                                    }
                                  >
                                    Button
                                  </Button>
                                  <Button
                                    type="outlined"
                                    iconAlign="left"
                                    icon={
                                      <Download size="20px" color="#1C2433" />
                                    }
                                  >
                                    Button
                                  </Button>
                                </ButtonGroup>
                                <ButtonGroup segmented>
                                  <Button type="outlined">Button</Button>
                                  <Button type="outlined">Button</Button>
                                  <Button type="outlined">Button</Button>
                                </ButtonGroup>
                              </FlexLayout>
                            </FlexLayout>
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
                                  Don’t
                                </TextStyles>
                              </div>
                            </FlexLayout>
                          </FlexLayout>
                        </Card>
                      </FlexChild>
                    </FlexLayout>
                  </div>
                </FlexLayout>
              </FlexLayout>

              <hr className="section-devider sub-section" />

              <FlexLayout direction="vertical" spacing="extraLoose">
                <FlexLayout spacing="extraTight" direction="vertical">
                  <FlexLayout spacing="extraTight" wrap="noWrap">
                    <TextStyles
                      alignment="left"
                      fontweight="extraBold"
                      subheadingTypes="SM-1.8"
                      textcolor="dark"
                      type="SubHeading"
                      utility="storybook-doc--paragraph"
                    >
                      2-:
                    </TextStyles>
                    <TextStyles
                      alignment="left"
                      fontweight="normal"
                      subheadingTypes="SM-1.8"
                      textcolor="light"
                      type="SubHeading"
                      utility="storybook-doc--paragraph"
                    >
                      Don’t use a button group when switching between content or
                      object pages. Use when all the actions in the group take
                      place immediately in one click.
                    </TextStyles>
                  </FlexLayout>
                  <div className="inner_card_custom">
                    <FlexLayout spacing="tight">
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <Card cardType="filled">
                          <FlexLayout spacing="loose" direction="vertical">
                            <FlexLayout spacing="loose" halign="center">
                              <FlexLayout
                                direction="vertical"
                                spacing="loose"
                                halign="center"
                              >
                                <ButtonGroup segmented>
                                  <Button type="outlined">Main table</Button>
                                  <Button type="outlined">Hadas view</Button>
                                  <Button type="outlined">Chart view</Button>
                                </ButtonGroup>
                              </FlexLayout>
                            </FlexLayout>
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
                                  Don’t
                                </TextStyles>
                              </div>
                            </FlexLayout>
                          </FlexLayout>
                        </Card>
                      </FlexChild>
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <Card cardType="filled">
                          <FlexLayout spacing="loose" direction="vertical">
                            <FlexLayout spacing="loose" halign="center">
                              <FlexLayout
                                direction="vertical"
                                spacing="loose"
                                halign="center"
                              >
                                <div className="button--group-hoverState">
                                  <ButtonGroup segmented>
                                    <Button type="outlined">Complete</Button>
                                    <Button type="outlined">Pending</Button>
                                    <Button type="outlined">Incomplete</Button>
                                  </ButtonGroup>
                                </div>
                              </FlexLayout>
                            </FlexLayout>
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
                </FlexLayout>
              </FlexLayout>
            </FlexLayout>
          </FlexLayout>
        </div>
        <hr className="section-devider" />
        {/* Use Case */}
        <div className="block--section">
          <TextStyles
            alignment="left"
            displayTypes="SM-3.4"
            fontweight="extraBold"
            textcolor="dark"
            type="Display"
            utility="storybook-doc--heading"
          >
            Use Case
          </TextStyles>

          <FlexLayout direction="vertical" spacing="loose">
            <FlexLayout direction="vertical" spacing="tight">
              <FlexLayout direction="vertical" spacing="extraLoose">
                <FlexLayout spacing="extraTight" direction="vertical">
                  <TextStyles
                    alignment="left"
                    fontweight="normal"
                    subheadingTypes="SM-1.8"
                    textcolor="light"
                    type="SubHeading"
                    utility="storybook-doc--paragraph"
                  >
                    In a button group, primary buttons should not be clubbed
                    with the tertiary buttons. It creates a visual disturbance
                    for the user. Primary buttons clearly explain what each
                    button does and mostly used for primary actions like Save,
                    Edit, Add, etc. Tertiary buttons are only used for Learn
                    more/Skip/Cancel.
                  </TextStyles>

                  <div className="inner_card_custom">
                    <FlexLayout spacing="tight">
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <div className="custom--card-doc-storybook">
                          <Card cardType="shadowed">
                            <FlexLayout spacing="tight" direction="vertical">
                              <FlexLayout
                                spacing="loose"
                                halign="fill"
                                valign="center"
                              >
                                <FlexLayout spacing="tight" valign="center">
                                  <Gitlab
                                    size="20px"
                                    color="#1C2433"
                                    customClass="svg-Valign"
                                  />
                                  <TextStyles
                                    alignment="left"
                                    fontweight="extraBold"
                                    subheadingTypes="XS-1.6"
                                    textcolor="dark"
                                    type="SubHeading"
                                    utility="none"
                                  >
                                    Warnings
                                  </TextStyles>
                                </FlexLayout>
                                <Button
                                  type="secondary"
                                  iconAlign="left"
                                  icon={<X size="20px" color="#1C2433" />}
                                ></Button>
                              </FlexLayout>
                              <hr />
                              <FlexLayout spacing="loose">
                                <TextStyles
                                  alignment="left"
                                  fontweight="normal"
                                  paragraphTypes="MD-1.4"
                                  subheadingTypes="XS-1.6"
                                  textcolor="light"
                                  type="Paragraph"
                                  utility="none"
                                >
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book.
                                </TextStyles>
                              </FlexLayout>
                              <hr />
                              <FlexLayout halign="fill" valign="center">
                                <Button type="textButton">Learn more</Button>
                                <FlexLayout spacing="loose">
                                  <Button type="outlined">Button</Button>
                                  <Button type="primary">Button</Button>
                                </FlexLayout>
                              </FlexLayout>
                            </FlexLayout>
                          </Card>
                        </div>
                      </FlexChild>
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <div className="custom--card-doc-storybook">
                          <Card cardType="shadowed">
                            <FlexLayout spacing="tight" direction="vertical">
                              <FlexLayout
                                spacing="loose"
                                halign="fill"
                                valign="center"
                              >
                                <FlexLayout spacing="tight" valign="center">
                                  <Gitlab
                                    size="20px"
                                    color="#1C2433"
                                    customClass="svg-Valign"
                                  />
                                  <TextStyles
                                    alignment="left"
                                    fontweight="extraBold"
                                    subheadingTypes="XS-1.6"
                                    textcolor="dark"
                                    type="SubHeading"
                                    utility="none"
                                  >
                                    Warnings
                                  </TextStyles>
                                </FlexLayout>
                                <Button
                                  type="secondary"
                                  iconAlign="left"
                                  icon={<X size="20px" color="#1C2433" />}
                                ></Button>
                              </FlexLayout>
                              <hr />
                              <FlexLayout spacing="loose" wrap="noWrap">
                                <AlertOctagon color="#B28C35" size="20px" />
                                <FlexLayout
                                  direction="vertical"
                                  spacing="loose"
                                >
                                  <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    paragraphTypes="MD-1.4"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="none"
                                  >
                                    A short modal heading
                                  </TextStyles>
                                  <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    paragraphTypes="MD-1.4"
                                    subheadingTypes="XS-1.6"
                                    textcolor="light"
                                    type="Paragraph"
                                    utility="none"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Consequatur amet labore.
                                  </TextStyles>
                                  <FlexLayout
                                    spacing="tight"
                                    direction="vertical"
                                  >
                                    <Accordion
                                      onClick={() => {}}
                                      title="Resolutions"
                                    >
                                      <TextStyles textcolor="light">
                                        1 Tenetur ullam rerum ad iusto possimus
                                        sequi mollitia dolore sunt quam
                                        praesentium. Tenetur ullam rerum ad
                                        iusto possimus sequi mollitia dolore
                                        sunt quam praesentium.Tenetur ullam
                                        rerum ad iusto possimus sequi mollitia
                                        dolore sunt quam praesentium.
                                      </TextStyles>
                                    </Accordion>
                                    <Accordion
                                      onClick={() => {}}
                                      title="Label"
                                      isActive={true}
                                    >
                                      <TextStyles textcolor="light">
                                        Error solution dolor sit amet,
                                        consectetur adipiscing elit. Dui
                                        placerat commodo purus proin cras
                                        malesau amet. Faucibus odio id sit
                                        varius eleifend.
                                      </TextStyles>
                                    </Accordion>
                                  </FlexLayout>
                                </FlexLayout>
                              </FlexLayout>
                              <hr />
                              <FlexLayout halign="fill" valign="center">
                                <Button type="textButton">Skip</Button>
                                <FlexLayout spacing="loose">
                                  <Button type="outlined">Button</Button>
                                  <Button type="primary">Button</Button>
                                </FlexLayout>
                              </FlexLayout>
                            </FlexLayout>
                          </Card>
                        </div>
                      </FlexChild>
                    </FlexLayout>
                  </div>
                </FlexLayout>
              </FlexLayout>
            </FlexLayout>
          </FlexLayout>
        </div>
        <hr className="section-devider" />
        <StoryBookFooter />
      </div>
    </>
  );
};
export default ButtonGroupDoc;
