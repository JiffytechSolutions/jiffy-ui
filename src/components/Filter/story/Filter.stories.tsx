import React, { useState } from "react";
import { Card } from "../../Card";
import { FormElement } from "../../Form";
import Filter from "../Filter";
import FilterDoc from "../Document/FilterDoc";
import Custom, {
  CheckBoxRender,
  SelectRender,
  TextFieldRender,
} from "./Custom";
import Button from "../../Button/Button";
import { FilterIcon, Monitor } from "../../../storybook/Foundation/Icons/Icons";

export default {
  title: "Components/Overlays/Filter",
  component: Filter,
  parameters: {
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><h4 className='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>Filters provide a set of controls to reduce items in a collection based on attributes the user is interested in (e.g., filtering items by creation date). Use filters for setting conditions & straining down results based on user-determined criteria.</h4><p><blockquote>Filters is a composite component that filters the items of a list or table.</blockquote></p></div>",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=5682-272878&t=vybTUvZSW4IIqAUa-0",
    },
  },

  argTypes: {
    filters: {
      description: `<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>key<span title="Required" className="sto-13xzcrp">*</span></code></td><td><code>string</code> or <code>number</code></td><td>The unique key for the filter item.</td></tr><tr><td><code>label<span title="Required" className="sto-13xzcrp">*</span></code></td><td><code>string</code></td><td>The label to display for the filter item.</td></tr><tr><td><code>children<span title="Required" className="sto-13xzcrp">*</span></code></td><td><code>React.ReactNode</code></td><td>The children to display within the filter item.</td></tr><tr><td><code>badgeCount</code></td><td><code>number</code></td><td>The count to display in the badge for the filter item.</td></tr><tr><td><code>onRemove</code></td><td><code>() =&gt; void</code></td><td>A callback function to call when the filter item is removed.</td></tr><tr><td><code>isApplied</code></td><td><code>boolean</code></td><td>is this filter is currently applied (this is used to show the clear button below on applied filter)</td></tr></tbody></table>`,
      control: {
        disable: true,
      },
    },
    activator: {
      description: "Activator of filter",
      control: {
        disable: true,
      },
    },
    isOpen: {
      description: "Open Filter",
      control: {
        disable: true,
      },
    },
    heading: {
      description: "Enter heading Of Filter Sheet",
      control: {
        type: "text",
      },
      defaultValue: "Filter Heading",
    },
    isCloseOnEsc: {
      description: "Close on Esc key press",
      type: "boolean",
      defaultValue: true,
    },
    onClose: {
      description: "Manage onClose Function",
      control: {
        type: "function",
        disable: true,
      },
    },
    primaryAction: {
      description: "You can set Primary action at bottom of Dropdown",
      control: {
        disable: true,
      },
    },
    secondaryAction: {
      description: "You can set Secondary action at bottom of Dropdown",
      control: {
        disable: true,
      },
    },
    customClass: {
      description: "Add custom class",
      control: {
        type: "text",
      },
      defaultValue: "custom_class",
    },
  },
};

const filtersObj = [
  {
    key: "sales",
    label: "Sales hello",
    badgeCount: 5,
    children: (
      <>
        <FormElement>
          <SelectRender />
          <TextFieldRender />
        </FormElement>
      </>
    ),
  },
  {
    key: "metrics",
    label: "Metrics hello",
    children: (
      <FormElement>
        <CheckBoxRender labelVal="Finished" />
        <CheckBoxRender labelVal="Warning" />
        <CheckBoxRender labelVal="Error" />
        <CheckBoxRender labelVal="Pending" />
      </FormElement>
    ),
  },
  {
    key: "metricse",
    label: "metricse",
    children: (
      <FormElement>
        <CheckBoxRender labelVal="Finished" />
        <CheckBoxRender labelVal="Warning" />
        <CheckBoxRender labelVal="Error" />
        <CheckBoxRender labelVal="Pending" />
      </FormElement>
    ),
  },
];

const Template = ({ ...rest }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <Filter
        {...rest}
        filters={filtersObj}
        heading={rest.heading}
        activator={
          <Button
            type="outlined"
            size="large"
            icon={<FilterIcon size="20" />}
            onClick={() => setOpen((prev) => !open)}
          >
            Filter
          </Button>
        }
        isOpen={open}
        onClose={() => setOpen(false)}
        secondaryAction={{
          children: "Clear All",
          type: "outlined",
          halign: "center",
          isFullWidth: true,
          onClick: () => alert("Clear All button clicked"),
        }}
        primaryAction={{
          children: "Apply",
          halign: "center",
          isFullWidth: true,
          onClick: () => alert("Apply button clicked"),
          isDisable: true,
        }}
      />
    </Card>
  );
};

export const Primary = Template.bind({});

// Filter With Popover
const filterPopUpArr = [
  {
    key: "sales",
    label: "Sales hello",
    badgeCount: 5,
    children: (
      <>
        <FormElement>
          <SelectRender />
          <TextFieldRender />
        </FormElement>
      </>
    ),
  },
  {
    key: "metrics",
    label: "Metrics hello",
    children: (
      <FormElement>
        <CheckBoxRender labelVal="Finished" />
        <CheckBoxRender labelVal="Warning" />
        <CheckBoxRender labelVal="Error" />
        <CheckBoxRender labelVal="Pending" />
      </FormElement>
    ),
  },
];

export const Filter_with_single_clear: any = ({ ...rest }) => {
  return <Custom {...rest} />;
};

export const Filter_with_popover: any = Template.bind({});
Filter_with_popover.decorators = [
  () => {
    const [open, setOpen] = useState(false);
    return (
      <Card title="If your an array have length 2 then auto open in filter with popover">
        <Filter
          filters={filterPopUpArr}
          heading="Filters"
          activator={
            <Button
              type="outlined"
              icon={<Monitor color="#2a2a2a" size={16} />}
              onClick={() => setOpen((prev) => !open)}
            >
              More Filters
            </Button>
          }
          isOpen={open}
          onClose={() => setOpen(false)}
          isCloseOnEsc={true}
          secondaryAction={{
            children: "Clear All",
            type: "outlined",
            halign: "center",
            isFullWidth: true,
          }}
          primaryAction={{
            children: "Apply",

            halign: "center",
            isFullWidth: true,
          }}
        />
      </Card>
    );
  },
];

export function Documentation() {
  return <FilterDoc />;
}
