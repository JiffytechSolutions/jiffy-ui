// eslint-disable-all-line prettier/prettier
import React from "react";
import { Card, FlexLayout } from "../..";
import Text from "../../Text/Text";
import FlexChild from "../components/FlexChild";
import "./FlexStories.css";

export default {
  title: "Components/Layout/FlexLayout",
  component: FlexLayout,
  parameters: {
    docs: {
      description: {
        component:
          "*FLEXLAYOUT* component is an Essentail Ounce component for Using Layout and Structuring of Page. By using this you can easily *WIDTH* of childrens * SPACING* between components",
      },
    },
  },
  argTypes: {
    valign: {
      description: "Manages the Vertical alignment of children items",
      control: {
        type: "radio",
        options: ["start", "center", "end", "stretch", "baseline", "none"],
      },
      defaultValue: "none",
    },
    valignTab: {
      description: "Manages the vertical alignment of children items in tab view",
      control: {
        type: "radio",
        options: ["start", "center", "end", "stretch", "baseline", "none"],
      },
      defaultValue: "none",
    },
    valignMob: {
      description: "Manages the vertical alignment of children items in mobile view",
      control: {
        type: "radio",
        options: ["start", "center", "end", "stretch", "baseline", "none"],
      },
      defaultValue: "none",
    },
    halign: {
      description: "Manages the horinzontal spacing alignment of children items",
      control: {
        type: "radio",
        options: ["start", "center", "end", "fill", "around", "evenly", "none"],
      },
      defaultValue: "none",
    },
    halignTab: {
      description: "Manages the horizontal spacing of children items in tab view",
      control: {
        type: "radio",
        options: ["start", "center", "end", "fill", "around", "evenly", "none"],
      },
      defaultValue: "none",
    },
    halignMob: {
      description: "Manages the horizontal alignment of children items in mobile view",
      control: {
        type: "radio",
        options: ["start", "center", "end", "fill", "around", "evenly", "none"],
      },
      defaultValue: "none",
    },
    direction: {
      description: "Manages the alignemtnVertical or horizontal",
      control: {
        type: "radio",
        options: ["horizontal", "horizontal-reverse", "vertical", "vertical-reverse", "row-reverse", "none"],
      },
      defaultValue: "none",
    },
    spacing: {
      description: "Manages the spacing between Items <table><thead><tr><th>Props</th><th>Value</th></tr></thead><tbody><tr><td><strong>none</strong></td><td>0</td></tr><tr><td><strong>extraTight</strong></td><td>4px</td></tr><tr><td><strong>mediumTight</strong></td><td>8px</td></tr><tr><td><strong>tight</strong></td><td>12px</td></tr><tr><td><strong>loose</strong></td><td>16px</td></tr><tr><td><strong>mediumLoose</strong></td><td>20px</td></tr><tr><td><strong>extraLoose</strong></td><td>24px</td></tr><tbody></table>",
      control: {
        type: "radio",
        options: [
          "none",
          "extraTight",
          "mediumTight",
          "tight",
          "loose",
          "mediumLoose",
          "extraLoose",
        ],
      },
      defaultValue: "none",
    },

    childWidth: {
      description: "Makes childwidth full width",
      control: {
        type: "radio",
        options: ["fullWidth", "none"],
      },
      defaultValue: "none",
    },
    children: {
      description: "this is children",
      control: {
        disable: true,
      },
    },
    customClass: {
      description: "Set Custom Class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    mobileWidth: {
      description: "Manages the width of child items in mobile view",
      control: {
        type: "radio",
        options: ["100", "50", "80", "75", "66", "33", "25", "20"],
      },
    },
    tabWidth: {
      description: "Manages the width of child items in tab view",
      control: {
        type: "radio",
        options: ["100", "50", "80", "75", "66", "33", "25", "20"],
      },
    },
    desktopWidth: {
      description: "Manages the width of child items in desktop view",
      control: {
        type: "radio",
        options: ["100", "50", "80", "75", "66", "33", "25", "20"],
      },
    },
    order: {
      description: `set order of items <pre>
  <code>
    &lt;FlexLayout&gt;
      &lt;FlexChild order={2}&gt;
        &lt;div&gt;Flex Item 1&lt;/div&gt;
      &lt;/FlexChild&gt;
      &lt;div&gt;Flex Item 2&lt;/div&gt;
    &lt;/FlexLayout&gt;
  </code>
</pre>
`,
      control: {
        type: "text",
      },
      defaultValue: "",
    },
    directionTab: {
      description: "Manages the direction of items on tab view",
      control: {
        type: "radio",
        options: ["horizontal", "horizontal-reverse", "vertical", "vertical-reverse", "row-reverse", "none"],
      },
      defaultValue: "none",
    },
    directionMob: {
      description: "Manages the direction of items on mobile view",
      control: {
        type: "radio",
        options: ["horizontal", "horizontal-reverse", "vertical", "vertical-reverse", "row-reverse", "none"],
      },
      defaultValue: "none",
    },
    wrap: {
      description: "Manages whether items break in viewport or overflow",
      control: {
        type: "radio",
        options: ["none", "noWrap", "wrap"],
      },
      defaultValue: "wrap",
    },
    wrapTab: {
      description: "Manages whether items break in viewport or overflow on tab view",
      control: {
        type: "radio",
        options: ["wrap", "noWrap", "none"],
      },
      defaultValue: "none",
    },
    wrapMob: {
      description: "Manages whether items break in viewport or overflow on mobile view",
      control: {
        type: "radio",
        options: ["wrap", "noWrap", "none"],
      },
      defaultValue: "none",
    },
  },
};

const Template = ({ ...rest }) => {
  return (
    <Card title="Parent width">
      <div className="flexcontainer" style={{ height: "200px" }}>
        <FlexLayout {...rest}>
          <Card cardType="bordered">Flex Item 1</Card>
          <Card cardType="bordered">Flex Item 2</Card>
          <Card cardType="bordered">Flex Item 3</Card>
        </FlexLayout>
      </div>
    </Card >
  );
};
const TemplateSecondary = ({ ...rest }) => {
  return (
    <Card cardType="bordered" title="Give Width to Child Component">
      <FlexLayout
        childWidth="fullWidth"
        wrap="noWrap"
        spacing="extraLoose"
        wrapMob="wrap"
      >
        <FlexChild desktopWidth="50" tabWidth="50" mobileWidth="100">
          <Card cardType="bordered">
            <Text>
              Flex Item
            </Text>
          </Card>
        </FlexChild>
        <FlexChild desktopWidth="25" tabWidth="25" mobileWidth="100">
          <Card cardType="bordered">
            <Text>Flex Item</Text>
          </Card>
        </FlexChild>
        <FlexChild desktopWidth="25" tabWidth="25" mobileWidth="100">
          <Card cardType="bordered">Flex Item</Card>
        </FlexChild>
      </FlexLayout>
    </Card>
  );
};
export const ParentControl = Template.bind({
  wrap: "wrap",
});
export const ChildControl = TemplateSecondary.bind({});
// Valign
const vertical_align = ["start", "center", "end", "stretch"];
export const Children_vertical_align: any = Template.bind({});
Children_vertical_align.decorators = [
  () => (
    <FlexLayout
      desktopWidth="50"
      tabWidth="50"
      mobileWidth="100"
      spacing="loose"
    >
      {vertical_align.map((valign: any) => (
        <Card
          cardType="bordered"
          title={valign.charAt(0).toUpperCase() + valign.slice(1).toLowerCase()}
        >
          <div className="flexcontainer" style={{ height: "200px" }}>
            <FlexLayout valign={valign} spacing="loose">
              <Card cardType="bordered">Flex Item 1</Card>
              <Card cardType="bordered">Flex Item 2</Card>
              <Card cardType="bordered">Flex Item 3</Card>
            </FlexLayout>
          </div>
        </Card>
      ))}
    </FlexLayout>
  ),
];
// Halign
const horizontal_align = [
  "start",
  "center",
  "end",
  "fill",
  "around",
  "evenly",
  "none",
];
export const Children_horizontal_align: any = Template.bind({});
Children_horizontal_align.decorators = [
  () => (
    <FlexLayout
      desktopWidth="50"
      tabWidth="50"
      mobileWidth="100"
      spacing="loose"
    >
      {horizontal_align.map((halign: any) => (
        <Card
          cardType="bordered"
          title={halign.charAt(0).toUpperCase() + halign.slice(1).toLowerCase()}
        >
          <FlexLayout halign={halign} spacing="loose" valign="start">
            <Card cardType="bordered">Flex Item 1</Card>
            <Card cardType="bordered">Flex Item 2</Card>
            <Card cardType="bordered">Flex Item 3</Card>
          </FlexLayout>
        </Card>
      ))}
    </FlexLayout>
  ),
];
// spacing
const spacing = [
  {
    name: "none",
    unit: "0px",
  },
  {
    name: "extraTight",
    unit: "4px",
  },
  {
    name: "mediumTight",
    unit: "8px",
  },
  {
    name: "tight",
    unit: "12px",
  },
  {
    name: "loose",
    unit: "16px",
  },
  {
    name: "mediumLoose",
    unit: "20px",
  },
  {
    name: "extraLoose",
    unit: "24px",
  },
];
export const Children_Spacing: any = Template.bind({});
Children_Spacing.decorators = [
  () => (
    <FlexLayout
      desktopWidth="50"
      tabWidth="50"
      mobileWidth="100"
      spacing="loose"
    >
      {spacing.map((spacing: any) => (
        <Card
          cardType="bordered"
          title={
            spacing.name.charAt(0).toUpperCase() +
            spacing.name.slice(1).toLowerCase()
          }
        >
          <FlexLayout spacing={spacing.name} valign="start">
            <Card cardType="bordered">Flex Item {`(${spacing.unit})`}</Card>
            <Card cardType="bordered">Flex Item {`(${spacing.unit})`}</Card>
            <Card cardType="bordered">Flex Item {`(${spacing.unit})`}</Card>
          </FlexLayout>
        </Card>
      ))}
    </FlexLayout>
  ),
];
// direction

const direction = ["none", "horizontal", "horizontal-reverse", "vertical", "vertical-reverse", "row-reverse"];
export const Children_direction: any = Template.bind({});
Children_direction.decorators = [
  () => (
    <FlexLayout
      desktopWidth="50"
      tabWidth="50"
      mobileWidth="100"
      spacing="loose"
    >
      {direction.map((direction: any) => (
        <Card
          cardType="bordered"
          title={
            direction.charAt(0).toUpperCase() + direction.slice(1).toLowerCase()
          }
        >
          <FlexLayout direction={direction} spacing="loose" valign="start">
            <Card cardType="bordered">Flex Item 1</Card>
            <Card cardType="bordered">Flex Item 2</Card>
            <Card cardType="bordered">Flex Item 3</Card>
          </FlexLayout>
        </Card>
      ))}
    </FlexLayout>
  ),
];
// desktopWidth

const desktopWidth = ["20", "25", "33", "50", "66", "75", "80", "100"];
export const Children_Width: any = Template.bind({});
Children_Width.decorators = [
  () => (
    <FlexLayout direction="vertical" wrap="noWrap" spacing="loose">
      {desktopWidth.map((desktopWidth: any) => (
        <FlexChild
          desktopWidth={desktopWidth}
          tabWidth={desktopWidth}
          mobileWidth={desktopWidth}
        >
          <Card cardType="bordered">Children Width {desktopWidth} %</Card>
        </FlexChild>
      ))}
    </FlexLayout>
  ),
];
// children width via parent
const parent_width = ["20", "25", "33", "50", "66", "75", "80", "100"];
export const Children_width_Control_via_parent_width: any = Template.bind({});
Children_width_Control_via_parent_width.decorators = [
  () => (
    <FlexLayout direction="vertical" wrap="noWrap" spacing="loose">
      {parent_width.map((desktopParent: any) => (
        <FlexLayout
          desktopWidth="100"
          tabWidth={desktopParent}
          mobileWidth={desktopParent}
          spacing="loose"
        >
          <Card cardType="bordered">Parent Width {desktopParent} %</Card>
        </FlexLayout>
      ))}
    </FlexLayout>
  ),
];