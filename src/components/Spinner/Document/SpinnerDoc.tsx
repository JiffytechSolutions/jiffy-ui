import React from "react";
import Button from "../../Button/Button";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";
import Spinner from "../Spinner";
import { SpinnerDo1, SpinnerDo2, SpinnerDont1, SpinnerDont2 } from "../../../StorybookImages/StorybookImages";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";

export const SpinnerDoc = () => {
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
                                            Do not present spinner outside the button. It subsists as an embedded component with button.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <FlexLayout valign="center" halign="center" spacing="loose">
                                                            <Spinner
                                                                color="info"
                                                                size="small"
                                                            />
                                                            <div className="story--spinner-button__size">
                                                                <Button isDisable type="primary" size="extraThin"></Button>
                                                            </div>
                                                        </FlexLayout>
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
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <FlexLayout valign="center" halign="center">
                                                            <div className="story--spinner-button__size">
                                                                <Button
                                                                    isLoading
                                                                    size="extraThin"
                                                                    type="primary"
                                                                >
                                                                    primary
                                                                </Button>
                                                            </div>
                                                        </FlexLayout>
                                                    </Card>
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
                                            Do not use Loading button in popup modal. Instead, use buttons.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <FlexLayout halign="center" spacing="loose">
                                                            <SpinnerDont1 />
                                                        </FlexLayout>
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
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <FlexLayout halign="center" spacing="loose">
                                                            <SpinnerDo1 />
                                                        </FlexLayout>
                                                    </Card>
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
                                            When a page is loading, use skeleton instead of spinner. Skeleton screens shift the attention of users.
                                            It makes people focus on the progress, rather than the wait time.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <FlexLayout halign="center" spacing="loose">
                                                            <SpinnerDont2 />
                                                        </FlexLayout>
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
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <FlexLayout halign="center" spacing="loose">
                                                            <SpinnerDo2 />
                                                        </FlexLayout>
                                                    </Card>
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
                <StoryBookFooter />

            </div>
        </>
    )
}
export default SpinnerDoc;
