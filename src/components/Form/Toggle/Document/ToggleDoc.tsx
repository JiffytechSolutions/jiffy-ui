import React from "react";
import StoryBookFooter from "../../../../StorybookFooter/StoryBookFooter";
import { Card } from "../../../Card";
import { FlexChild, FlexLayout } from "../../../FlexLayout";
import Radio from "../../Radio/Radio";
import List from "../../../List/List";
import TextStyles from "../../../TextStyles/TextStyles";
import Toggle from "../Toggle";



export const ToggleDoc = () => {
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
                            <FlexLayout direction="vertical" spacing="loose">
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
                                        Avoid using toggle for :
                                    </TextStyles>
                                </FlexLayout>
                                <List type="disc">
                                    <TextStyles textcolor="light">
                                        Configuration purpose
                                    </TextStyles>
                                    <TextStyles textcolor="light">
                                        Yes/no questions
                                    </TextStyles>
                                </List>
                                <TextStyles textcolor="light">
                                    Use Radio buttons instead
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout direction="vertical" spacing="loose">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <Card cardType="filled" title={"Theme"}>
                                                <FlexLayout spacing="loose" direction="vertical">
                                                    <FlexLayout spacing="tight" halign="center" valign="center">
                                                        <TextStyles textcolor="light">
                                                            Dark
                                                        </TextStyles>
                                                        <Toggle
                                                            checked={true}
                                                            customClass=""
                                                            label=""
                                                            onChange={() => { }}
                                                        />
                                                        <TextStyles textcolor="light">
                                                            Dark
                                                        </TextStyles>
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
                                            <Card cardType="filled" title={"Theme"} >
                                                <FlexLayout spacing="loose" direction="vertical">
                                                    <FlexLayout spacing="tight" halign="center" valign="center">
                                                        <Radio
                                                            id="12"
                                                            label="Light"
                                                            name="12"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={true}
                                                        />

                                                        <Radio
                                                            id="1"
                                                            label="Dark"
                                                            name="12"
                                                            onChange={() => { }}
                                                            value="items"
                                                            checked={false}
                                                        />
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
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <Card cardType="filled">
                                                <FlexLayout spacing="loose" direction="vertical">
                                                    <FlexLayout direction="vertical" spacing="loose">
                                                        <TextStyles alignment="center" textcolor="light">
                                                            Do you have any credit cards?
                                                        </TextStyles>
                                                        <FlexLayout spacing="tight" halign="center" valign="center">
                                                            <TextStyles textcolor="light">
                                                                Yes
                                                            </TextStyles>
                                                            <Toggle
                                                                checked={true}
                                                                customClass=""
                                                                label=""
                                                                onChange={() => { }}
                                                            />
                                                            <TextStyles textcolor="light">
                                                                No
                                                            </TextStyles>
                                                        </FlexLayout>
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
                                            <Card cardType="filled">
                                                <FlexLayout spacing="loose" direction="vertical">
                                                    <FlexLayout direction="vertical" spacing="loose">
                                                        <TextStyles alignment="center" textcolor="light">
                                                            Do you have any credit cards?
                                                        </TextStyles>
                                                        <FlexLayout spacing="tight" halign="center" valign="center">
                                                            <Radio
                                                                id="9"
                                                                label="Yes"
                                                                name="9"
                                                                onChange={() => { }}
                                                                value="items"
                                                                checked={true}
                                                            />

                                                            <Radio
                                                                id="10"
                                                                label="No"
                                                                name="9"
                                                                onChange={() => { }}
                                                                value="items"
                                                                checked={false}
                                                            />
                                                        </FlexLayout>
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
                                    Toggles should be used instead of radio buttons or
                                    checkboxes if each item in a set can be independently controlled.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" valign="center">
                                                    <Radio
                                                        id="5"
                                                        label="Cellular Data"
                                                        name="5"
                                                        onChange={() => { }}
                                                        value="items"
                                                        checked={true}
                                                    />
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
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" valign="center">

                                                    <Toggle
                                                        checked={true}
                                                        customClass=""
                                                        label="Cellular Data"
                                                        onChange={() => { }}
                                                    />

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
                                    Don't change the label when the switch is toggled between selected and unselected.
                                    Keep the same label regardless of whether the switch is on or off.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" valign="center" direction="vertical">
                                                    <Toggle
                                                        checked={true}
                                                        customClass=""
                                                        label="Show images"
                                                        onChange={() => { }}
                                                    />
                                                    <Toggle
                                                        checked={false}
                                                        customClass=""
                                                        label="Hide images"
                                                        onChange={() => { }}
                                                    />
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
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="tight" halign="center" valign="center" direction="vertical">

                                                    <Toggle
                                                        checked={true}
                                                        customClass=""
                                                        label="Show images"
                                                        onChange={() => { }}
                                                    />
                                                    <Toggle
                                                        checked={false}
                                                        customClass=""
                                                        label="Show images"
                                                        onChange={() => { }}
                                                    />
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
                                    Labels should be self explanatory.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical" wrap="noWrap">
                                                <div className="story--toggle-boxed_layout">
                                                    <FlexLayout spacing="tight" halign="center" valign="center" direction="vertical">
                                                        <FlexLayout halign="fill" spacing="tight">
                                                            <TextStyles textcolor="dark" subheadingTypes="XS-1.6" fontweight="normal" alignment="left">
                                                                Animation Theme
                                                            </TextStyles>
                                                            <Toggle
                                                                checked={false}
                                                                customClass=""
                                                                label="OFF"
                                                                onChange={() => { }}
                                                            />
                                                        </FlexLayout>
                                                        <FlexLayout halign="fill" spacing="tight">
                                                            <TextStyles textcolor="dark" subheadingTypes="XS-1.6" fontweight="normal" alignment="left">
                                                                Cookies
                                                            </TextStyles>
                                                            <Toggle
                                                                checked={true}
                                                                customClass=""
                                                                label="OFF"
                                                                onChange={() => { }}
                                                            />
                                                        </FlexLayout>
                                                        <FlexLayout halign="fill" spacing="tight">
                                                            <TextStyles textcolor="dark" subheadingTypes="XS-1.6" fontweight="normal" alignment="left">
                                                                Font
                                                            </TextStyles>
                                                            <Toggle
                                                                checked={true}
                                                                customClass=""
                                                                label="OFF"
                                                                onChange={() => { }}
                                                            />
                                                        </FlexLayout>
                                                    </FlexLayout>
                                                </div>

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
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical" wrap="noWrap">
                                                <div className="story--toggle-boxed_layout">
                                                    <FlexLayout spacing="tight" halign="center" valign="center" direction="vertical">
                                                        <FlexLayout halign="fill" spacing="tight">
                                                            <TextStyles textcolor="dark" subheadingTypes="XS-1.6" fontweight="normal" alignment="left">
                                                                Dark mode
                                                            </TextStyles>
                                                            <Toggle
                                                                checked={false}
                                                                customClass=""
                                                                label="OFF"
                                                                onChange={() => { }}
                                                            />
                                                        </FlexLayout>
                                                        <FlexLayout halign="fill" spacing="tight">
                                                            <TextStyles textcolor="dark" subheadingTypes="XS-1.6" fontweight="normal" alignment="left">
                                                                Allow Cookies
                                                            </TextStyles>
                                                            <Toggle
                                                                checked={true}
                                                                customClass=""
                                                                label="OFF"
                                                                onChange={() => { }}
                                                            />
                                                        </FlexLayout>
                                                        <FlexLayout halign="fill" spacing="tight">
                                                            <TextStyles textcolor="dark" subheadingTypes="XS-1.6" fontweight="normal" alignment="left">
                                                                Bold Font
                                                            </TextStyles>
                                                            <Toggle
                                                                checked={true}
                                                                customClass=""
                                                                label="OFF"
                                                                onChange={() => { }}
                                                            />
                                                        </FlexLayout>
                                                    </FlexLayout>
                                                </div>

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
                <hr className="section-devider sub-section" />
                <StoryBookFooter />
            </div>
        </>
    )
}
export default ToggleDoc;
