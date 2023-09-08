import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";
import { TabsDo1, TabsDo2, TabsDo3, TabsDo4, TabsDont1, TabsDont2, TabsDont3, TabsDont4 } from "../../../StorybookImages/StorybookImages";

export const TabDoc = () => {
    return (
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
                        <List type={"disc"}>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Use Badges to display read-only information like statuses, attributes, and other emphasized information.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Use the variant and size properties to ensure your badges have the right visibility and visual hierarchy on your page.

                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Limit Badge text to 1–2 words if possible. These elements are most effective when displaying short pieces of text.
                            </TextStyles>

                        </List>

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
                        <List type={"disc"}>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                To ensure clarity and optimal user experience,
                                it is recommended to avoid using Badges for clickable or interactive elements. Badges are specifically designed with fully rounded edges
                                to differentiate themselves from Buttons and other similar elements.
                            </TextStyles>
                        </List>
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
                                        Stick to only one row of tabs.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <TabsDont1 />
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
                                        </FlexChild>
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <TabsDo1 />
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
                                        Don’t mix tabs that contain only text, with tabs that contain only icons.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <TabsDont2 />
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
                                        </FlexChild>
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <TabsDo2 />
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
                                        Do not cut the tab’s name just to make them fit horizontally.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <TabsDont3 />
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
                                        </FlexChild>
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <TabsDo3 />
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
                                        To improve the usability of the tabs, it is recommended to prioritize the order by relevance,
                                        making the first tab the most logical starting view. Additionally, for a better user experience,
                                        it is ideal to group tabs by association, placing tabs with similar content adjacent to each other.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <TabsDont4 />
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
                                        </FlexChild>
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <TabsDo4 />
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
                                        </FlexChild>
                                    </FlexLayout>
                                </div>
                            </FlexLayout>
                        </FlexLayout>
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
                    Guidelines
                </TextStyles>
                <FlexLayout direction="vertical" spacing="loose">
                    <FlexLayout direction="vertical" spacing="tight">
                        <List type={"disc"}>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Use short tab labels that are clear and specific. Labels should be one to two words, as these are easier to scan.


                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Text labels should clearly communicate the view users will see and the content contained in the view.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Only one tab should be active at a time.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Not be used for primary navigation (Example- Sidebar).
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Do not nest a tab group within another tab group.


                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Don't use tabs if the user needs to view the content of all the tabs at once to get the job done.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Start your tab labels with a capital letter.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Don’t use commas or any punctuation at the end of each label.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Vertical tabs can have truncated labels, but horizontal tabs cannot have truncated labels.
                            </TextStyles>
                        </List>
                    </FlexLayout>
                </FlexLayout>
            </div>
            <hr className="section-devider" />
            <StoryBookFooter />
        </div>
    )
}
export default TabDoc;
