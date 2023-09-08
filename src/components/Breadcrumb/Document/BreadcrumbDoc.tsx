import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import Card from "../../Card/Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";
import Breadcrumb from "../Breadcrumb";

export const BreadcrumbDoc = () => {
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
                                Breadcrumbs are effective in products and experiences that have a
                                large amount of content organized in a hierarchy of more than two levels.
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
                                Breadcrumbs are always treated as secondary and should never entirely replace the primary navigation.
                                They shouldn’t be used for products that have single level navigation because they create unnecessary clutter.
                            </TextStyles>
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
                                    Topic content shouldn't be overly complex because it
                                    might make it harder for users to grasp.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="loose" halign="center">

                                                    <Breadcrumb
                                                        customClass="story--breadcurmbs-item"
                                                        items={[
                                                            {
                                                                label: 'Web & Design',
                                                                value: 'Web & Design'
                                                            },
                                                            {
                                                                label: 'Share a Contact',
                                                                value: 'Share a Contact'
                                                            },
                                                            {
                                                                label: 'Store Email Address',
                                                                value: 'Store Email Address'
                                                            },

                                                        ]}
                                                        onClick={() => { }}
                                                    />

                                                </FlexLayout>
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
                                        </Card>
                                    </FlexChild>
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled" >
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="loose" halign="center">
                                                    <Breadcrumb
                                                        customClass="story--breadcurmbs-item"
                                                        items={[
                                                            {
                                                                label: 'Web',
                                                                value: 'Web'
                                                            },
                                                            {
                                                                label: 'Design',
                                                                value: 'Design'
                                                            },
                                                            {
                                                                label: 'Store Email',
                                                                value: 'Store Email'
                                                            },


                                                        ]}
                                                        onClick={() => { }}
                                                    />
                                                </FlexLayout>
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
                                        </Card>
                                    </FlexChild>
                                </FlexLayout>
                            </div>
                        </FlexLayout>
                        <hr className="section-devider sub-section" />
                        <FlexLayout direction="vertical" spacing="tight">
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
                                    Don’t use breadcrumbs when there is only one level of navigation or hierachy.
                                    Use breadcrumbs when there is more than two levels of hierarchy.
                                </TextStyles>
                            </FlexLayout>
                            <div className="inner_card_custom">
                                <FlexLayout spacing="tight">
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled">
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="loose" halign="center">

                                                    <Breadcrumb
                                                        customClass="story--breadcurmbs-item hide-last"
                                                        items={[
                                                            {
                                                                label: 'Management',
                                                                value: 'Management'
                                                            },
                                                            {
                                                                label: 'Share a Contact',
                                                                value: 'Share a Contact'
                                                            },


                                                        ]}
                                                        onClick={() => { }}
                                                    />

                                                </FlexLayout>
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
                                                            Don't
                                                        </TextStyles>

                                                    </div>
                                                </FlexLayout>
                                            </FlexLayout>
                                        </Card>
                                    </FlexChild>
                                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                        <Card cardType="filled" >
                                            <FlexLayout spacing="loose" direction="vertical">
                                                <FlexLayout spacing="loose" halign="center">
                                                    <Breadcrumb
                                                        customClass="story--breadcurmbs-item"
                                                        items={[
                                                            {
                                                                label: 'Web',
                                                                value: 'Web'
                                                            },
                                                            {
                                                                label: 'Design',
                                                                value: 'Design'
                                                            },
                                                            {
                                                                label: 'Store Email',
                                                                value: 'Store Email'
                                                            },


                                                        ]}
                                                        onClick={() => { }}
                                                    />
                                                </FlexLayout>
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
                                        </Card>
                                    </FlexChild>
                                </FlexLayout>

                            </div>
                        </FlexLayout>
                    </FlexLayout>
                </div>
                <hr className="section-devider" />
                <StoryBookFooter />
            </div>
        </>
    )
}
export default BreadcrumbDoc;
