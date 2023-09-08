import React from "react";
import Stories from "../Stories";
import { Card } from "../../Card";
import img1 from "../assests/Rectangle1.png";
import img2 from "../assests/Rectangle2.png";
import img3 from "../assests/Rectangle3.png";
import img4 from "../assests/Rectangle4.png";
import img5 from "../assests/Rectangle5.png";
import { FlexLayout } from "../../FlexLayout";
export default {
  title: "Components/Media/Stories",
  component: Stories,
  argTypes: {
    items: {
      description: `<div><strong>Pass what you want to see in Stories:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>imageUrl <span style="color:red">*</span></td><td>imageUrl(String)</td></tr><tr><td>imageCaption <span style="color:red">*</span></td><td>imageCaption(String)</td></tr></tbody></table>`,
      control: {
        type: "array",
      },
      defaultValue: [
        {
          imageUrl: img1,
          imageCaption: "Best Of Sabaton",
        },
        {
          imageUrl: img2,
          imageCaption: "Primo Victoria",
        },
        {
          imageUrl: img3,
          imageCaption: "Aces in Exile",
        },
        {
          imageUrl: img4,
          imageCaption: "Race To The Sea",
        },
        {
          imageUrl: img5,
          imageCaption: "Wolfpack",
        },
      ],
    },
    timeout: {
      description: "Set timer for stories",
      control: {
        type: "number",
      },
      defaultValue: 3000,
    },
    customClass: {
      description: "Add custom class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};
const items = [
  {
    imageUrl: img1,
    imageCaption: "Best Of Sabaton",
  },
  {
    imageUrl: img2,
    imageCaption: "Primo Victoria",
  },
  {
    imageUrl: img3,
    imageCaption: "Aces in Exile",
  },
  {
    imageUrl: img4,
    imageCaption: "Race To The Sea",
  },
  {
    imageUrl: img5,
    imageCaption: "Wolfpack",
  },
];
const Template = ({ ...rest }) => {
  return (
    <Card>
      <FlexLayout desktopWidth="50" tabWidth="50" mobileWidth="100">
        <Stories
          items={items}
          timeout={rest.timeout}
          customClass={rest.customClass}
        />
      </FlexLayout>
    </Card>
  );
};
export const Primary = Template.bind({});
