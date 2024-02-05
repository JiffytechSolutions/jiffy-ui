import React from "react";
import { Card } from "../../Card";
import FileUpload from "../FileUpload";
import * as Icon from "../../../storybook/Foundation/Icons/Icons";
import { FlexLayout } from "../../FlexLayout";
import FileUploadDoc from "../Document/FileUploadDoc";
const allIcons: any = { ...Icon };
export default {
  title: "Components/Form/FileUpload",
  component: FileUpload,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=6020-246994&t=fwx7SHLr0Vi8Wxq1-0",
    },
  },
  argTypes: {
    isMultiple: {
      description: "If this prop is true then you can upload multiple files",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    accept: {
      description: "Accepted images extension",
      control: {
        type: "array",
      },
      defaultValue: ["png", "jpg", "jpeg"],
    },
    isDragable: {
      description: "Upload images using drag and drop",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    helpText: {
      description: "Write helper text",
      control: {
        type: "text",
      },
      defaultValue: "Helper Text",
    },
    type: {
      description: "File upload type",
      control: {
        type: "radio",
        options: ["primary", "secondary"],
      },
      defaultValue: "primary",
    },
    helpIcon: {
      description: "set icon beside help text",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Search",
    },
    onChange: {
      description:
        "A callback function, will be called when uploading state is change",
      control: {
        type: "function",
        disable: true,
      },
    },
    innerLabel: {
      description:
        "Set label of File upload which you want to display inside the file upload , it will appers just after the upload icon",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    id: {
      description: "Set custom id of File upload",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    onRemove: {
      description:
        "A callback function, will be executed when removing file button is clicked",
      control: {
        type: "function",
        disable: true,
      },
    },
    maxCount: {
      description: "Limit the number of files to be uploaded",
      control: {
        type: "number",
      },
      defaultValue: 5,
    },
    maxSizeAllowed: {
      description:
        "Limit the file size to be upload (In Bytes) ,<br/> Ex. 1KB = 1024 Bytes",
      control: {
        type: "number",
      },
      defaultValue: 500000,
    },
    isDisabled: {
      description: "Disable image uploading",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    clearAll: {
      description: "clear all",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    customClass: {
      description: "Set custom class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};
const Template = ({ ...rest }) => {
  return (
    <Card>
      <FileUpload
        {...rest}
        helpIcon={allIcons[rest.helpIcon]({
          size: 20,
          color: "var(--inte-G300)",
        })}
        onChange={(e) => {}}
      />
    </Card>
  );
};
export const Primary: any = Template.bind({});
const UploadTypes = ["primary", "secondary"];
export const types: any = Template.bind({});
types.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose">
        {UploadTypes.map((variant: any, index: number) => (
          <Card key={index} title={`${variant}`}>
            <FileUpload type={variant} />
          </Card>
        ))}
      </FlexLayout>
    </Card>
  ),
];

export const disabled: any = Template.bind({});
disabled.decorators = [
  () => (
    <Card>
      <FlexLayout spacing="extraLoose">
        {UploadTypes.map((variant: any, index: number) => (
          <Card key={index} title={`${variant}`}>
            <FileUpload type={variant} isDisabled />
          </Card>
        ))}
      </FlexLayout>
    </Card>
  ),
];

export const SingleFileUpload: any = Template.bind({});
SingleFileUpload.decorators = [
  () => (
    <Card>
      <FileUpload isMultiple={false} accept={["png"]} />
    </Card>
  ),
];

export const UploadAnyFile: any = Template.bind({});
UploadAnyFile.decorators = [
  () => (
    <Card>
      <FileUpload />
    </Card>
  ),
];

export const FileUploadWithCustomLabel: any = Template.bind({});
FileUploadWithCustomLabel.decorators = [
  () => (
    <Card>
      <FileUpload innerLabel="File upload with custom label" />
    </Card>
  ),
];

export const FileUploadWithMaxCount: any = Template.bind({});
FileUploadWithMaxCount.decorators = [
  () => (
    <Card>
      <FileUpload isDragable maxCount={5} />
    </Card>
  ),
];

export const FileUploadWithMaxSize: any = Template.bind({});
FileUploadWithMaxSize.decorators = [
  () => (
    <Card>
      <FileUpload isDragable maxSizeAllowed={500000} />
    </Card>
  ),
];

export const FileUploadWithHelpText: any = Template.bind({});
FileUploadWithHelpText.decorators = [
  () => (
    <Card>
      <FileUpload helpText="Write help text" />
    </Card>
  ),
];
export function Documentation() {
  return <FileUploadDoc />;
}
