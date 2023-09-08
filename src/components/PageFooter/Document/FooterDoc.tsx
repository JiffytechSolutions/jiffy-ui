import React from "react";
import { ExternalLink } from "../../../storybook/Foundation/Icons/Icons";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import Card from "../../Card/Card";
import { FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextLink from "../../TextLink/TextLink";
import TextStyles from "../../TextStyles/TextStyles";
import PageFooter from "../PageFooter";



export const FooterDoc = () => {
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
                                Use Footer for helping users find secondary content that might not be directly related to the main purpose of the site.
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
                                Footers can also be used when the pages are long (as it is the case with many modern mobile designs),
                                since it allows users to quickly move to a
                                different section of the site without scrolling back to reach the main navigation.
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
                                    Avoid unnecessary indefinite scrolling in footer as the point
                                    of the footer is for the users to find it and access the relevant information.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="extraLoose" direction="vertical">
                                    <FlexLayout direction="vertical" spacing="loose" desktopWidth="100" tabWidth="100" mobileWidth="100">
                                        <Card cardType="filled">
                                            <div className="storybook--footer">
                                                <PageFooter>
                                                    <FlexLayout direction="vertical" spacing="extraTight">
                                                        <TextStyles>
                                                            ©2023
                                                        </TextStyles>
                                                        <FlexLayout spacing="extraTight">
                                                            Need help? <TextLink label="Get Support" icon={<ExternalLink size="16" />} />
                                                        </FlexLayout>
                                                        <TextLink label="Cedcommerce Inc Product." />
                                                    </FlexLayout>
                                                </PageFooter>
                                            </div>
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
                                    <FlexLayout direction="vertical" spacing="loose" desktopWidth="100" tabWidth="100" mobileWidth="100">
                                        <Card cardType="filled" >
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <div className="storybook--footer">
                                                    <PageFooter>
                                                        <FlexLayout spacing="extraTight">
                                                            <TextStyles>
                                                                ©2023
                                                            </TextStyles>
                                                            <TextStyles>
                                                                Need Help?
                                                            </TextStyles>
                                                            <TextLink label="Get Support" />
                                                            <TextLink label="Cedcommerce Inc Product." />
                                                        </FlexLayout>
                                                    </PageFooter>
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
                                </FlexLayout>
                            </div>
                        </FlexLayout>
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
                                    Good text makes it clear what content is being linked to. If using ‘Find out more’ or ‘Learn more’,
                                    use supplementary link text to indicate where the link navigates to for screen reader users.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="extraLoose" direction="vertical">
                                    <FlexLayout direction="vertical" spacing="loose" desktopWidth="100" tabWidth="100" mobileWidth="100">
                                        <Card cardType="filled">
                                            <FlexLayout direction="vertical" spacing="extraLoose">
                                                <div className="storybook--footer">
                                                    <PageFooter>
                                                        <FlexLayout spacing="extraTight">
                                                            <TextStyles>
                                                                To read out terms and conditions,
                                                            </TextStyles>
                                                            <TextLink label="Click here" />
                                                        </FlexLayout>
                                                    </PageFooter>
                                                </div>
                                                <div className="storybook--footer">
                                                    <PageFooter>
                                                        <FlexLayout spacing="extraTight">
                                                            <TextLink label="Click here" />
                                                            <TextStyles>
                                                                to find more
                                                            </TextStyles>

                                                        </FlexLayout>
                                                    </PageFooter>
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
                                    <FlexLayout direction="vertical" spacing="loose" desktopWidth="100" tabWidth="100" mobileWidth="100">
                                        <Card cardType="filled" >
                                            <FlexLayout direction="vertical" spacing="extraLoose">
                                                <div className="storybook--footer">
                                                    <PageFooter>
                                                        <FlexLayout spacing="extraTight">
                                                            <TextLink label="Read out terms and conditions" />
                                                        </FlexLayout>
                                                    </PageFooter>
                                                </div>
                                                <div className="storybook--footer">
                                                    <PageFooter>
                                                        <FlexLayout spacing="extraTight">
                                                            <TextLink label="Find out opening hours" />
                                                        </FlexLayout>
                                                    </PageFooter>
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
                                </FlexLayout>
                            </div>
                        </FlexLayout>
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
                                    Standalone links should start with a capital letter, and don’t need a full stop.

                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="extraLoose" direction="vertical">
                                    <FlexLayout direction="vertical" spacing="loose" desktopWidth="100" tabWidth="100" mobileWidth="100">
                                        <Card cardType="filled">
                                            <div className="storybook--footer">
                                                <PageFooter>
                                                    <FlexLayout spacing="extraTight">
                                                        <TextLink label="terms and conditions." />
                                                    </FlexLayout>
                                                </PageFooter>
                                            </div>
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
                                    <FlexLayout direction="vertical" spacing="loose" desktopWidth="100" tabWidth="100" mobileWidth="100">
                                        <Card cardType="filled" >
                                            <div className="storybook--footer">
                                                <PageFooter>
                                                    <FlexLayout spacing="extraTight">
                                                        <TextLink label="Terms and conditions" />
                                                    </FlexLayout>
                                                </PageFooter>
                                            </div>
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
                            subheadingTypes="SM-1.8"
                            textcolor="dark"
                            type="SubHeading"
                            utility="storybook-doc--subheading"
                        >
                            Footer should:
                        </TextStyles>

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
                                Be placed at the bottom of the interface
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
                                Furnish relevant links to assistance that pertains to the current on-screen experience
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
                                Be reserved for purposes other than promoting features or explaining how something works
                            </TextStyles>
                        </List>
                    </FlexLayout>

                </div>
                <hr className="section-devider" />
                <StoryBookFooter />
            </div>
        </>
    )
}
export default FooterDoc;
