import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import { ProgressBarDo1, ProgressBarDont1 } from "../../../StorybookImages/StorybookImages";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";
import Progressbar from "../Progressbar";


export const ProgressBarDoc = () => {
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
                                        Don’t exaggerate the label, a concise label is enough to
                                        describe the process's status with the progress indicator.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <FlexLayout direction="vertical" halign="center" spacing="loose">
                                                        <div className="story--custom-progress__tooltip_wrapper">
                                                            <FlexLayout direction="vertical" spacing="extraTight">
                                                                <TextStyles type="Paragraph" paragraphTypes="MD-1.4" textcolor="light">
                                                                    Your file is been loaded 40%...
                                                                </TextStyles>
                                                                <div className="story--custom-progress__tooltip">
                                                                    <div className="inte-progressbar__wrapper">
                                                                        <div className="inte__progressbar inte__progressbar--thin">
                                                                            <div className=" inte__progressbar--status" style={{ "width": '40%' }}></div>
                                                                        </div>
                                                                        <div className="inte-progressbar__toolTip" style={{ "left": '40%' }}>40%</div>
                                                                    </div>
                                                                </div>
                                                            </FlexLayout>
                                                        </div>
                                                        <div className="story--custom-progress__width-wrapper">
                                                            <FlexLayout valign="center" spacing="tight" halign="center">
                                                                <FlexChild desktopWidth="33" tabWidth="33" mobileWidth="33">
                                                                    <Progressbar
                                                                        percentage={10}
                                                                        progessSize={"thin"}
                                                                    />
                                                                </FlexChild>
                                                                <TextStyles type="Paragraph" paragraphTypes="MD-1.4" textcolor="light">
                                                                    Your file is been loaded 10%...
                                                                </TextStyles>
                                                            </FlexLayout>
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
                                        </FlexChild>
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <FlexLayout direction="vertical" halign="center" spacing="loose">
                                                        <div className="story--custom-progress__tooltip_wrapper">
                                                            <FlexLayout direction="vertical" spacing="extraTight">
                                                                <TextStyles type="Paragraph" paragraphTypes="MD-1.4" textcolor="light">
                                                                    File loading...
                                                                </TextStyles>
                                                                <div className="story--custom-progress__tooltip">
                                                                    <div className="inte-progressbar__wrapper">
                                                                        <div className="inte__progressbar inte__progressbar--thin">
                                                                            <div className=" inte__progressbar--status" style={{ "width": '40%' }}></div>
                                                                        </div>
                                                                        <div className="inte-progressbar__toolTip" style={{ "left": '40%' }}>40%</div>
                                                                    </div>
                                                                </div>
                                                            </FlexLayout>
                                                        </div>
                                                        <div className="story--custom-progress__width-wrapper">
                                                            <FlexLayout valign="center" spacing="tight" halign="center">
                                                                <FlexChild desktopWidth="80" tabWidth="80" mobileWidth="80">
                                                                    <Progressbar
                                                                        percentage={40}
                                                                        progessSize="thin"
                                                                    />
                                                                </FlexChild>
                                                                <TextStyles type="Paragraph" paragraphTypes="MD-1.4" textcolor="light">
                                                                    40%
                                                                </TextStyles>
                                                            </FlexLayout>
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
                                        The label should be placed closer to the bar
                                        because this would make it easier for users to comprehend the process.
                                    </TextStyles>
                                </FlexLayout>
                                <div className="inner_card_custom">
                                    <FlexLayout spacing="tight">
                                        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                                            <FlexLayout direction="vertical" spacing="tight">
                                                <Card cardType="filled">
                                                    <ProgressBarDont1 />
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

                                                    <ProgressBarDo1 />

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
                    Guidelines
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
                                Use labels to indicate to the user what process is being tracked.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                Not be used for entire page loads. In this case, use the Skeleton page component.
                            </TextStyles>
                            <TextStyles
                                alignment="left"
                                fontweight="normal"
                                subheadingTypes="SM-1.8"
                                textcolor="light"
                                type="SubHeading"
                                utility="storybook-doc--paragraph"
                            >
                                For tasks with a short load time, use the Spinner component
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
export default ProgressBarDoc;
