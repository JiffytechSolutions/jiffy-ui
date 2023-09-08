import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";
import Alert from "../../Alert/Alert";
import { FlexLayout } from "../../FlexLayout";
export const SwitcherDoc = () => {
  return (
    <>
      <div className="story-documentation">
        <FlexLayout spacing="extraLoose" direction="vertical">
          <Alert
            type="success"
            title="No need document for this component."
          />
        </FlexLayout>
        <hr className="section-devider" />
        <div className="block--section">
          <StoryBookFooter />
        </div>
      </div>
    </>
  );
};
export default SwitcherDoc;
