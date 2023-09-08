import React from "react";
import { HelpCircle } from "../../../../storybook/Foundation/Icons/Icons";
import StoryBookFooter from "../../../../StorybookFooter/StoryBookFooter";
import Button from "../../../Button/Button";
import Card from "../../../Card/Card";
import { FlexChild, FlexLayout } from "../../../FlexLayout";
import TextStyles from "../../../TextStyles/TextStyles";
import Select from "../../Select/Select";
import TextField from "../TextField";

export const TextFieldDoc = () => {
  return (
    <>
      <div className="story-documentation">
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
                Be direct and clear
              </TextStyles>

              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Make sure your text field has a short, descriptive label above
                it that describes what the user should type into the box below.
                Avoid phrasing your labels as questions. Keep in mind that your
                label shouldn’t contain instructions.
              </TextStyles>
              <div className="inner_card_custom">
                <FlexLayout spacing="tight">
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Card cardType="filled">
                      <FlexLayout spacing="loose" direction="vertical">
                        <FlexLayout spacing="loose" halign="center">
                          <TextField
                            autocomplete="new-password"
                            label="What is your email address?"
                            onChange={function noRefCheck() {}}
                            placeHolder="ced@cedcoss.com"
                            type="email"
                          />
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
                          <TextField
                            autocomplete="new-password"
                            label="Email"
                            onChange={function noRefCheck() {}}
                            placeHolder="ced@cedcoss.com"
                            type="email"
                          />
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
                Use of help text field
              </TextStyles>

              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Always use help text field to guide the error.
              </TextStyles>
              <div className="inner_card_custom">
                <FlexLayout spacing="tight">
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Card cardType="filled">
                      <FlexLayout spacing="loose" direction="vertical">
                        <FlexLayout spacing="loose" halign="center">
                          <TextField
                            autocomplete="new-password"
                            label="Email"
                            onChange={function noRefCheck() {}}
                            placeHolder="ced@cedcoss.com"
                            type="email"
                          />
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
                          <TextField
                            controlStates="error"
                            helpText="Please enter your email address"
                            helpIcon={<HelpCircle size={20} />}
                            label="Error"
                            onChange={function noRefCheck() {}}
                            placeHolder="Enter here"
                            type="text"
                            value=""
                          />
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
                Avoid Repetition
              </TextStyles>

              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Avoid repeating the field label. If the field label provides
                sufficient context for completing the action, then you likely
                don’t need to add help text.
              </TextStyles>
              <div className="inner_card_custom">
                <FlexLayout spacing="tight">
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Card cardType="filled">
                      <FlexLayout spacing="loose" direction="vertical">
                        <FlexLayout spacing="loose" halign="center">
                          <TextField
                            helpText="For Example: ced@cedcoss.com"
                            label="Email"
                            onChange={function noRefCheck() {}}
                            placeHolder="ced@cedcoss.com"
                            type="text"
                            value=""
                          />
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
                          <TextField
                            label="Email"
                            onChange={function noRefCheck() {}}
                            placeHolder="ced@cedcoss.com"
                            type="text"
                            value=""
                          />
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
                Avoid Uppercase
              </TextStyles>

              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                UPPERCASE text is harder to read because the labels are
                difficult to read and much harder to quickly scan.
              </TextStyles>
              <div className="inner_card_custom">
                <FlexLayout spacing="tight">
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Card cardType="filled">
                      <FlexLayout spacing="loose" direction="vertical">
                        <FlexLayout spacing="loose" halign="center">
                          <TextField
                            label="Email"
                            onChange={function noRefCheck() {}}
                            placeHolder="ENTER YOUR TEXT"
                            type="text"
                            value=""
                          />
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
                          <TextField
                            label="Email"
                            onChange={function noRefCheck() {}}
                            placeHolder="ced@cedcoss.com"
                            type="text"
                            value=""
                          />
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
            Do’s & Don’ts for Input field with connector
          </TextStyles>
          <FlexLayout direction="vertical" spacing="loose">
            <FlexLayout direction="vertical" spacing="tight">
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
                  Only use Outlined secondary buttons with input field.
                </TextStyles>
              </FlexLayout>

              <div className="inner_card_custom">
                <FlexLayout spacing="tight">
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Card cardType="filled">
                      <FlexLayout spacing="loose" direction="vertical">
                        <FlexLayout spacing="loose" halign="center">
                          <div className="storybook--connected-button">
                            <TextField
                              connectLeft={
                                <Select
                                  onChange={function noRefCheck() {}}
                                  options={[
                                    { label: "KG", value: "Kg" },
                                    { label: "Gram", value: "Gram" },
                                    { label: "Mg", value: "Mg" },
                                  ]}
                                  placeholder="Kg"
                                  value={"kg"}
                                />
                              }
                              connectRight={
                                <Button
                                  content="Submit"
                                  size="large"
                                  type="outlined"
                                />
                              }
                              helpText="Please enter an amount"
                              label="Enter an amount"
                              onChange={function noRefCheck() {}}
                              placeHolder="Enter text"
                              type="text"
                              helpIcon={<HelpCircle size={20} />}
                              value="10"
                            />
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
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Card cardType="filled">
                      <FlexLayout spacing="loose" direction="vertical">
                        <FlexLayout spacing="loose" halign="center">
                          <TextField
                            connectLeft={
                              <Select
                                onChange={function noRefCheck() {}}
                                options={[
                                  { label: "KG", value: "Kg" },
                                  { label: "Gram", value: "Gram" },
                                  { label: "Mg", value: "Mg" },
                                ]}
                                placeholder="Kg"
                                value={"kg"}
                              />
                            }
                            connectRight={
                              <Button
                                content="Submit"
                                size="large"
                                type="outlined"
                              />
                            }
                            helpText="Please enter an amount"
                            label="Enter an amount"
                            onChange={function noRefCheck() {}}
                            placeHolder="Enter text"
                            type="text"
                            helpIcon={<HelpCircle size={20} />}
                            value="10"
                          />
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
            <hr className="section-devider sub-section" />
            <FlexLayout direction="vertical" spacing="tight">
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
                  Use stepper only when you have to change between digits.
                </TextStyles>
              </FlexLayout>
              <div className="inner_card_custom">
                <FlexLayout spacing="tight">
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Card cardType="filled">
                      <FlexLayout spacing="loose" direction="vertical">
                        <FlexLayout spacing="loose" halign="center">
                          <TextField
                            autocomplete="new-password"
                            label="Email"
                            onChange={function noRefCheck() {}}
                            placeHolder="ced@cedcoss.com"
                            type="number"
                          />
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
                          <TextField
                            connectLeft={
                              <Select
                                onChange={function noRefCheck() {}}
                                options={[
                                  { label: "KG", value: "Kg" },
                                  { label: "Gram", value: "Gram" },
                                  { label: "Mg", value: "Mg" },
                                ]}
                                placeholder="Kg"
                                value={"$"}
                              />
                            }
                            label="Enter an amount"
                            onChange={function noRefCheck() {}}
                            placeHolder="Enter text"
                            type="number"
                            value="10"
                          />
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

            <hr className="section-devider sub-section" />
            <FlexLayout direction="vertical" spacing="tight">
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
                  Size of the select dropdown has to be smaller than the input
                  field.
                </TextStyles>
              </FlexLayout>
              <div className="inner_card_custom">
                <FlexLayout spacing="tight">
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Card cardType="filled">
                      <FlexLayout spacing="loose" direction="vertical">
                        <FlexLayout spacing="loose" halign="center">
                          <div className="story--connectedleft-width">
                            <TextField
                              connectLeft={
                                <Select
                                  onChange={function noRefCheck() {}}
                                  options={[
                                    { label: "$", value: "$" },
                                    { label: "Gram", value: "Gram" },
                                    { label: "Mg", value: "Mg" },
                                  ]}
                                  placeholder="test"
                                  value={"$"}
                                />
                              }
                              label="Enter an amount"
                              onChange={function noRefCheck() {}}
                              placeHolder="Enter text"
                              type="number"
                              value="126"
                            />
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
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Card cardType="filled">
                      <FlexLayout spacing="loose" direction="vertical">
                        <FlexLayout spacing="loose" halign="center">
                          <TextField
                            connectLeft={
                              <Select
                                onChange={function noRefCheck() {}}
                                options={[
                                  { label: "$", value: "$" },
                                  { label: "Gram", value: "Gram" },
                                  { label: "Mg", value: "Mg" },
                                ]}
                                placeholder="test"
                                value={"$"}
                              />
                            }
                            label="Enter an amount"
                            onChange={function noRefCheck() {}}
                            placeHolder="Enter text"
                            type="number"
                            value="126"
                          />
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

            <hr className="section-devider sub-section" />
            <FlexLayout direction="vertical" spacing="tight">
              <FlexLayout spacing="extraTight" wrap="noWrap">
                <TextStyles
                  alignment="left"
                  fontweight="extraBold"
                  subheadingTypes="SM-1.8"
                  textcolor="dark"
                  type="SubHeading"
                  utility="storybook-doc--paragraph"
                >
                  4-:
                </TextStyles>
                <TextStyles
                  alignment="left"
                  fontweight="normal"
                  subheadingTypes="SM-1.8"
                  textcolor="light"
                  type="SubHeading"
                  utility="storybook-doc--paragraph"
                >
                  In select dropdown, only use values like units, currency or
                  country code.
                </TextStyles>
              </FlexLayout>
              <div className="inner_card_custom">
                <FlexLayout spacing="tight">
                  <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                    <Card cardType="filled">
                      <FlexLayout spacing="loose" direction="vertical">
                        <FlexLayout spacing="loose" halign="center">
                          <TextField
                            connectLeft={
                              <Select
                                onChange={function noRefCheck() {}}
                                options={[
                                  { label: "RU", value: "RU" },
                                  { label: "Gram", value: "Gram" },
                                  { label: "Mg", value: "Mg" },
                                ]}
                                placeholder="RU"
                                value={"RU"}
                              />
                            }
                            label="Enter phone number"
                            onChange={function noRefCheck() {}}
                            placeHolder="3566768902"
                            type="text"
                            value="3566768902"
                          />
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
                          <TextField
                            connectLeft={
                              <Select
                                onChange={function noRefCheck() {}}
                                options={[
                                  { label: "+7", value: "+7" },
                                  { label: "Gram", value: "Gram" },
                                  { label: "Mg", value: "Mg" },
                                ]}
                                placeholder="+7"
                                value={"+7"}
                              />
                            }
                            label="Enter phone number"
                            onChange={function noRefCheck() {}}
                            placeHolder="3566768902"
                            type="text"
                            value="3566768902"
                          />
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
        </div>
        <hr className="section-devider" />
        <StoryBookFooter />
      </div>
    </>
  );
};
export default TextFieldDoc;
