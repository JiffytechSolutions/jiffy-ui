import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import {
  ToastBestPractice,
  ToastDo1,
  ToastDo2,
  ToastDo3,
  ToastDo4,
  ToastDont1,
  ToastDont2,
  ToastDont3,
  ToastDont4,
} from "../../../StorybookImages/StorybookImages";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import List from "../../List/List";
import TextStyles from "../../TextStyles/TextStyles";

export const ToastDoc = () => {
  const codeContainerStyle: any = {
    backgroundColor: "rgb(229,229,229)",
    borderRadius: "4px",
    padding: "1rem",
  };
  const codeStyle = {
    fontFamily: "monospace",
    fontSize: "14px",
  };
  const noteStyle: any = {
    fontSize: "1.6rem",
    color: "rgb(76 89 95)",
    textAlign: "center",
    fontWeight: "bold",
    border: "2px solid rgb(137 135 135)",
    borderRadius: "4px",
    padding: "0.5rem",
  };
  return (
    <div className="story-documentation">
      {/* How toast can be used */}
      <div className="block--section">
        <TextStyles
          alignment="left"
          displayTypes="SM-3.4"
          fontweight="extraBold"
          textcolor="dark"
          type="Display"
          utility="storybook-doc--heading"
        >
          How toast can be used
        </TextStyles>
        <div style={codeContainerStyle}>
          <pre>
            <code style={codeStyle}>
              {`
          import React from 'react';
          import { Button } from 'our-ounce-library';
          import { useToast } from 'our-ounce-library';

          const ToastTemplate = () => {
            const showToast = useToast();

            const handleClick = () => {
              showToast({ message: 'Toast message', timeout: 3000});
            };

            return (
              <>
                <Button onClick={handleClick}> click me </Button>
              </>
            );
          };
        `}
            </code>
          </pre>
          <p style={noteStyle}>
            Note: Make sure to wrap your app inside the AppProvider
          </p>
        </div>
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
                    Don't write too much text in a Toast. Be specific and short
                    in the actual message.
                  </TextStyles>
                </FlexLayout>
                <div className="inner_card_custom">
                  <FlexLayout spacing="tight">
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <FlexLayout direction="vertical" spacing="tight">
                        <ToastDont1 />
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
                        <ToastDo1 />
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
                    Use a toast for a brief message about the current action.
                    Don’t greet users with a toast when they open a page.
                  </TextStyles>
                </FlexLayout>
                <div className="inner_card_custom">
                  <FlexLayout spacing="tight">
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <FlexLayout direction="vertical" spacing="tight">
                        <ToastDont2 />
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
                        <ToastDo2 />
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
                    Icons should Emphasize actions. Don’t use icons that are
                    hard to understand as they distract from the message.
                  </TextStyles>
                </FlexLayout>
                <div className="inner_card_custom">
                  <FlexLayout spacing="tight">
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <FlexLayout direction="vertical" spacing="tight">
                        <ToastDont3 />
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
                        <ToastDo3 />
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
                    Avoid using toasts for critical messages that a user must
                    see. Use an Alert instead.
                  </TextStyles>
                </FlexLayout>
                <div className="inner_card_custom">
                  <FlexLayout spacing="tight">
                    <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="50">
                      <FlexLayout direction="vertical" spacing="tight">
                        <ToastDont4 />
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
                        <ToastDo4 />
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
                Always offer an option to undo the action.
              </TextStyles>
              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Make the title of the toast message brief and clear. If users
                want to provide more details, they can write them in the
                description.
              </TextStyles>
              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Consider including an action in toast only if it is available
                elsewhere on the page.
              </TextStyles>
              <List type="decimal">
                <TextStyles
                  alignment="left"
                  fontweight="normal"
                  subheadingTypes="SM-1.8"
                  textcolor="light"
                  type="SubHeading"
                  utility="storybook-doc--paragraph"
                >
                  To help sellers update a specific part of the page, give them
                  a button that says "Reload" in a small message box. If they
                  don't see the message box, they can still refresh the entire
                  page instead.
                </TextStyles>
                <TextStyles
                  alignment="left"
                  fontweight="normal"
                  subheadingTypes="SM-1.8"
                  textcolor="light"
                  type="SubHeading"
                  utility="storybook-doc--paragraph"
                >
                  Give sellers the choice to "Undo" deleting an image. If they
                  don't see the message box, they can still find the deleted
                  picture somewhere else.
                </TextStyles>
              </List>
            </List>
            <FlexLayout spacing="loose">
              <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
                <ToastBestPractice />
              </FlexChild>
            </FlexLayout>
          </FlexLayout>
        </FlexLayout>
      </div>
      <hr className="section-devider" />
      <StoryBookFooter />
    </div>
  );
};
export default ToastDoc;
