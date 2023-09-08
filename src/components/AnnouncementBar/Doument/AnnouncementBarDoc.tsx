import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";
import { Card } from "../../Card";
import AnnouncementBar from "../AnnouncementBar";
import { Folder } from "../../../storybook/Foundation/Icons/Icons";
import TextLink from "../../TextLink/TextLink";

export const AnnouncementBarDoc = () => {
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
                                    Use Announcement bar if the information needs to be highlighted in a clear and customizable way.
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    Its can be used to increase user engagement on applications.
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    It can also be used to easily rotate out specials or links, notify posting most recent offering for users to see.
                                </TextStyles>
                            </List>
                        </FlexLayout>
                    </FlexLayout>
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
                                            Avoid using announcement bar for pointless pokes,
                                            until the displayable content is new update, special or promotion which contributes to user engagement.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight" direction="vertical">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <AnnouncementBar
                                                        customClass="storybook-announcement"
                                                        destroy={true}
                                                        action={{ content: "Update" }}
                                                        bgImage="https://i.imgur.com/zpGUiXt.png"
                                                    >
                                                        <FlexLayout halign="center">
                                                            <Folder size={16} />
                                                            Hi User, Hope your day gies well !!!
                                                        </FlexLayout>

                                                    </AnnouncementBar>
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
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <AnnouncementBar
                                                        customClass="storybook-announcement"
                                                        destroy={true}
                                                        action={{ content: "Update" }}
                                                        bgImage="https://i.imgur.com/zpGUiXt.png"
                                                    >
                                                        <FlexLayout halign="center">
                                                            <Folder size={16} />
                                                            Update available, click on <TextLink label="download" />  to get the best out of our app!
                                                        </FlexLayout>

                                                    </AnnouncementBar>
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
                                        </FlexLayout>
                                    </div>
                                </FlexLayout>
                            </FlexLayout>
                            <hr className="section-devider" />
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
                                            Stick to a quick announcement. Don’t overload announcement bar with too much text and information.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight" direction="vertical">

                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <AnnouncementBar
                                                        customClass="storybook-announcement height"
                                                        destroy={true}
                                                        action={{ content: "Update" }}
                                                        bgImage="https://i.imgur.com/zpGUiXt.png"
                                                    >
                                                        <FlexLayout direction="vertical" wrap="noWrap" valign="center" halign="center">
                                                            <div className="storybook-flex-width">
                                                                <FlexLayout halign="center" wrap="noWrap" valign="center">
                                                                    <Folder size={16} />
                                                                    <TextStyles utility="custom--width-color">
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                                    </TextStyles>
                                                                </FlexLayout>
                                                            </div>
                                                        </FlexLayout>
                                                    </AnnouncementBar>
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
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <AnnouncementBar
                                                        customClass="storybook-announcement"
                                                        destroy={true}
                                                        action={{ content: "Update" }}
                                                        bgImage="https://i.imgur.com/zpGUiXt.png"
                                                    >
                                                        <FlexLayout halign="center">
                                                            <Folder size={16} />
                                                            Update available, click on <TextLink label="download" />  to get the best out of our app!
                                                        </FlexLayout>

                                                    </AnnouncementBar>
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
                                    Ensure if there is a call-to-action or dismissible icon
                                    so that user can either get navigated to another website or cancel the announcement bar after reading.
                                </TextStyles>
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    Make sure the announcement bar doesn't interfere with the main content of the website
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
export default AnnouncementBarDoc;
