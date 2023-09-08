import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { ModalDo1, ModalDont1 } from "../../../StorybookImages/StorybookImages";
import { Card } from "../../Card";
import { FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";

export const ModalDoc = () => {
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
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Modal should:
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
                                    Include descriptive headings that include the main message of the modal
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    Be clear which button is confirmation and which is cancellation through your labels.
                                </TextStyles>
                            </List>
                            <div className="inner_card_custom">
                                <FlexLayout wrap="noWrap" spacing="tight">
                                    <Card cardType="filled">
                                        <FlexLayout spacing="loose" direction="vertical">
                                            <FlexLayout spacing="loose" halign="center">
                                                <ModalDont1 />
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
                                    <Card cardType="filled">
                                        <FlexLayout spacing="loose" direction="vertical">
                                            <FlexLayout spacing="loose" halign="center">
                                                <ModalDo1 />
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
                                    Make a dismiss control visible.
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    Put a modal window in a focus
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
                                    Do not use for important error notifications, instead use Alert
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    Do not use for short messaging confirming successful interactions
                                    such as "Email sent", instead use Alert or Toast
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    Avoid using modals on top of modals
                                </TextStyles>
                            </List>
                        </FlexLayout>
                    </FlexLayout>
                </div>
                <hr className="section-devider" />
                <StoryBookFooter />
            </div>
        </>
    );
};
export default ModalDoc;
