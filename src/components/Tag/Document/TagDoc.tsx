import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import Popover from "../../Popover/Popover";
import TextStyles from "../../TextStyles/TextStyles";
import Tag from "../Tag";

export const TagDoc = () => {
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


                <TextStyles
                    alignment="left"
                    fontweight="normal"
                    subheadingTypes="SM-1.8"
                    textcolor="light"
                    type="SubHeading"
                    utility="storybook-doc--paragraph"
                >
                    Tags should be utilized in situations where content is assigned to
                    multiple categories, and it is necessary for the user to distinguish between them.
                    Using tags as a filtering mechanism is also possible, as it enables users to view only those items that belong to a specific category.
                </TextStyles>


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
                                        Don’t use too many colors for tags within one UI. Typically only one color should be used for tags.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <Card cardType='borderLess'>
                                                        <FlexLayout spacing="tight">
                                                            <div className="story--tag-default">
                                                                <Tag size="small" onDestroy={() => { }}>
                                                                    Price
                                                                </Tag>
                                                            </div>
                                                            <div className="story--tag-error">
                                                                <Tag size="small" onDestroy={() => { }}>
                                                                    Color
                                                                </Tag>
                                                            </div>
                                                            <div className="story--tag-warning">
                                                                <Tag size="small" onDestroy={() => { }}>
                                                                    Size
                                                                </Tag>
                                                            </div>
                                                            <div className="story--tag-success">
                                                                <Tag size="small" onDestroy={() => { }}>
                                                                    Availability
                                                                </Tag>
                                                            </div>
                                                        </FlexLayout>
                                                    </Card>
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
                                                    <Card cardType='borderLess'>
                                                        <FlexLayout spacing="tight">
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Price
                                                            </Tag>
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Color
                                                            </Tag>
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Size
                                                            </Tag>
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Availability
                                                            </Tag>
                                                        </FlexLayout>
                                                    </Card>
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
                                        Don’t mix different types of tags in one section. Use similar type of tags.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <Card cardType='borderLess'>
                                                        <FlexLayout spacing="extraTight">
                                                            <Tag size="large" onDestroy={() => { }}>
                                                                Price
                                                            </Tag>
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Color
                                                            </Tag>

                                                            <Popover
                                                                isOpen={false}
                                                                activator={<Tag count="+2" onDestroy={() => { }} hasPopover onTogglePopup={function noRefCheck() { }}>Tag:Text</Tag>}
                                                                onClose={function noRefCheck() { }}
                                                            >
                                                                <FlexLayout spacing="mediumTight">
                                                                    <Tag
                                                                        onDestroy={function noRefCheck() { }}
                                                                    >
                                                                        one
                                                                    </Tag>
                                                                    <Tag
                                                                        onDestroy={function noRefCheck() { }}
                                                                    >
                                                                        Two
                                                                    </Tag>
                                                                </FlexLayout>
                                                            </Popover>
                                                        </FlexLayout>
                                                    </Card>
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

                                                    <Card cardType='borderLess'>
                                                        <FlexLayout spacing="extraTight">
                                                            <Tag size="large" onDestroy={() => { }}>
                                                                Price
                                                            </Tag>
                                                            <Tag size="large" onDestroy={() => { }}>
                                                                Color
                                                            </Tag>

                                                            <Popover
                                                                isOpen={false}
                                                                activator={<Tag count="+2" onDestroy={() => { }} hasPopover onTogglePopup={function noRefCheck() { }}>Tag:Text</Tag>}
                                                                onClose={function noRefCheck() { }}
                                                            >
                                                                <FlexLayout spacing="mediumTight">
                                                                    <Tag
                                                                        onDestroy={function noRefCheck() { }}
                                                                    >
                                                                        one
                                                                    </Tag>
                                                                    <Tag
                                                                        onDestroy={function noRefCheck() { }}
                                                                    >
                                                                        Two
                                                                    </Tag>
                                                                </FlexLayout>
                                                            </Popover>
                                                        </FlexLayout>
                                                    </Card>

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
                                        If the text of a tag goes beyond the maximum width,
                                        you can truncate it with an ellipsis by setting a maximum width.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <Card cardType='borderLess'>
                                                        <FlexLayout spacing="extraTight">
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Military science
                                                            </Tag>
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Post-apocalyptic
                                                            </Tag>
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Science
                                                            </Tag>
                                                        </FlexLayout>
                                                    </Card>
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
                                                    <Card cardType='borderLess'>
                                                        <FlexLayout spacing="extraTight">
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Milita...
                                                            </Tag>
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Post-a...
                                                            </Tag>
                                                            <Tag size="small" onDestroy={() => { }}>
                                                                Scienc...
                                                            </Tag>
                                                        </FlexLayout>
                                                    </Card>
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
                                Write labels in sentence case.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Keep labels short to avoid wrapping.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Do not overload an interface with tags as they will become less meaningful and more easily scanned over.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                The purpose of a Tag is to serve as a descriptive element rather than an interactive one. It should not be clickable or perform any action. Instead, if you require an interactive element, use a Button or Link.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Don’t use a tag as a replacement for the Badge, as Badge is a singular element that gives context to a specific subject.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Filters are the only place where the large tag is permissible.
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
export default TagDoc;
