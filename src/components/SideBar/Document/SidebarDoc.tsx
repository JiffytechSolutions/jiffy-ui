import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";
import { Card } from "../../Card";
import { SidebarDo1, SidebarDo2, SidebarDont1, SidebarDont2, SideBarSapacingGuide } from "../../../StorybookImages/StorybookImages";

export const SideBarDoc = () => {
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
                        <TextStyles
                            alignment="left"
                            fontweight="normal"
                            subheadingTypes="SM-1.8"
                            textcolor="light"
                            type="SubHeading"
                            utility="storybook-doc--paragraph"
                        >
                            Use the sidebar component to show a list of
                            menu items and two-level menu items on left side of the page to navigate on your web-app.
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
                            Avoid using sidebar on landing pages as it will
                            reduce emphasis on CTA and the likelihood that visitors will take action.
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
                                    <FlexLayout direction="vertical" spacing="tight">
                                        <TextStyles
                                            alignment="left"
                                            fontweight="normal"
                                            subheadingTypes="SM-1.8"
                                            textcolor="light"
                                            type="SubHeading"
                                            utility="storybook-doc--paragraph"
                                        >
                                            Two parent item can’t remain opened at a time:
                                        </TextStyles>
                                        <TextStyles
                                            alignment="left"
                                            fontweight="normal"
                                            subheadingTypes="SM-1.8"
                                            textcolor="light"
                                            type="SubHeading"
                                            utility="storybook-doc--paragraph"
                                        >
                                            In a case where, user tries to open another parent item,
                                            opened parent item will collapse, but remain active at same time
                                            and target parent item will expand.
                                        </TextStyles>
                                    </FlexLayout>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="loose" >
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <SidebarDont1 />
                                                </Card>
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
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <SidebarDo1 />
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
                        <hr className="section-devider" />
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
                                    <FlexLayout direction="vertical" spacing="tight">
                                        <TextStyles
                                            alignment="left"
                                            fontweight="normal"
                                            subheadingTypes="SM-1.8"
                                            textcolor="light"
                                            type="SubHeading"
                                            utility="storybook-doc--paragraph"
                                        >
                                            Badges cannot be placed with parent item :
                                        </TextStyles>
                                        <TextStyles
                                            alignment="left"
                                            fontweight="normal"
                                            subheadingTypes="SM-1.8"
                                            textcolor="light"
                                            type="SubHeading"
                                            utility="storybook-doc--paragraph"
                                        >
                                            A nested icon will be displayed beside parent item which when clicked will
                                            expand and show child items with badges present under respective parent.
                                        </TextStyles>
                                    </FlexLayout>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="loose">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <SidebarDont2 />
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
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <SidebarDo2 />
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
                    Best Practices
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
                                Ensure if there is a call-to-action or dismissible icon
                                so that user can either get navigated to another website or cancel the announcement bar after reading.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Make sure the announcement bar doesn't interfere with the main content of the website
                            </TextStyles>
                        </List>
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
                    Spacing guide
                </TextStyles>
                <FlexLayout halign="center" spacing="loose">
                    <SideBarSapacingGuide />
                </FlexLayout>
            </div>
            <hr className="section-devider" />
            <StoryBookFooter />
        </div>
    )
}
export default SideBarDoc;
