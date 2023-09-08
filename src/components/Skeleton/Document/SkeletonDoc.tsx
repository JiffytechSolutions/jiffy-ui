import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import {
    SkeletonDo1,
    SkeletonDo2,
    SkeletonDont1,
    SkeletonDont2,
    SkeletonDont3,
} from "../../../StorybookImages/StorybookImages";
import Card from "../../Card/Card";
import { FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";
import Skeleton from "../Skeleton";

export const SkeletonDoc = () => {
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
                        <List>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                paragraphTypes="LG-1.5"
                                subheadingTypes="XS-1.6"
                                textcolor="light"
                                type="SubHeading"
                                utility="none"
                            >
                                Use Footer for helping users find secondary content that might
                                not be directly related to the main purpose of the site.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                paragraphTypes="LG-1.5"
                                subheadingTypes="XS-1.6"
                                textcolor="light"
                                type="SubHeading"
                                utility="none"
                            >
                                Footers can also be used when the pages are long (as it is the
                                case with many modern mobile designs), since it allows users to
                                quickly move to a different section of the site without
                                scrolling back to reach the main navigation.
                            </TextStyles>
                        </List>
                    </FlexLayout>
                </div>
                {/* Do’s & Don’ts section */}
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
                        Do’s & Don’ts
                    </TextStyles>
                    <FlexLayout direction="vertical" spacing="extraLoose">
                        <FlexLayout spacing="loose" direction="vertical">
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
                                    Map the skeleton shapes to the general size and shape of the
                                    data that will be replacing it once loaded.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="extraLoose" direction="vertical">
                                    <FlexLayout
                                        direction="vertical"
                                        spacing="loose"
                                        desktopWidth="100"
                                        tabWidth="100"
                                        mobileWidth="100"
                                    >
                                        <Card cardType="filled">
                                            <FlexLayout halign="center" spacing="loose">
                                                <SkeletonDont1 />
                                            </FlexLayout>
                                        </Card>
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
                                    <FlexLayout
                                        direction="vertical"
                                        spacing="loose"
                                        desktopWidth="100"
                                        tabWidth="100"
                                        mobileWidth="100"
                                    >
                                        <Card cardType="filled">
                                            <FlexLayout halign="center" spacing="loose">
                                                <SkeletonDo1 />
                                            </FlexLayout>
                                        </Card>
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
                                </FlexLayout>
                            </div>
                        </FlexLayout>
                        <hr className="section-devider" />
                        <FlexLayout spacing="loose" direction="vertical">
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
                                    Don’t use too much color in the skeleton.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="extraLoose" direction="vertical">
                                    <FlexLayout
                                        direction="vertical"
                                        spacing="loose"
                                        desktopWidth="100"
                                        tabWidth="100"
                                        mobileWidth="100"
                                    >
                                        <Card cardType="filled">
                                            <FlexLayout halign="center" spacing="loose">
                                                <SkeletonDont2 />
                                            </FlexLayout>
                                        </Card>
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
                                    <FlexLayout
                                        direction="vertical"
                                        spacing="loose"
                                        desktopWidth="100"
                                        tabWidth="100"
                                        mobileWidth="100"
                                    >
                                        <Card cardType="filled">
                                            <FlexLayout halign="center" spacing="loose">
                                                <SkeletonDo2 />
                                            </FlexLayout>
                                        </Card>
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
                                </FlexLayout>
                            </div>
                        </FlexLayout>
                        <hr className="section-devider" />
                        <FlexLayout spacing="loose" direction="vertical">
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
                                    Not everything needs to be put into your skeleton.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="extraLoose" direction="vertical">
                                    <FlexLayout
                                        direction="vertical"
                                        spacing="loose"
                                        desktopWidth="100"
                                        tabWidth="100"
                                        mobileWidth="100"
                                    >
                                        <Card cardType="filled">
                                            <FlexLayout halign="center" spacing="loose">
                                                <SkeletonDont3 />
                                            </FlexLayout>
                                        </Card>
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
                                    <FlexLayout
                                        direction="vertical"
                                        spacing="loose"
                                        desktopWidth="100"
                                        tabWidth="100"
                                        mobileWidth="100"
                                    >
                                        <Card cardType="filled">
                                            <div className="storybook--footer"></div>
                                        </Card>
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
                                </FlexLayout>
                            </div>
                        </FlexLayout>
                    </FlexLayout>
                </div>
                <hr className="section-devider" />
                {/* Best Practice */}
                <div className="block--section">
                    <TextStyles
                        alignment="left"
                        displayTypes="SM-3.4"
                        fontweight="extraBold"
                        textcolor="dark"
                        type="Display"
                        utility="storybook-doc--heading"
                    >
                        Best Practice
                    </TextStyles>

                    <FlexLayout direction="vertical" spacing="loose">
                        <TextStyles
                            alignment="left"
                            fontweight="normal"
                            subheadingTypes="XS-1.6"
                            textcolor="dark"
                            type="Paragraph"
                            utility="storybook-doc--subheading"
                        >
                            Use motion within the Skeleton to reinforce that the page is
                            loading behind the scenes. Using motion that moves from left to
                            right (wave) gives a better perception of decreased waiting time
                            than fading in and out (pulse).
                        </TextStyles>
                        <Card
                            customClass="story--customCard__skeleton"
                            cardType="bordered"
                            action={
                                <>
                                    <Skeleton type="custom" width="38px" height="38px" />
                                </>
                            }
                        //   title={
                        //     <FlexLayout spacing="loose">
                        //       <Skeleton type="custom" width="24px" height="24px" rounded />
                        //       <Skeleton type="custom" width="81px" height="24px" />
                        //     </FlexLayout>
                        //   }
                        >
                            <div className="story--customCard-skeleton">
                                <hr />
                            </div>
                            <FlexLayout direction="vertical" spacing="tight">
                                <Skeleton type="custom" width="100%" height="12px" />
                                <Skeleton type="custom" width="100%" height="12px" />
                                <Skeleton type="custom" width="80%" height="12px" />
                            </FlexLayout>
                            <div className="story--customCard-skeleton">
                                <hr />
                            </div>
                            <FlexLayout halign="end" spacing="loose">
                                <Skeleton type="custom" width="83px" height="38px" />
                                <Skeleton type="custom" width="83px" height="38px" />
                            </FlexLayout>
                        </Card>
                    </FlexLayout>
                </div>
                <hr className="section-devider" />
                <StoryBookFooter />
            </div>
        </>
    );
};
export default SkeletonDoc;
