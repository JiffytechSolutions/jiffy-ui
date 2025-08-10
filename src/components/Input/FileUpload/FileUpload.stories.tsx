import React from "react";
import FileUpload from "./FileUpload";
export default {
  title: "components/Input/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {},
};
const Template = ({ ...rest }) => {
  return (
    <FileUpload
      helpText=".jpg,.png,.pdf"
      onChange={(e, single) => { }}
      isMultiple
      accept={["png"]}
      isFileUploaded={[false, true]}
      isDisabled={rest.isDisabled}
    />
  );
};
export const Primary = Template.bind({});
