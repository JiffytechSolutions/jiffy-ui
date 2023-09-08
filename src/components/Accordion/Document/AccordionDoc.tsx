import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { Card } from "../../Card";
import { FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";
import Accordion from "../Accordion";
import { User } from '../../../storybook/Foundation/Icons/Icons';
import Thumbnail from "../../Thumbnail/Thumbnail";

export const AccordionDoc = () => {
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
                            Use accordion when readers only need a few key pieces of information.
                            It can also be used when readers will be viewing your site from smaller screens.
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
                            Avoid accordion when it is preferred to show all the content than to conceal
                            some of it if users wants to open the majority of accordion elements.
                            By doing this, you'll avoid making users choose which headings to click on at a time, which is time-consuming.
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
                                        Chevron icons should always be positioned on the right to maintain the accordion's hierarchy.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="extraLoose" direction="vertical">
                                        <FlexLayout direction="vertical" spacing="tight">
                                            <Card cardType="filled" customClass="story--custom-accordion-width">
                                                <div className="accordion--header-right_storybook">
                                                    <Accordion
                                                        customClass=""
                                                        onClick={() => { }}
                                                        title="Accordion Header Accordion Header Accordion Header"
                                                    >
                                                        <TextStyles textcolor="light">
                                                            1 Tenetur ullam rerum ad iusto
                                                        </TextStyles>
                                                    </Accordion>
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

                                        <FlexLayout direction="vertical" spacing="tight">
                                            <Card cardType="filled" customClass="story--custom-accordion-width">
                                                <Accordion
                                                    customClass=""
                                                    onClick={() => { }}
                                                    title="Accordion Header Accordion Header Accordion Header"
                                                >
                                                    <TextStyles textcolor="light">
                                                        1 Tenetur ullam rerum ad iusto
                                                    </TextStyles>
                                                </Accordion>
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
                                        Prefix icon size should be 20 pixel so that icon is visible clearly to users.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="extraLoose" direction="vertical">

                                        <FlexLayout direction="vertical" spacing="tight">
                                            <Card cardType="filled" customClass="story--custom-accordion-width">
                                                <Accordion
                                                    icon={<User size={12} />}
                                                    onClick={() => { }}
                                                    title="Accordion Header Accordion Header Accordion Header"
                                                >
                                                    <TextStyles textcolor="light">
                                                        Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                                                    </TextStyles>
                                                </Accordion>
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
                                            <Card cardType="filled" customClass="story--custom-accordion-width">
                                                <Accordion
                                                    icon={<User size={20} />}
                                                    onClick={() => { }}
                                                    title="Accordion Header Accordion Header Accordion Header"
                                                >
                                                    <TextStyles textcolor="light">
                                                        Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                                                    </TextStyles>
                                                </Accordion>
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
                                        Content label shouldn’t be too long like paragraph.
                                        Users should get brief idea about the topic by reading heading of accordion.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="extraLoose" direction="vertical">
                                        <FlexLayout direction="vertical" spacing="tight">
                                            <Card cardType="filled" customClass="story--custom-accordion-width">
                                                <Accordion
                                                    icon={<User size={12} />}
                                                    onClick={() => { }}
                                                    title="1 Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."
                                                >
                                                    <TextStyles textcolor="light">
                                                        Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                                                    </TextStyles>
                                                </Accordion>
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
                                            <Card cardType="filled" customClass="story--custom-accordion-width">
                                                <Accordion
                                                    icon={<User size={20} />}
                                                    onClick={() => { }}
                                                    title="Accordion Header Accordion Header Accordion Header"
                                                >
                                                    <TextStyles textcolor="light">
                                                        Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                                                    </TextStyles>
                                                </Accordion>
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
                                        Icon and thumbnail shouldn't be arranged in the same accordion. It is best to use icons and thumbnail images with extreme caution
                                        whenever necessary because their respective interpretations are different.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="extraLoose" direction="vertical">
                                        <FlexLayout direction="vertical" spacing="tight">
                                            <Card cardType="filled" customClass="story--custom-accordion-width">
                                                <Accordion
                                                    subTitle="Subheading content"
                                                    icon={<FlexLayout spacing="tight">
                                                        <Thumbnail
                                                            size="medium"
                                                            src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"
                                                        />
                                                        <User size={12} />
                                                    </FlexLayout>}
                                                    onClick={() => { }}
                                                    title="Accordion Header Accordion Header Accordion Header"
                                                >
                                                    <TextStyles textcolor="light">
                                                        Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                                                    </TextStyles>
                                                </Accordion>
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
                                            <Card cardType="filled" customClass="story--custom-accordion-width">
                                                <Accordion
                                                    subTitle="Subheading content"
                                                    icon={
                                                        <Thumbnail
                                                            size="medium"
                                                            src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"
                                                        />
                                                    }
                                                    onClick={() => { }}
                                                    title="Accordion Header Accordion Header Accordion Header"
                                                >
                                                    <TextStyles textcolor="light">
                                                        Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.
                                                    </TextStyles>
                                                </Accordion>
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
            <StoryBookFooter />
        </div>
    )
}
export default AccordionDoc;
