import React from "react";
import FlexLayout from "../FlexLayout/FlexLayout";
import Button from "../Button/Button";
import Popover, { Dropdown, DropdownItem } from "./Dropdown";
import InlineStack from "../InlineStack/InlineStack";
import VerticalStack from "../VerticalStack/VerticalStack";

const sizes = ["Small", "Medium", "Large"];
const variants = ["Default", "Primary", "Success", "Error", "Warning"];
const placements = ["top", "bottom", "left", "right", "top-start", "top-end", "bottom-start", "bottom-end"];

export default {
  title: "Components/Popover & Dropdown",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      description: "How to trigger the popover",
      control: {
        type: "radio",
        options: ["click", "hover", "focus"],
      },
      defaultValue: "click",
    },
    placement: {
      description: "Popover placement",
      control: {
        type: "select",
        options: placements,
      },
      defaultValue: "bottom",
    },
    offset: {
      description: "Offset from trigger",
      control: {
        type: "number",
      },
      defaultValue: 8,
    },
    disabled: {
      description: "Disable popover",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
  args: {
    trigger: "click",
    placement: "bottom",
    offset: 8,
    disabled: false,
  }
};

const Template = ({ ...rest }) => {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <Popover
        trigger={rest.trigger}
        placement={rest.placement}
        offset={rest.offset}
        disabled={rest.disabled}
        content={
          <div style={{ padding: "16px", minWidth: "200px" }}>
            <h4 style={{ margin: "0 0 8px 0" }}>Popover Content</h4>
            <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
              This is the content inside the popover.
            </p>
          </div>
        }
      >
        <Button variant="Primary">Click me</Button>
      </Popover>
    </div>
  );
};

export const Primary = Template.bind({});

// Basic Popover Examples
export const Popover_basic_examples: any = Template.bind({});
Popover_basic_examples.decorators = [
  () => {
    return (
      <div style={{ padding: "100px" }}>
        <InlineStack gap={4} alignItems="center" justifyContent="center">
          <Popover
            content={
              <div style={{ padding: "16px", maxWidth: "200px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Click Popover</h4>
                <p style={{ margin: "0", fontSize: "14px" }}>
                  This popover opens on click and can contain any content.
                </p>
              </div>
            }
          >
            <Button variant="Primary">Click Trigger</Button>
          </Popover>

          <Popover
            trigger="hover"
            content={
              <div style={{ padding: "16px", maxWidth: "200px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Hover Popover</h4>
                <p style={{ margin: "0", fontSize: "14px" }}>
                  This popover appears on hover.
                </p>
              </div>
            }
          >
            <Button variant="Secondary">Hover Trigger</Button>
          </Popover>

          <Popover
            trigger="focus"
            content={
              <div style={{ padding: "16px", maxWidth: "200px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Focus Popover</h4>
                <p style={{ margin: "0", fontSize: "14px" }}>
                  This popover appears on focus.
                </p>
              </div>
            }
          >
            <Button variant="Tertiary">Focus Trigger</Button>
          </Popover>
        </InlineStack>
      </div>
    );
  },
];

// Popover Placements
export const Popover_placements: any = Template.bind({});
Popover_placements.decorators = [
  () => {
    const popoverContent = (
      <div style={{ padding: "12px", minWidth: "150px", textAlign: "center" }}>
        <p style={{ margin: "0", fontSize: "14px" }}>Popover content</p>
      </div>
    );

    return (
      <div style={{ padding: "150px", textAlign: "center" }}>
        <VerticalStack gap={4}>
          {/* Top placements */}
          <InlineStack gap={2}>
            <Popover placement="top-start" content={popoverContent}>
              <Button size="Small">Top Start</Button>
            </Popover>
            <Popover placement="top" content={popoverContent}>
              <Button size="Small">Top</Button>
            </Popover>
            <Popover placement="top-end" content={popoverContent}>
              <Button size="Small">Top End</Button>
            </Popover>
          </InlineStack>

          {/* Side placements */}
          <InlineStack gap={2} alignItems="center">
            <Popover placement="left" content={popoverContent}>
              <Button size="Small">Left</Button>
            </Popover>
            <div style={{ padding: "20px", border: "2px dashed #ccc", borderRadius: "8px" }}>
              Center Area
            </div>
            <Popover placement="right" content={popoverContent}>
              <Button size="Small">Right</Button>
            </Popover>
          </InlineStack>

          {/* Bottom placements */}
          <InlineStack gap={2}>
            <Popover placement="bottom-start" content={popoverContent}>
              <Button size="Small">Bottom Start</Button>
            </Popover>
            <Popover placement="bottom" content={popoverContent}>
              <Button size="Small">Bottom</Button>
            </Popover>
            <Popover placement="bottom-end" content={popoverContent}>
              <Button size="Small">Bottom End</Button>
            </Popover>
          </InlineStack>
        </VerticalStack>
      </div>
    );
  },
];

// Dropdown Examples
export const Dropdown_examples: any = Template.bind({});
Dropdown_examples.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <h3>Dropdown Built with Popover</h3>
        
        <InlineStack gap={4} alignItems="center">
          <div style={{ width: "250px" }}>
            <Dropdown
              label="Basic Dropdown"
              placeholder="Select an option"
              onSelectionChange={(value, label) => console.log("Selected:", value, label)}
            >
              <DropdownItem value="option1">Option 1</DropdownItem>
              <DropdownItem value="option2">Option 2</DropdownItem>
              <DropdownItem value="option3">Option 3</DropdownItem>
              <DropdownItem value="option4" disabled>Option 4 (Disabled)</DropdownItem>
            </Dropdown>
          </div>

          <div style={{ width: "250px" }}>
            <Dropdown
              label="Countries"
              placeholder="Select your country"
              variant="Primary"
              onSelectionChange={(value, label) => console.log("Selected:", value, label)}
            >
              <DropdownItem value="us">United States</DropdownItem>
              <DropdownItem value="ca">Canada</DropdownItem>
              <DropdownItem value="uk">United Kingdom</DropdownItem>
              <DropdownItem value="de">Germany</DropdownItem>
              <DropdownItem value="fr">France</DropdownItem>
              <DropdownItem value="jp">Japan</DropdownItem>
              <DropdownItem value="au">Australia</DropdownItem>
            </Dropdown>
          </div>

          <div style={{ width: "250px" }}>
            <Dropdown
              label="Error State"
              placeholder="Select an option"
              variant="Error"
              error="Please select a valid option"
              required
              onSelectionChange={(value, label) => console.log("Selected:", value, label)}
            >
              <DropdownItem value="error1">Error Option 1</DropdownItem>
              <DropdownItem value="error2">Error Option 2</DropdownItem>
            </Dropdown>
          </div>
        </InlineStack>
      </VerticalStack>
    );
  },
];

// Complex Popover Content
export const Popover_complex_content: any = Template.bind({});
Popover_complex_content.decorators = [
  () => {
    const userMenu = (
      <div style={{ padding: "8px", minWidth: "200px" }}>
        <div style={{ padding: "12px", borderBottom: "1px solid #eee", marginBottom: "8px" }}>
          <strong>John Doe</strong>
          <div style={{ fontSize: "12px", color: "#666" }}>john.doe@example.com</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <button style={{ padding: "8px 12px", border: "none", background: "none", textAlign: "left", cursor: "pointer" }}>
            Profile Settings
          </button>
          <button style={{ padding: "8px 12px", border: "none", background: "none", textAlign: "left", cursor: "pointer" }}>
            Billing
          </button>
          <button style={{ padding: "8px 12px", border: "none", background: "none", textAlign: "left", cursor: "pointer" }}>
            Support
          </button>
          <hr style={{ margin: "8px 0", border: "none", borderTop: "1px solid #eee" }} />
          <button style={{ padding: "8px 12px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#ef4444" }}>
            Sign Out
          </button>
        </div>
      </div>
    );

    const colorPicker = (
      <div style={{ padding: "16px", minWidth: "200px" }}>
        <h4 style={{ margin: "0 0 12px 0", fontSize: "14px" }}>Choose Color</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "8px" }}>
          {["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6"].map((color) => (
            <div
              key={color}
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: color,
                borderRadius: "4px",
                cursor: "pointer",
                border: "2px solid transparent",
              }}
              onClick={() => console.log("Selected color:", color)}
            />
          ))}
        </div>
      </div>
    );

    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <InlineStack gap={4} alignItems="center" justifyContent="center">
          <Popover content={userMenu} placement="bottom-end">
            <Button variant="Primary">User Menu</Button>
          </Popover>

          <Popover content={colorPicker} placement="bottom">
            <Button variant="Secondary">Color Picker</Button>
          </Popover>
        </InlineStack>
      </div>
    );
  },
];

// Responsive Popover
export const Popover_responsive: any = Template.bind({});
Popover_responsive.decorators = [
  () => {
    return (
      <div style={{ padding: "50px" }}>
        <h3>Responsive Popover</h3>
        <p>This popover adjusts its position based on viewport boundaries:</p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" }}>
          {/* Edge cases for boundary detection */}
          <Popover
            content={
              <div style={{ padding: "16px", width: "250px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Large Content</h4>
                <p style={{ margin: "0", fontSize: "14px" }}>
                  This popover has wide content that might exceed viewport boundaries.
                  The positioning system will automatically adjust to keep it visible.
                </p>
              </div>
            }
          >
            <Button variant="Tertiary" size="Small">Left Edge</Button>
          </Popover>

          <Popover
            content={
              <div style={{ padding: "16px", width: "250px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Auto Positioning</h4>
                <p style={{ margin: "0", fontSize: "14px" }}>
                  The popover automatically positions itself to stay within the viewport.
                </p>
              </div>
            }
          >
            <Button variant="Primary" size="Small">Center</Button>
          </Popover>

          <Popover
            placement="bottom-end"
            content={
              <div style={{ padding: "16px", width: "250px" }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Right Edge</h4>
                <p style={{ margin: "0", fontSize: "14px" }}>
                  This popover is positioned at the right edge and adjusts accordingly.
                </p>
              </div>
            }
          >
            <Button variant="Secondary" size="Small">Right Edge</Button>
          </Popover>
        </div>
      </div>
    );
  },
];