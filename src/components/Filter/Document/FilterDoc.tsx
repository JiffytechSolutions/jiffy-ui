import React, { useState } from "react";
import { ChevronDown, ChevronUp } from '../../../storybook/Foundation/Icons/Icons';
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import {
  FilterDo1,
  FilterDont1,
} from "../../../StorybookImages/StorybookImages";
import Button from "../../Button/Button";
import { Card } from "../../Card";
import { FlexChild, FlexLayout } from "../../FlexLayout";
import { Checkbox } from "../../Form";
import List from "../../List/List";
import Popover from "../../Popover/Popover";
import TextStyles from "../../TextStyles/TextStyles";
export const FilterDoc = () => {
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <>
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
              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                Don’t use jargon to specify certain filter categories.
                Complicated words will just confuse users and prevent them from
                applying relevant filter selections.
              </TextStyles>
              <div className="inner_card_custom">
                <FlexLayout wrap="noWrap" spacing="tight">
                  <Card cardType="filled">
                    <FlexLayout spacing="loose" direction="vertical">
                      <FlexLayout spacing="loose" halign="center">
                        <FilterDont1 />
                      </FlexLayout>
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
                  </Card>
                  <Card cardType="filled">
                    <FlexLayout spacing="loose" direction="vertical">
                      <FlexLayout spacing="loose" halign="center">
                        <FilterDo1 />
                      </FlexLayout>
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
                  </Card>
                </FlexLayout>
              </div>
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
              <TextStyles
                alignment="left"
                fontweight="normal"
                subheadingTypes="SM-1.8"
                textcolor="light"
                type="SubHeading"
                utility="storybook-doc--paragraph"
              >
                The filters component should:
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
                  Help reduce merchant effort by promoting the filtering
                  categories that are most commonly used
                </TextStyles>
                <TextStyles
                  alignment="left"
                  fontweight="normal"
                  subheadingTypes="SM-1.8"
                  textcolor="light"
                  type="SubHeading"
                  utility="storybook-doc--paragraph"
                >
                  Consider small screen sizes when designing the interface for
                  each filter and the total number filters to include
                </TextStyles>
              </List>
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
            Use Case
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
                  In case of single filter option, one popover will display on
                  screen.
                </TextStyles>
              </List>
              <Card>
                <FlexLayout halign="start">
                  <FlexChild>
                    <Popover
                      isOpen={openPopover}
                      activator={
                        <Button
                          icon={openPopover ? <ChevronUp /> : <ChevronDown />}
                          iconAlign="right"
                          onClick={() => setOpenPopover(!openPopover)}
                          type="outlined"
                        >
                          Filter
                        </Button>
                      }
                      onClose={() => setOpenPopover(false)}
                      popoverWidth={175}
                    >
                      <FlexLayout
                        direction="vertical"
                        spacing="loose"
                        wrap="noWrap"
                      >
                        <FlexChild>
                          <Checkbox
                            checked={true}
                            id="one"
                            label="New order adding options"
                            name="Type"
                          />
                        </FlexChild>
                      </FlexLayout>
                    </Popover>
                  </FlexChild>
                </FlexLayout>
              </Card>
            </FlexLayout>
          </FlexLayout>
        </div>
        <hr className="section-devider" />
        <StoryBookFooter />
      </div>
    </>
  );
};
export default FilterDoc;
