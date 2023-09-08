import React from "react";
import { Download, X } from "../../../storybook/Foundation/Icons/Icons";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import Alert from "../../Alert/Alert";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";
import Button from "../Button";

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

export const ButtonDoc = () => {
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

              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Each button kind has a particular function and its design
                signals that function to the user. It is therefore very
                important that the different kinds are implemented consistently
                across products, so that they message the correct actions.
              </TextStyles>
              <div className="inner_card_custom">
                <Card cardType="bordered">
                  <FlexLayout spacing="extraLoose" valign="center">
                    {types.map((variant: any) => (
                      <Button size="large" type={variant}>
                        {variant}
                      </Button>
                    ))}
                  </FlexLayout>
                </Card>
              </div>
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
                size
              </TextStyles>
              <div className="inner_card_custom">
                <Card cardType="bordered">
                  <FlexLayout spacing="loose" valign="center">
                    {thikness.map((sizes: any) => (
                      <Button size={sizes}>{sizes}</Button>
                    ))}
                  </FlexLayout>
                </Card>
              </div>
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
                displayTypes="SM-3.4"
                fontweight="extraBold"
                subheadingTypes="LG-2.5"
                textcolor="dark"
                type="SubHeading"
                utility="storybook-doc--subheading"
              >
                Maintain hierarchy
              </TextStyles>

              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                There are multiple types of actions in a product that user can
                take, when there are more than one action on a single page, it’s
                important to arrange them in a clear hierarchy. Each action sits
                somewhere on a hierarchy of importance.
              </TextStyles>
              <div className="inner_card_custom">
                <FlexLayout wrap="noWrap" spacing="tight">
                  <Card cardType="bordered">
                    <FlexLayout spacing="loose" direction="vertical">
                      <FlexLayout spacing="loose">
                        <Button type="secondary" size="extraThin">
                          Save Draft
                        </Button>
                        <Button type="secondary" size="extraThin">
                          Schedule
                        </Button>
                        <Button
                          type="outlined"
                          iconAlign="left"
                          icon={<Download color="#333" size={20} />}
                          size="extraThin"
                        >
                          Discard
                        </Button>
                        <Button
                          type="outlined"
                          iconAlign="left"
                          icon={<Download color="#333" size={20} />}
                          size="extraThin"
                        >
                          Publish Now
                        </Button>
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
                  <Card cardType="bordered">
                    <FlexLayout spacing="loose" direction="vertical">
                      <FlexLayout spacing="loose" valign="center">
                        <Button type="textButton" size="thin">
                          Save Draft
                        </Button>
                        <Button type="secondary" size="thin">
                          Schedule
                        </Button>
                        <Button
                          type="dangerOutlined"
                          iconAlign="left"
                          icon={<Download color="#333" size={20} />}
                          size="thin"
                        >
                          Discard
                        </Button>
                        <Button
                          type="primary"
                          iconAlign="left"
                          icon={<Download color="#fff" size={20} />}
                          size="thin"
                        >
                          Publish Now
                        </Button>
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
                </FlexLayout>
              </div>
              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Without a clear hierarchy, both visually and structurally, there
                is no visual stability and the user is forced to read more
                carefully consider what each action does. This creates friction
                and is a frustrating experience.
              </TextStyles>
            </FlexLayout>
            <hr className="section-devider sub-section" />
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
                Button Labelling
              </TextStyles>

              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Buttons with generic or misleading labels can be a huge source
                of frustrations for your users. Write button labels that clearly
                explain what each button does. Ideally, the button’s label
                should clearly describe its action.
              </TextStyles>
              <Alert
                type="warning"
                title={" Good button label invites users to take action.."}
              />

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
                      Choose sentence case or title case over uppercase and when
                      choosing a font style, make sure it is legible, big enough
                      to see, and a medium(ish) weight.
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
                              <Button type="primary">BUTTON</Button>
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
                              <Button type="primary">Button</Button>
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

                <FlexLayout spacing="extraTight" direction="vertical">
                  <FlexLayout spacing="extraTight">
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
                      Here are two things to remember:
                    </TextStyles>
                  </FlexLayout>
                  <div className="storybook--lists">
                    <List type="disc">
                      <TextStyles>
                        Avoid wrapping text. To keep text legible a text label
                        should remain on a single line.
                      </TextStyles>
                      <TextStyles>
                        Try to use one or two words per button.
                      </TextStyles>
                      <TextStyles>
                        Select proper size for a button container
                      </TextStyles>
                    </List>
                  </div>
                  <div className="inner_card_custom">
                    <FlexLayout spacing="tight" valign="end">
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <Card cardType="filled">
                          <FlexLayout spacing="loose" direction="vertical">
                            <FlexLayout spacing="loose" halign="center">
                              <div className="break-word--btn">
                                <Button type="primary">
                                  Send this message
                                </Button>
                              </div>
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
                              <Button type="primary">Send message</Button>
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
                      3-:
                    </TextStyles>
                    <TextStyles
                      alignment="left"
                      fontweight="normal"
                      subheadingTypes="SM-1.8"
                      textcolor="light"
                      type="SubHeading"
                      utility="storybook-doc--paragraph"
                    >
                      Sentence-style capitalization is more friendly tone and
                      attract people to the button. Title-style capitalization
                      creates formal tone with the user. Formal tone is
                      impersonal and less inviting to press.
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
                              <Button type="primary">Start Free Trial</Button>
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
                              <Button type="primary">Start free trial</Button>
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

              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Without a clear hierarchy, both visually and structurally, there
                is no visual stability and the user is forced to read more
                carefully consider what each action does. This creates friction
                and is a frustrating experience.
              </TextStyles>
            </FlexLayout>

            <hr className="section-devider sub-section" />
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
                Limit buttons per page, Unless Repeating a Primary Action
              </TextStyles>

              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Buttons call for action. We often use a primary button to draw
                attention to a page’s highest priority action. Until, we can’t
                prioritize and there’s a bunch of primary buttons littered
                throughout a page.
              </TextStyles>
              <FlexLayout spacing="tight" direction="vertical" wrap="noWrap">
                <div className="inner_card_custom">
                  <FlexLayout spacing="tight" valign="end" wrap="noWrap">
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <Card cardType="filled">
                        <FlexLayout spacing="loose" direction="vertical">
                          <FlexLayout spacing="loose" halign="center">
                            <Button type="primary">Login</Button>
                            <Button type="primary">Sign Up</Button>
                            <FlexChild
                              desktopWidth="100"
                              tabWidth="100"
                              mobileWidth="100"
                            >
                              <FlexLayout halign="center">
                                <Button type="primary">Forget password?</Button>
                              </FlexLayout>
                            </FlexChild>
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
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <Card cardType="filled">
                        <FlexLayout spacing="loose" direction="vertical">
                          <FlexLayout spacing="loose" halign="center">
                            <Button type="primary">Login</Button>
                            <Button type="primary">Sign Up</Button>
                            <FlexChild
                              desktopWidth="100"
                              tabWidth="100"
                              mobileWidth="100"
                            >
                              <FlexLayout halign="center">
                                <Button type="textButton">
                                  Forget password?
                                </Button>
                              </FlexLayout>
                            </FlexChild>
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
                <div className="inner_card_custom">
                  <FlexLayout spacing="tight" valign="end" wrap="noWrap">
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <Card cardType="filled">
                        <FlexLayout spacing="loose" direction="vertical">
                          <FlexLayout spacing="loose" halign="center">
                            <Button type="secondary">Save</Button>
                            <Button type="primary">Get Started</Button>
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
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <Card cardType="filled">
                        <FlexLayout spacing="loose" direction="vertical">
                          <FlexLayout spacing="loose" halign="center">
                            <Button type="primary">Proceed</Button>
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

            <hr className="section-devider sub-section" />
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
                Use Active Verbs
              </TextStyles>

              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Generic Yes/No button labels are commonly used on a confirmation
                screens. When a user reads the active verb, they know what the
                button will do. They can take action without reading any
                supporting text such as confirmation dialog.
              </TextStyles>

              <div className="inner_card_custom">
                <FlexLayout spacing="tight" valign="end">
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <FlexLayout direction="vertical" spacing="tight">
                      <Card cardType="filled">
                        <FlexLayout spacing="loose" direction="vertical">
                          <FlexLayout
                            halign="fill"
                            spacing="loose"
                            valign="center"
                          >
                            <TextStyles
                              alignment="left"
                              fontweight="extraBold"
                              subheadingTypes="XS-1.6"
                              textcolor="dark"
                              type="SubHeading"
                              utility="none"
                            >
                              Profile Picture upload
                            </TextStyles>
                            <X size={20} />
                          </FlexLayout>

                          <FlexChild
                            desktopWidth="100"
                            mobileWidth="100"
                            tabWidth="100"
                          >
                            <TextStyles
                              alignment="left"
                              fontweight="light"
                              subheadingTypes="XS-1.6"
                              textcolor="dark"
                              type="SubHeading"
                              utility="none"
                            >
                              Are you sure you want to save your changes?
                            </TextStyles>
                          </FlexChild>
                          <FlexChild
                            desktopWidth="100"
                            tabWidth="100"
                            mobileWidth="100"
                          >
                            <FlexLayout halign="end" spacing="tight">
                              <Button type="outlined">No</Button>
                              <Button type="primary">Yes</Button>
                            </FlexLayout>
                          </FlexChild>
                        </FlexLayout>
                      </Card>
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
                  </FlexChild>
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <FlexLayout direction="vertical" spacing="tight">
                      <Card cardType="filled">
                        <FlexLayout spacing="loose" direction="vertical">
                          <FlexLayout
                            halign="fill"
                            spacing="loose"
                            valign="center"
                          >
                            <TextStyles
                              alignment="left"
                              fontweight="extraBold"
                              subheadingTypes="XS-1.6"
                              textcolor="dark"
                              type="SubHeading"
                              utility="none"
                            >
                              Profile Picture upload
                            </TextStyles>
                            <X size={20} />
                          </FlexLayout>

                          <FlexChild
                            desktopWidth="100"
                            mobileWidth="100"
                            tabWidth="100"
                          >
                            <TextStyles
                              alignment="left"
                              fontweight="light"
                              subheadingTypes="XS-1.6"
                              textcolor="dark"
                              type="SubHeading"
                              utility="none"
                            >
                              Are you sure you want to save your changes?
                            </TextStyles>
                          </FlexChild>
                          <FlexChild
                            desktopWidth="100"
                            tabWidth="100"
                            mobileWidth="100"
                          >
                            <FlexLayout halign="end" spacing="tight">
                              <Button type="outlined">Discard</Button>
                              <Button type="primary">Save Changes</Button>
                            </FlexLayout>
                          </FlexChild>
                        </FlexLayout>
                      </Card>
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
                  </FlexChild>
                </FlexLayout>
              </div>
            </FlexLayout>
            <div style={{ marginTop: "15px" }}>
              <FlexLayout spacing="extraLoose" direction="vertical">
                <TextStyles>
                  Buttons are clickable elements that are used to trigger
                  actions based on a user's interaction.
                </TextStyles>
                <p>
                  <blockquote>
                    Buttons communicate actions that users can take. They should
                    be easy to find among other elements.
                  </blockquote>
                </p>
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
export default ButtonDoc;
