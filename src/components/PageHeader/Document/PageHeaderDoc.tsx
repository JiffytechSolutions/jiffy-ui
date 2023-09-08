import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";
import { HeaderDo1, HeaderDont1, HeaderEmbedView, HeaderNonEmbedView } from "../../../StorybookImages/StorybookImages";

export const PageHeaderDoc = () => {
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
                                    To introduce the user to the current page.
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    To show the page title.
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    To provide core description of the page and required actions.
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
                        Views
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
                                Non-Embed view
                            </TextStyles>
                            <HeaderNonEmbedView />
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
                                Embed view
                            </TextStyles>
                            <HeaderEmbedView />
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
                                            Use consistent row heights for both the table and header rows and avoid modifying them.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="extraLoose" direction="vertical">
                                            <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <HeaderDont1 />
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
                                            <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <HeaderDo1 />
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
                        <TextStyles
                            alignment="left"
                            fontweight="normal"
                            subheadingTypes="SM-1.8"
                            textcolor="light"
                            type="SubHeading"
                            utility="storybook-doc--paragraph"
                        >
                            In header, don’t use more than 3 buttons (primary, secondary and tertiary).
                            If you have more than 3 actions, they should be placed under “More actions” popover.
                        </TextStyles>
                    </FlexLayout>
                </div>
                <hr className="section-devider" />
                <StoryBookFooter />
            </div>
        </>
    )
}
export default PageHeaderDoc;
