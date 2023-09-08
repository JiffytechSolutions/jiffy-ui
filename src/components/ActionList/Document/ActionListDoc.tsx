import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import {
  ActionListBstPractice,
  ActionListDo1,
  ActionListDo2,
  ActionListDo3,
  ActionListDont1,
  ActionListDont2,
  ActionListDont3,
} from "../../../StorybookImages/StepWizardImage";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import TextStyles from "../../TextStyles/TextStyles";

export const ActionListDoc = () => {
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
                    An action list should contain only specific and foreseeable
                    items. When a customer clicks on an action item, merchants
                    ought to be able to predict what will happen next.
                  </TextStyles>
                </FlexLayout>
                <div className="inner_card_custom">
                  <FlexLayout direction="vertical" spacing="loose">
                    <FlexLayout spacing="tight">
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <FlexLayout direction="vertical" spacing="tight">
                          <ActionListDont1 />
                          <FlexLayout
                            direction="vertical"
                            spacing="tight"
                            halign="start"
                          >
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
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <FlexLayout direction="vertical" spacing="tight">
                          <ActionListDo1 />
                          <FlexLayout
                            direction="vertical"
                            spacing="tight"
                            halign="start"
                          >
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
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <FlexLayout direction="vertical" spacing="tight">
                          <ActionListDont2 />
                          <FlexLayout
                            direction="vertical"
                            spacing="tight"
                            halign="start"
                          >
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
                      <FlexChild
                        desktopWidth="50"
                        tabWidth="50"
                        mobileWidth="50"
                      >
                        <FlexLayout direction="vertical" spacing="tight">
                          <ActionListDo2 />
                          <FlexLayout
                            direction="vertical"
                            spacing="tight"
                            halign="start"
                          >
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
                    Stay consistent with the action items. Do not mix the icon
                    items with non-icon items.
                  </TextStyles>
                </FlexLayout>
                <div className="inner_card_custom">
                  <FlexLayout spacing="tight">
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <FlexLayout direction="vertical" spacing="tight">
                        <ActionListDont3 />
                        <FlexLayout
                          direction="vertical"
                          spacing="tight"
                          halign="start"
                        >
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
                        <ActionListDo3 />
                        <FlexLayout
                          direction="vertical"
                          spacing="tight"
                          halign="start"
                        >
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
          <TextStyles
            alignment="left"
            fontweight="normal"
            subheadingTypes="SM-1.8"
            textcolor="light"
            type="SubHeading"
            utility="storybook-doc--paragraph"
          >
            Menu items should be organized in a logical way that is easily
            communicated to the user. Best practices include listing
            alphabetically or grouping related actions.
          </TextStyles>
          <ActionListBstPractice />
        </FlexLayout>
      </div>
      <hr className="section-devider" />
      <StoryBookFooter />
    </div>
  );
};
export default ActionListDoc;
