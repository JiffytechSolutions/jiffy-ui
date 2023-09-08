import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";
import { StepWizardDo1, StepWizardDo2, StepWizardDo3, StepWizardDont1, StepWizardDont2, StepWizardDont3 } from "../../../StorybookImages/StepWizardImage";

export const StepWizardDoc = () => {
    return (
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
                                        Don't make the wizard too long or have too many steps.
                                        Users may become frustrated or lose interest if the process is too time-consuming.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="extraLoose" direction="vertical">
                                        <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <StepWizardDont1 />
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
                                                <StepWizardDo1 />
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
                                        Don’t use custom icon for step wizard. Only Step Wizard Icons and numbers are allowed.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="extraLoose" direction="vertical">
                                        <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <StepWizardDont2 />
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
                                                <StepWizardDo2 />
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
                                        The label should correspond to the correct number of steps displayed with label.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="extraLoose" direction="vertical">
                                        <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <StepWizardDont3 />
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
                                                <StepWizardDo3 />
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
                    <List type={'disc'}>
                        <TextStyles
                            alignment="left"
                            fontweight="normal"
                            subheadingTypes="SM-1.8"
                            textcolor="light"
                            type="SubHeading"
                            utility="storybook-doc--paragraph"
                        >
                            Users should have the option to go back and modify their previous choices as
                            it saves them from having to re-run the entire wizard. (Optional)
                        </TextStyles>
                        <TextStyles
                            alignment="left"
                            fontweight="normal"
                            subheadingTypes="SM-1.8"
                            textcolor="light"
                            type="SubHeading"
                            utility="storybook-doc--paragraph"
                        >
                            Keep the wizard’s purpose clear. A clear, concise wizard label on
                            every screen and a brief explanation of purpose on the first screen.
                        </TextStyles>
                        <TextStyles
                            alignment="left"
                            fontweight="normal"
                            subheadingTypes="SM-1.8"
                            textcolor="light"
                            type="SubHeading"
                            utility="storybook-doc--paragraph"
                        >
                            Eliminate unnecessary interface elements that can distract the user
                            when they're trying to complete a task.
                        </TextStyles>
                    </List>

                </FlexLayout>
            </div>
            <hr className="section-devider" />
            <StoryBookFooter />
        </div>
    )
}
export default StepWizardDoc;
