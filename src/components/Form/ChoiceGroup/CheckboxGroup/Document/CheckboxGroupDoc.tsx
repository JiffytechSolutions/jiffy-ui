import React from "react";
import TextStyles from "../../../../TextStyles/TextStyles";
import { FlexLayout } from "../../../../FlexLayout";
import StoryBookFooter from "../../../../../StorybookFooter/StoryBookFooter";
import List from "../../../../List/List";

export const CheckboxGroupDoc = () => {
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
                                    Add a title that clearly tells merchants what kind of choice they are making.
                                    Titles should be precise and scannable, that can be read and understood at a glance.
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    List options should start with a capital letter,
                                    not use commas or semicolons at the end of each line & be written in sentence case
                                </TextStyles>
                            </List>
                        </FlexLayout>
                    </FlexLayout>
                </div>
                <hr className="section-devider" />
                <StoryBookFooter />
            </div>
        </>
    )
}
export default CheckboxGroupDoc;
