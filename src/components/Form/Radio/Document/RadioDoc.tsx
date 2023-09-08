import React from "react";
import StoryBookFooter from "../../../../StorybookFooter/StoryBookFooter";
import { Card } from "../../../Card";
import { FlexChild, FlexLayout } from "../../../FlexLayout";
import TextStyles from "../../../TextStyles/TextStyles";
import Radio from "../Radio";

export const RadioDoc = () => {
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
                                    Avoid nesting radio buttons.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="1"
                                                            label="Option 1"
                                                            name="1"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio left--space">
                                                        <Radio
                                                            id="2"
                                                            label="Option 2"
                                                            name="2"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio left--space">
                                                        <Radio
                                                            id="3"
                                                            label="Option 3"
                                                            name="3"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="4"
                                                            label="Option 4"
                                                            name="4"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                        <Card cardType="filled" >
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="5"
                                                            label="Option 1"
                                                            name="5"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="6"
                                                            label="Option 2"
                                                            name="6"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="7"
                                                            label="Option 3"
                                                            name="7"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="8"
                                                            label="Option 4"
                                                            name="8"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                    Don’t allow radio buttons to select multiple options.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="9"
                                                            label="Option 1"
                                                            name="9"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="10"
                                                            label="Option 2"
                                                            name="10"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="11"
                                                            label="Option 3"
                                                            name="11"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="12"
                                                            label="Option 4"
                                                            name="12"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                        <Card cardType="filled" >
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="13"
                                                            label="Option 1"
                                                            name="13"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="14"
                                                            label="Option 2"
                                                            name="14"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="15"
                                                            label="Option 3"
                                                            name="15"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="16"
                                                            label="Option 4"
                                                            name="16"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                    Don’t leave all radio buttons unselected. Mark the first item as selected,
                                    and make sure it’s the most common or popular action.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="17"
                                                            label="Option 1"
                                                            name="17"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="18"
                                                            label="Option 2"
                                                            name="18"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="19"
                                                            label="Option 3"
                                                            name="19"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="20"
                                                            label="Option 4"
                                                            name="20"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                        <Card cardType="filled" >
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="21"
                                                            label="Option 1"
                                                            name="21"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="22"
                                                            label="Option 2"
                                                            name="22"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="23"
                                                            label="Option 3"
                                                            name="23"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="24"
                                                            label="Option 4"
                                                            name="24"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                    Multiline labels should align the radio button with the top line
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio manage--width">
                                                        <Radio
                                                            id="22"
                                                            label="Radio button label that wraps to multiple lines because it is too long."
                                                            name="22"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                        <Card cardType="filled" >
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio manage--width top">
                                                        <Radio
                                                            id="21"
                                                            label="Radio button label that wraps to multiple lines because it is too long."
                                                            name="21"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                    5-:
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    Avoid using comma or semicolons
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="23"
                                                            label="Option 1;"
                                                            name="23"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="24"
                                                            label="Option 2;"
                                                            name="24"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="25"
                                                            label="Option 3;"
                                                            name="25"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="26"
                                                            label="Option 4;"
                                                            name="26"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                        <Card cardType="filled" >
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="27"
                                                            label="Option 1"
                                                            name="27"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="28"
                                                            label="Option 2"
                                                            name="28"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="29"
                                                            label="Option 3"
                                                            name="29"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="30"
                                                            label="Option 4"
                                                            name="30"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                    6-:
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    Labels should always start with a capital letter.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="31"
                                                            label="item 1"
                                                            name="31"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="32"
                                                            label="item 2"
                                                            name="32"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="33"
                                                            label="item 3"
                                                            name="33"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="34"
                                                            label="item 4"
                                                            name="34"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
                                        <Card cardType="filled" >
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" direction="vertical">
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="35"
                                                            label="Item 1"
                                                            name="35"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="36"
                                                            label="Item 1"
                                                            name="36"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="37"
                                                            label="Item 1"
                                                            name="37"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_radio">
                                                        <Radio
                                                            id="38"
                                                            label="Item 1"
                                                            name="38"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
                                                    </div>
                                                </FlexLayout>
                                                <FlexLayout direction="vertical" spacing="tight" halign="start">
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
    )
}
export default RadioDoc;
