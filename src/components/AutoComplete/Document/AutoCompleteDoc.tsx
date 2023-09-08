import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";
import AutoComplete from "../AutoComplete";

export const AutoCompleteDoc = () => {
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
                <List type={"disc"}>
                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        subheadingTypes="SM-1.8"
                        textcolor="light"
                        type="SubHeading"
                        utility="storybook-doc--paragraph"
                    >
                        To help users find data more efficiently within a complex or large data set.
                    </TextStyles>
                    <TextStyles
                        alignment="left"
                        fontweight="normal"
                        subheadingTypes="SM-1.8"
                        textcolor="light"
                        type="SubHeading"
                        utility="storybook-doc--paragraph"
                    >
                        When conducting a site-wide search, utilize this feature on a global scale.
                    </TextStyles>
                </List>
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
                                <TextStyles
                                    alignment="left"
                                    fontweight="normal"
                                    subheadingTypes="SM-1.8"
                                    textcolor="light"
                                    type="SubHeading"
                                    utility="storybook-doc--paragraph"
                                >
                                    In desktop, make sure search field is displayed wide enough to completely display common search terms.
                                    Do not truncate or wrap text within the search field.
                                </TextStyles>

                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <div className="story-custom-width__autocomplete">
                                                        <AutoComplete
                                                            onChange={() => { }}
                                                            options={[
                                                                {
                                                                    label: 'Margalo',
                                                                    value: 'Margalo'
                                                                },
                                                                {
                                                                    label: 'Genevieve',
                                                                    value: 'Genevieve'
                                                                },
                                                                {
                                                                    label: 'Niel',
                                                                    value: 'Niel'
                                                                },
                                                                {
                                                                    label: 'Heddi',
                                                                    value: 'Heddi'
                                                                },
                                                                {
                                                                    label: 'Gregg',
                                                                    value: 'Gregg'
                                                                },
                                                                {
                                                                    label: 'Eduard',
                                                                    value: 'Eduard'
                                                                },
                                                                {
                                                                    label: 'Kizzee',
                                                                    value: 'Kizzee'
                                                                },
                                                                {
                                                                    label: 'Truman',
                                                                    value: 'Truman'
                                                                },
                                                                {
                                                                    label: 'Merill',
                                                                    value: 'Merill'
                                                                },
                                                                {
                                                                    label: 'Lindie',
                                                                    value: 'Lindie'
                                                                },
                                                                {
                                                                    label: 'Vasily',
                                                                    value: 'Vasily'
                                                                },
                                                                {
                                                                    label: 'Averil',
                                                                    value: 'Averil'
                                                                },
                                                                {
                                                                    label: 'Golda',
                                                                    value: 'Golda'
                                                                },
                                                                {
                                                                    label: 'Zorine',
                                                                    value: 'Zorine'
                                                                },
                                                                {
                                                                    label: 'Odele',
                                                                    value: 'Odele'
                                                                },
                                                                {
                                                                    label: 'Amalie',
                                                                    value: 'Amalie'
                                                                },
                                                                {
                                                                    label: 'Ilsa',
                                                                    value: 'Ilsa'
                                                                },
                                                                {
                                                                    label: 'Pepillo',
                                                                    value: 'Pepillo'
                                                                }
                                                            ]}
                                                            placeHolder="Search by Name, Price, Order ID, Avail..."
                                                            popoverPosition="left"
                                                            setHiglighted
                                                            showPopover value={""} onClick={undefined} />
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
                                        </FlexChild>
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">

                                                    <AutoComplete
                                                        onChange={() => { }}
                                                        options={[
                                                            {
                                                                label: 'Margalo',
                                                                value: 'Margalo'
                                                            },
                                                            {
                                                                label: 'Genevieve',
                                                                value: 'Genevieve'
                                                            },
                                                            {
                                                                label: 'Niel',
                                                                value: 'Niel'
                                                            },
                                                            {
                                                                label: 'Heddi',
                                                                value: 'Heddi'
                                                            },
                                                            {
                                                                label: 'Gregg',
                                                                value: 'Gregg'
                                                            },
                                                            {
                                                                label: 'Eduard',
                                                                value: 'Eduard'
                                                            },
                                                            {
                                                                label: 'Kizzee',
                                                                value: 'Kizzee'
                                                            },
                                                            {
                                                                label: 'Truman',
                                                                value: 'Truman'
                                                            },
                                                            {
                                                                label: 'Merill',
                                                                value: 'Merill'
                                                            },
                                                            {
                                                                label: 'Lindie',
                                                                value: 'Lindie'
                                                            },
                                                            {
                                                                label: 'Vasily',
                                                                value: 'Vasily'
                                                            },
                                                            {
                                                                label: 'Averil',
                                                                value: 'Averil'
                                                            },
                                                            {
                                                                label: 'Golda',
                                                                value: 'Golda'
                                                            },
                                                            {
                                                                label: 'Zorine',
                                                                value: 'Zorine'
                                                            },
                                                            {
                                                                label: 'Odele',
                                                                value: 'Odele'
                                                            },
                                                            {
                                                                label: 'Amalie',
                                                                value: 'Amalie'
                                                            },
                                                            {
                                                                label: 'Ilsa',
                                                                value: 'Ilsa'
                                                            },
                                                            {
                                                                label: 'Pepillo',
                                                                value: 'Pepillo'
                                                            }
                                                        ]}
                                                        placeHolder="Search by Name, Price, Order ID or Availability"
                                                        popoverPosition="left"
                                                        setHiglighted
                                                        showPopover value={""} onClick={undefined} />
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
                                Highlight the autocomplete suggestions.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Provide clear instructions in search so that users don’t have to go back and forth to find the correct choice.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Search should support both mouse interaction and keyboard navigation.
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
export default AutoCompleteDoc;
