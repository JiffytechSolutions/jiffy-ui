import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import AvatarGroup from "../../AvatarGroup/AvatarGroup";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";
import AvatarImg1 from '../../../StorybookImages/avatar/1.png'
import AvatarImg2 from '../../../StorybookImages/avatar/2.png'
import AvatarImg3 from '../../../StorybookImages/avatar/3.png'
import AvatarImg4 from '../../../StorybookImages/avatar/4.png'
import AvatarImg5 from '../../../StorybookImages/avatar/5.png'
import Avatar from "../../Avatar/Avatar";

export const AvatarGroupDoc = () => {
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
                            <FlexLayout spacing="extraTight" direction="vertical" wrap="noWrap">
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    Do not add multiple avatars, instead use avatar group. Also don’t use multiple avatar groups, side by side.
                                </TextStyles>
                                <div className="inner_card_custom">
                                    <FlexLayout direction="vertical" spacing="mediumLoose" wrap="noWrap">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <FlexLayout halign="center" spacing="loose">
                                                            <Avatar
                                                                image={AvatarImg1}
                                                                size="medium"
                                                            />
                                                            <Avatar
                                                                image={AvatarImg2}
                                                                size="medium"
                                                            />
                                                            <Avatar
                                                                image={AvatarImg3}
                                                                size="medium"
                                                            />
                                                            <Avatar
                                                                image={AvatarImg4}
                                                                size="medium"
                                                            />
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
                                                        <FlexLayout halign="center">
                                                            <AvatarGroup
                                                                customClass=""
                                                                maxCount={4}
                                                                size="medium"
                                                            >
                                                                <Avatar image={AvatarImg1} />
                                                                <Avatar image={AvatarImg2} />
                                                                <Avatar image={AvatarImg3} />
                                                                <Avatar image={AvatarImg4} />
                                                                <Avatar image={AvatarImg5} />
                                                                <Avatar image={AvatarImg2} />
                                                                <Avatar image={AvatarImg3} />
                                                                <Avatar image={AvatarImg4} />
                                                                <Avatar image={AvatarImg5} />

                                                            </AvatarGroup>
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
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <FlexLayout halign="center" spacing="mediumLoose">
                                                            <AvatarGroup
                                                                customClass=""
                                                                maxCount={2}
                                                                size="medium"
                                                            >
                                                                <Avatar image={AvatarImg3} />
                                                                <Avatar image={AvatarImg4} />
                                                                <Avatar image={AvatarImg5} />
                                                                <Avatar image={AvatarImg2} />
                                                                <Avatar image={AvatarImg3} />
                                                                <Avatar image={AvatarImg4} />
                                                                <Avatar image={AvatarImg5} />
                                                            </AvatarGroup>
                                                            <AvatarGroup
                                                                customClass=""
                                                                maxCount={3}
                                                                size="medium"
                                                            >
                                                                <Avatar image={AvatarImg1} />
                                                                <Avatar image={AvatarImg2} />
                                                                <Avatar image={AvatarImg3} />
                                                                <Avatar image={AvatarImg2} />
                                                                <Avatar image={AvatarImg3} />
                                                                <Avatar image={AvatarImg4} />
                                                                <Avatar image={AvatarImg5} />
                                                                <Avatar image={AvatarImg1} />
                                                            </AvatarGroup>
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
                                                        <FlexLayout halign="center">
                                                            <AvatarGroup
                                                                customClass=""
                                                                maxCount={4}
                                                                size="medium"
                                                            >
                                                                <Avatar image={AvatarImg1} />
                                                                <Avatar image={AvatarImg2} />
                                                                <Avatar image={AvatarImg3} />
                                                                <Avatar image={AvatarImg4} />
                                                                <Avatar image={AvatarImg5} />
                                                                <Avatar image={AvatarImg2} />
                                                                <Avatar image={AvatarImg3} />
                                                                <Avatar image={AvatarImg4} />
                                                                <Avatar image={AvatarImg5} />

                                                            </AvatarGroup>
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
    )
}
export default AvatarGroupDoc;
