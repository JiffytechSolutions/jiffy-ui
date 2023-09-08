import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { NotificationDo1, NotificationDo2, NotificationDont1, NotificationDont2 } from "../../../StorybookImages/StepWizardImage";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import Popover from "../../Popover/Popover";
import TextStyles from "../../TextStyles/TextStyles";


export const NotificationDoc = () => {
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


                <TextStyles
                    alignment="left"
                    fontweight="normal"
                    subheadingTypes="SM-1.8"
                    textcolor="light"
                    type="SubHeading"
                    utility="storybook-doc--paragraph"
                >
                    Tags should be utilized in situations where content is assigned to
                    multiple categories, and it is necessary for the user to distinguish between them.
                    Using tags as a filtering mechanism is also possible, as it enables users to view only those items that belong to a specific category.
                </TextStyles>


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
                                        The title should be short and descriptive, explaining the most important piece of information.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <NotificationDont1 />
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
                                                <NotificationDo1 />
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
                                        The title should be short and descriptive, explaining the most important piece of information.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <NotificationDont2 />
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
                                                <NotificationDo2 />
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
                                New updates, bug fixers, specials, or new features must be sent/found in announcement section. General notification section consists of messages like informative, neutral, warning, success and critical messages.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Scroll can be added to notification section if notification unit exceeds the area(490x796).
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Notification will be opened as side sheet on application.
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
export default NotificationDoc;
