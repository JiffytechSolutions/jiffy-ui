import React from "react";
import StoryBookFooter from "../../../../StorybookFooter/StoryBookFooter";
import { Card } from "../../../Card";
import { FlexChild, FlexLayout } from "../../../FlexLayout";
import TextStyles from "../../../TextStyles/TextStyles";
import CheckBox from "../../Checkbox/Checkbox"

export const CheckboxDoc = () => {
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
                        Do’s &amp; Don’ts
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
                                Always maintain the right order by placing checkbox on the left side of the label.
                            </TextStyles>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                    <div className="revert--checkbox storybook_checkbox">
                                                        <CheckBox
                                                            label="Option 1"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="revert--checkbox storybook_checkbox">
                                                        <CheckBox
                                                            label="Option 1"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="revert--checkbox storybook_checkbox">
                                                        <CheckBox
                                                            label="Option 1"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
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
                                                <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="Option 1"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="Option 1"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="Option 1"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
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
                            <TextStyles
                                alignment="left"
                                displayTypes="SM-3.4"
                                fontweight="extraBold"
                                subheadingTypes="LG-2.5"
                                textcolor="dark"
                                type="SubHeading"
                                utility="storybook-doc--subheading"
                            >
                                Avoid using comma or semicolons
                            </TextStyles>
                            <FlexLayout direction="vertical" spacing="extraLoose">
                                <FlexLayout spacing="extraTight" direction="vertical">
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <Card cardType="filled">
                                                    <FlexLayout spacing="loose" direction="vertical">
                                                        <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                            <div className="storybook_checkbox">
                                                                <CheckBox
                                                                    label="Option 1;"
                                                                    name="Name"
                                                                    onChange={() => { }}
                                                                    value="primary checkbox"
                                                                    checked={true}
                                                                />
                                                            </div>
                                                            <div className="storybook_checkbox">
                                                                <CheckBox
                                                                    label="Option 2;"
                                                                    name="Name"
                                                                    onChange={() => { }}
                                                                    value="primary checkbox"
                                                                    checked={false}
                                                                />
                                                            </div>
                                                            <div className="storybook_checkbox">
                                                                <CheckBox
                                                                    label="Option 3;"
                                                                    name="Name"
                                                                    onChange={() => { }}
                                                                    value="primary checkbox"
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
                                                        <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                            <div className="storybook_checkbox">
                                                                <CheckBox
                                                                    label="Option 1"
                                                                    name="Name"
                                                                    onChange={() => { }}
                                                                    value="primary checkbox"
                                                                    checked={true}
                                                                />
                                                            </div>
                                                            <div className="storybook_checkbox">
                                                                <CheckBox
                                                                    label="Option 2"
                                                                    name="Name"
                                                                    onChange={() => { }}
                                                                    value="primary checkbox"
                                                                    checked={false}
                                                                />
                                                            </div>
                                                            <div className="storybook_checkbox">
                                                                <CheckBox
                                                                    label="Option 3"
                                                                    name="Name"
                                                                    onChange={() => { }}
                                                                    value="primary checkbox"
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
                                First person perspective
                            </TextStyles>

                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                When asking merchants to agree to the terms or service, always use the first person perspective.
                            </TextStyles>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="You agree to the Terms & Services?"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
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
                                                <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="I agree to the Terms & Services"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
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

                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Don't use checkboxes when only one item can be selected from a list. Use checkboxes when one or more items can be selected.
                            </TextStyles>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="Option 1"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="Option 2"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
                                                            checked={false}
                                                        />
                                                    </div>
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="Option 3"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
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
                                                <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                    <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                        <div className="storybook_checkbox">
                                                            <CheckBox
                                                                label="Option 1"
                                                                name="Name"
                                                                onChange={() => { }}
                                                                value="primary checkbox"
                                                                checked={true}
                                                            />
                                                        </div>
                                                        <div className="storybook_checkbox">
                                                            <CheckBox
                                                                label="Option 2"
                                                                name="Name"
                                                                onChange={() => { }}
                                                                value="primary checkbox"
                                                                checked={true}
                                                            />
                                                        </div>
                                                        <div className="storybook_checkbox">
                                                            <CheckBox
                                                                label="Option 3"
                                                                name="Name"
                                                                onChange={() => { }}
                                                                value="primary checkbox"
                                                                checked={false}
                                                            />
                                                        </div>
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
                            </div>
                        </FlexLayout>
                        <hr className="section-devider sub-section" />

                        <FlexLayout direction="vertical" spacing="tight">


                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Do not vertically center wrapped text with the checkbox. Multiline labels should align the checkbox with the top line.
                            </TextStyles>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                    <div className="storybook_checkbox limited_width">
                                                        <CheckBox
                                                            label="Checkbox label that wraps to multiple lines because it is too long."
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
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
                                                <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                    <div className="storybook_checkbox limited_width">
                                                        <CheckBox
                                                            label="Checkbox label that wraps to multiple lines because it is too long."
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
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
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="option 1"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="option 2"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
                                                            checked={true}
                                                        />
                                                    </div>
                                                    <div className="storybook_checkbox">
                                                        <CheckBox
                                                            label="option 3"
                                                            name="Name"
                                                            onChange={() => { }}
                                                            value="primary checkbox"
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
                                                <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                    <FlexLayout spacing="loose" halign="center" direction="vertical">
                                                        <div className="storybook_checkbox">
                                                            <CheckBox
                                                                label="Option 1"
                                                                name="Name"
                                                                onChange={() => { }}
                                                                value="primary checkbox"
                                                                checked={true}
                                                            />
                                                        </div>
                                                        <div className="storybook_checkbox">
                                                            <CheckBox
                                                                label="Option 2"
                                                                name="Name"
                                                                onChange={() => { }}
                                                                value="primary checkbox"
                                                                checked={true}
                                                            />
                                                        </div>
                                                        <div className="storybook_checkbox">
                                                            <CheckBox
                                                                label="Option 3"
                                                                name="Name"
                                                                onChange={() => { }}
                                                                value="primary checkbox"
                                                                checked={false}
                                                            />
                                                        </div>
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
export default CheckboxDoc;
