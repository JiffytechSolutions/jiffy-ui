import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";;
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";
import Avatar from "../Avatar";
import AvatarImg6 from '../../../StorybookImages/avatar/g.png'
import AvatarImg7 from '../../../StorybookImages/avatar/m.png'
import AvatarImg8 from '../../../StorybookImages/avatar/nm.png'
import AvatarImg9 from '../../../StorybookImages/avatar/em.png'


export const AvatarDoc = () => {
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
                    Do’s &amp; Don’ts
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
                                        Use branded generic avatars when a user has not set their avatar image.
                                        Don’t make assumptions and use gendered placeholder avatars.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <FlexLayout spacing="loose" halign="center">
                                                        <Avatar
                                                            image={AvatarImg6}
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
                                                    <FlexLayout spacing="loose" halign="center">
                                                        <Avatar
                                                            image={AvatarImg7}
                                                            size="medium"
                                                        />
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
                                        Don’t use alternative graphics or icons.
                                        Use the default alternative if no image source is available.
                                        This will be the first character of the provided name.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <FlexLayout halign="center">
                                                        <Avatar
                                                            image={AvatarImg9}
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
                                                        <Avatar
                                                            image={AvatarImg8}
                                                            size="medium"
                                                        />
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
                                        Don’t place elements like text or icons over Avatars.
                                        Use the collaborator’s name nearby or in an alternative view if possible.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <FlexLayout halign="center">
                                                        <FlexLayout direction="vertical">
                                                            <Avatar
                                                                image={AvatarImg7}
                                                                size="medium"
                                                            />
                                                            <TextStyles utility="avatar--custom-width">
                                                                Robert
                                                                Sher
                                                            </TextStyles>
                                                        </FlexLayout>
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
                                                    <FlexLayout halign="center" valign="center" spacing="loose">
                                                        <Avatar
                                                            image={AvatarImg7}
                                                            size="medium"
                                                        />
                                                        <TextStyles type="SubHeading" subheadingTypes="XS-1.6" fontweight="bold" textcolor="dark">
                                                            Robert
                                                            Sher
                                                        </TextStyles>
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
    )
}
export default AvatarDoc;
