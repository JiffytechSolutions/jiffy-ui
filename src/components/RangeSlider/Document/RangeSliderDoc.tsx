import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";

import { RangeSliderDo1, RangeSliderDont1, TabsDo1, TabsDo2, TabsDo3, TabsDo4, TabsDont1, TabsDont2, TabsDont3, TabsDont4 } from "../../../StorybookImages/StorybookImages";

export const RangeSliderDoc = () => {
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
                                        Avoid using long descriptions.
                                        Labels are not instructional texts but they should be meaningful and indicate expected action.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <RangeSliderDont1 />
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
                                                <RangeSliderDo1 />
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
                                Range value should indicate what value the slider is changing.

                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Sliders should present the full range of choices that are available to a user
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
export default RangeSliderDoc;
