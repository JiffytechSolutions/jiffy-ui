import React from "react";
import Breadcrumb,{ObjI} from "../Breadcrumb";
import { Card } from "../..";
import BreadcrumbDoc from "../Document/BreadcrumbDoc";
export default {
  title: "Components/Actions/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><div class='inte- flex inte- flex--wrap inte- flex--spacing- Extraloose inte - flex--vertical'><div class='inte - flex__item'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>Breadcrumbs serve as an effective visual aid, indicating the location of the user within the website's hierarchy among different levels and quickly navigate through them.</h4></div><div class='inte - flex__item'><p><blockquote>Breadcrumbs allow for easy navigation to higher-level pages.</blockquote></p></div></div>",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=6277-269738&t=fwx7SHLr0Vi8Wxq1-0",
    },
  },
  argTypes: {
    items: {
      description: `<div><strong>Routing stack information:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>label <span style="color:red">*</span></td><td>label(String)</td></tr><tr><td>value <span style="color:red">*</span></td><td>value(String)</td></tr></tbody></table>`,
      control: {
        type: "array",
      },
      defaultValue: [
        { label: "Home", value: "Home" },
        { label: "Clothing", value: "clothing" },
        { label: "Men's Clothing", value: "Men's Clothing" },
        { label: "T-Shirts", value: "T-Shirts" },
        { label: "Product Name", value: "Product Name" },
      ],
    },
    onClick: {
      description: "function call on clicking breadcrumb item",
      type: "function",
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
  function onClick(value: string, obj: ObjI = { label: "", value: "" }) {
    alert(value);
  }
  return (
    <Card>
      <Breadcrumb
        items={rest.items}
        onClick={onClick}
        customClass={rest.customClass}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
export function Documentation() {
  return <BreadcrumbDoc />;
}
