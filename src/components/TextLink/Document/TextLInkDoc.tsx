import React from "react";
import { AlertCircle, AlertTriangle, ExternalLink } from "../../../storybook/Foundation/Icons/Icons";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import Button from "../../Button/Button";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";
import TextLink from "../TextLink";



// Button Types
const types = [
    "default",
    "danger",
    "warning",

];
export const TextLinkDoc = () => {
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
                        Variants
                    </TextStyles>
                    <FlexLayout direction="vertical" spacing="loose">
                        <FlexLayout direction="vertical" spacing="tight">
                            <TextStyles
                                alignment="left"
                                displayTypes="SM-3.4"
                                fontweight="extraBold"
                                subheadingTypes="LG-2.5"
                                textcolor="dark"
                                type="SubHeading"
                                utility="storybook-doc--subheading"
                            >
                                Types
                            </TextStyles>
                            <div className="inner_card_custom">
                                <Card cardType="bordered">
                                    <FlexLayout spacing="extraLoose">
                                        {types.map((variant: any) => (
                                            <TextLink
                                                label={variant}
                                                linkType={variant}
                                                onClick={() => { }}
                                                target="_blank"
                                                url=""
                                            />
                                        ))}
                                    </FlexLayout>
                                </Card>
                            </div>
                        </FlexLayout>
                        <FlexLayout direction="vertical" spacing="tight">
                            <TextStyles
                                alignment="left"
                                displayTypes="SM-3.4"
                                fontweight="extraBold"
                                subheadingTypes="LG-2.5"
                                textcolor="dark"
                                type="SubHeading"
                                utility="storybook-doc--subheading"
                            >
                                Icon
                            </TextStyles>
                            <div className="inner_card_custom">
                                <Card cardType="bordered" title={"Without Icon"}>
                                    <FlexLayout spacing="extraLoose">
                                        {types.map((variant: any) => (
                                            <TextLink
                                                label={variant}
                                                linkType={variant}
                                                onClick={() => { }}
                                                target="_blank"
                                                url=""
                                            />
                                        ))}
                                    </FlexLayout>
                                </Card>

                                <Card cardType="bordered" title={"With Icon"}>
                                    <FlexLayout spacing="extraLoose">

                                        <TextLink
                                            label="Default"
                                            linkType="default"
                                            onClick={() => { }}
                                            target="_blank"
                                            icon={<ExternalLink size="16" />}
                                            iconAlign="right"
                                            url=""
                                        />
                                        <TextLink
                                            label="Danger"
                                            linkType="danger"
                                            onClick={() => { }}
                                            target="_blank"
                                            icon={<AlertCircle size="16" />}
                                            iconAlign="left"
                                            url=""
                                        />
                                        <TextLink
                                            label="Warning"
                                            linkType="warning"
                                            onClick={() => { }}
                                            target="_blank"
                                            icon={<AlertTriangle size="16" />}
                                            iconAlign="left"
                                            url=""
                                        />

                                    </FlexLayout>
                                </Card>
                            </div>
                        </FlexLayout>

                    </FlexLayout>
                </div>
                <hr className="section-devider" />

                {/* State */}
                <div className="block--section">
                    <TextStyles
                        alignment="left"
                        displayTypes="SM-3.4"
                        fontweight="extraBold"
                        textcolor="dark"
                        type="Display"
                        utility="storybook-doc--heading"
                    >
                        State
                    </TextStyles>
                    <FlexLayout direction="vertical" spacing="loose">
                        <FlexLayout direction="vertical" spacing="tight">
                            <div className="inner_card_custom">
                                <Card cardType="filled">
                                    <FlexLayout spacing="extraLoose">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <Card cardType="shadowed" title={"Default"}>
                                                <div className="txtLink-DefaultState">
                                                    <FlexLayout spacing="extraLoose">
                                                        {types.map((variant: any) => (
                                                            <TextLink
                                                                label={variant}
                                                                linkType={variant}
                                                                onClick={() => { }}
                                                                target="_blank"
                                                                url=""
                                                            />
                                                        ))}
                                                    </FlexLayout>
                                                </div>
                                            </Card>
                                        </FlexChild>
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <Card cardType="shadowed" title={"Hovered"}>
                                                <div className="txtLink-hoverState">
                                                    <FlexLayout spacing="extraLoose">
                                                        {types.map((variant: any) => (
                                                            <TextLink
                                                                label={variant}
                                                                linkType={variant}
                                                                onClick={() => { }}
                                                                target="_blank"
                                                                url=""
                                                            />
                                                        ))}
                                                    </FlexLayout>
                                                </div>
                                            </Card>
                                        </FlexChild>
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <Card cardType="shadowed" title={"Clicked"}>
                                                <div className="txtLink-clickedState">
                                                    <FlexLayout spacing="extraLoose">
                                                        {types.map((variant: any) => (
                                                            <TextLink
                                                                label={variant}
                                                                linkType={variant}
                                                                onClick={() => { }}
                                                                target="_blank"
                                                                url=""
                                                            />
                                                        ))}
                                                    </FlexLayout>
                                                </div>
                                            </Card>
                                        </FlexChild>
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <Card cardType="shadowed" title={"Disabled"}>
                                                <div className="txtLink-DisabledState">
                                                    <FlexLayout spacing="extraLoose">
                                                        {types.map((variant: any) => (
                                                            <TextLink
                                                                label={variant}
                                                                linkType={variant}
                                                                onClick={() => { }}
                                                                target="_blank"
                                                                url=""
                                                                isDisabled
                                                            />
                                                        ))}
                                                    </FlexLayout>
                                                </div>
                                            </Card>
                                        </FlexChild>
                                    </FlexLayout>
                                </Card>
                            </div>
                        </FlexLayout>
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
                                            Don’t write long messages that are clickable. Keep the text link short and to the point.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <Card cardType='borderLess'>
                                                            <FlexLayout halign="center">
                                                                <TextLink label="Go to this url and read all about it" />
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
                                                            <FlexLayout halign="center">
                                                                <TextLink label="Link here" />
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
                                            Links need to be clear and predictable.
                                            Merchants should be able to anticipate what will happen when they select a link.
                                            Never mislead someone by mislabeling a link.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <Card cardType='borderLess'>
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight" direction="vertical">
                                                                    <TextStyles
                                                                        alignment="left"
                                                                        fontweight="normal"
                                                                        subheadingTypes="XS-1.6"
                                                                        textcolor="dark"
                                                                        type="SubHeading"
                                                                        utility="none"
                                                                    >
                                                                        Want to learn more about
                                                                    </TextStyles>
                                                                    <FlexLayout spacing="extraTight">
                                                                        <TextStyles
                                                                            alignment="left"
                                                                            fontweight="normal"
                                                                            subheadingTypes="XS-1.6"
                                                                            textcolor="dark"
                                                                            type="SubHeading"
                                                                            utility="none"
                                                                        >
                                                                            dropshipping?
                                                                        </TextStyles>
                                                                        <TextLink label="Click here" />
                                                                    </FlexLayout>
                                                                </FlexLayout>
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
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight" direction="vertical">
                                                                    <TextStyles
                                                                        alignment="left"
                                                                        fontweight="normal"
                                                                        subheadingTypes="XS-1.6"
                                                                        textcolor="dark"
                                                                        type="SubHeading"
                                                                        utility="none"
                                                                    >
                                                                        Get started with the
                                                                    </TextStyles>
                                                                    <FlexLayout spacing="extraTight">
                                                                        <TextLink label="Dropshipping Guide." />
                                                                    </FlexLayout>
                                                                </FlexLayout>
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
                                            Don’t use multiple links near each other. Use only one link in context in text.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <Card cardType='borderLess'>
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight">
                                                                    <TextLink label="Link here" />
                                                                    <TextStyles
                                                                        alignment="left"
                                                                        fontweight="normal"
                                                                        subheadingTypes="XS-1.6"
                                                                        textcolor="dark"
                                                                        type="SubHeading"
                                                                        utility="none"
                                                                    >
                                                                        or
                                                                    </TextStyles>
                                                                    <TextLink label="Link here" />
                                                                </FlexLayout>
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
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight">
                                                                    <TextLink label="Link here" />
                                                                </FlexLayout>
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
                                            4-:
                                        </TextStyles>
                                        <TextStyles
                                            alignment="left"
                                            fontweight="normal"
                                            subheadingTypes="SM-1.8"
                                            textcolor="light"
                                            type="SubHeading"
                                            utility="storybook-doc--paragraph"
                                        >
                                            Do not expose URLs in the text link.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <Card cardType='borderLess'>
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight">
                                                                    <TextStyles
                                                                        alignment="left"
                                                                        fontweight="normal"
                                                                        subheadingTypes="XS-1.6"
                                                                        textcolor="dark"
                                                                        type="SubHeading"
                                                                        utility="none"
                                                                    >
                                                                        Learn more at
                                                                    </TextStyles>
                                                                    <TextLink label="https://cedcommerce.com" />
                                                                </FlexLayout>
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
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight">
                                                                    <TextLink label="Learn more" />
                                                                </FlexLayout>
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
                                            5-:
                                        </TextStyles>
                                        <TextStyles
                                            alignment="left"
                                            fontweight="normal"
                                            subheadingTypes="SM-1.8"
                                            textcolor="light"
                                            type="SubHeading"
                                            utility="storybook-doc--paragraph"
                                        >
                                            Do not use text link for primary actions like “Add”, “Close”, “Cancel”, or “Save”. Use Buttons instead.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <Card cardType='borderLess'>
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight">
                                                                    <TextLink label="Close" />
                                                                </FlexLayout>
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
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight">
                                                                    <Button type="primary">
                                                                        Close
                                                                    </Button>
                                                                </FlexLayout>
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
                                            Links need to be clear and predictable.
                                            Merchants should be able to anticipate what will happen when they select a link.
                                            Never mislead someone by mislabeling a link.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <Card cardType='borderLess'>
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight" direction="vertical">
                                                                    <TextStyles
                                                                        alignment="left"
                                                                        fontweight="normal"
                                                                        subheadingTypes="XS-1.6"
                                                                        textcolor="dark"
                                                                        type="SubHeading"
                                                                        utility="none"
                                                                    >
                                                                        Want to learn more about
                                                                    </TextStyles>
                                                                    <FlexLayout spacing="extraTight">
                                                                        <TextStyles
                                                                            alignment="left"
                                                                            fontweight="normal"
                                                                            subheadingTypes="XS-1.6"
                                                                            textcolor="dark"
                                                                            type="SubHeading"
                                                                            utility="none"
                                                                        >
                                                                            dropshipping?
                                                                        </TextStyles>
                                                                        <TextLink label="Click here" />
                                                                    </FlexLayout>
                                                                </FlexLayout>
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
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight" direction="vertical">
                                                                    <TextStyles
                                                                        alignment="left"
                                                                        fontweight="normal"
                                                                        subheadingTypes="XS-1.6"
                                                                        textcolor="dark"
                                                                        type="SubHeading"
                                                                        utility="none"
                                                                    >
                                                                        Get started with the
                                                                    </TextStyles>
                                                                    <FlexLayout spacing="extraTight">
                                                                        <TextLink label="Dropshipping Guide." />
                                                                    </FlexLayout>
                                                                </FlexLayout>
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
                                            Links need to be clear and predictable.
                                            Merchants should be able to anticipate what will happen when they select a link.
                                            Never mislead someone by mislabeling a link.
                                        </TextStyles>
                                    </FlexLayout>
                                    <div className="inner_card_custom">
                                        <FlexLayout spacing="tight">
                                            <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                                <FlexLayout direction="vertical" spacing="tight">
                                                    <Card cardType="filled">
                                                        <Card cardType='borderLess'>
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight" direction="vertical">
                                                                    <TextStyles
                                                                        alignment="left"
                                                                        fontweight="normal"
                                                                        subheadingTypes="XS-1.6"
                                                                        textcolor="dark"
                                                                        type="SubHeading"
                                                                        utility="none"
                                                                    >
                                                                        Want to learn more about
                                                                    </TextStyles>
                                                                    <FlexLayout spacing="extraTight">
                                                                        <TextStyles
                                                                            alignment="left"
                                                                            fontweight="normal"
                                                                            subheadingTypes="XS-1.6"
                                                                            textcolor="dark"
                                                                            type="SubHeading"
                                                                            utility="none"
                                                                        >
                                                                            dropshipping?
                                                                        </TextStyles>
                                                                        <TextLink label="Click here" />
                                                                    </FlexLayout>
                                                                </FlexLayout>
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
                                                            <FlexLayout halign="center">
                                                                <FlexLayout spacing="extraTight" direction="vertical">
                                                                    <TextStyles
                                                                        alignment="left"
                                                                        fontweight="normal"
                                                                        subheadingTypes="XS-1.6"
                                                                        textcolor="dark"
                                                                        type="SubHeading"
                                                                        utility="none"
                                                                    >
                                                                        Get started with the
                                                                    </TextStyles>
                                                                    <FlexLayout spacing="extraTight">
                                                                        <TextLink label="Dropshipping Guide." />
                                                                    </FlexLayout>
                                                                </FlexLayout>
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
                <StoryBookFooter />
            </div>
        </>
    )
}
export default TextLinkDoc;
