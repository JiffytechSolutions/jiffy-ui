import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";

export const ThumbnailDoc = () => {
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
                            Use thumbnail to make it easier to display larger images or provide a preview of the full-size image.
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
                            Avoid thumbnail if you want to represent a made up
                            image that is associated with someone as thumbnail is a reduced size version of picture,
                            used to help in recognizing and organizing an individual or an object, use avatar instead.
                        </TextStyles>

                    </FlexLayout>
                </FlexLayout>
            </div>
            <hr className="section-devider" />
            <StoryBookFooter />
        </div>
    )
}
export default ThumbnailDoc;
