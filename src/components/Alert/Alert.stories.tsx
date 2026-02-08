import React from "react";
import FlexLayout from "../FlexLayout/FlexLayout";
import Alert from "./Alert";
import VerticalStack from "../VerticalStack/VerticalStack";
import InlineStack from "../InlineStack/InlineStack";

const emphasis = ["Subtle", "Intense"];
const variants = ["default", "success", "error", "warning", "info"];

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Alert title",
      control: {
        type: "text",
      },
      defaultValue: "Alert Title",
    },
    children: {
      description: "Alert message content",
      control: {
        type: "text",
      },
      defaultValue: "This is an alert message.",
    },
    variant: {
      description: "Select variant",
      control: {
        type: "radio",
        options: variants,
      },
      defaultValue: "default",
    },
    emphasis: {
      description: "Select emphasis",
      control: {
        type: "radio",
        options: emphasis,
      },
      defaultValue: "Subtle",
    },
  },
  args: {
    title: "Alert Title",
    children: "This is an alert message.",
    variant: "default",
    emphasis: "Subtle",
  }
};

const Template = ({ ...rest }) => {
  return (
    <Alert
      title={rest.title}
      variant={rest.variant}
      emphasis={rest.emphasis}
      onDismiss={rest.onDismiss ? () => alert("Alert dismissed!") : undefined}
      primaryAction={rest.primaryAction}
      secondaryAction={rest.secondaryAction}
    >
      {rest.children}
    </Alert>
  );
};

export const Primary = Template.bind({});

// Alert with multiple variants
export const Alert_with_multiple_variants: any = Template.bind({});
Alert_with_multiple_variants.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <Alert variant="default" title="Default Alert">
          This is a default alert message.
        </Alert>
        <Alert variant="success" title="Success Alert">
          This is a success alert message.
        </Alert>
        <Alert variant="error" title="Error Alert">
          This is an error alert message.
        </Alert>
        <Alert variant="warning" title="Warning Alert">
          This is a warning alert message.
        </Alert>
        <Alert variant="info" title="Info Alert">
          This is an info alert message.
        </Alert>
      </VerticalStack>
    );
  },
];

// Alert with multiple emphasis levels
export const Alert_with_emphasis_levels: any = Template.bind({});
Alert_with_emphasis_levels.decorators = [
  () => {
    return (
      <VerticalStack gap={4} align={"stretch"}>
        <VerticalStack gap={2} align={"stretch"}>
          <h3>Subtle Emphasis</h3>
          <VerticalStack gap={4} align={"stretch"}>
            <Alert variant="success" emphasis="Subtle" title="Subtle Success">
              This is a subtle success alert.
            </Alert>
            <Alert variant="error" emphasis="Subtle" title="Subtle Error">
              This is a subtle error alert.
            </Alert>
          </VerticalStack>
        </VerticalStack>
        <VerticalStack gap={2} align={"stretch"}>
          <h3>Intense Emphasis</h3>
          <VerticalStack gap={4} align={"stretch"}>
            <Alert variant="success" emphasis="Intense" title="Intense Success">
              This is an intense success alert.
            </Alert>
            <Alert variant="error" emphasis="Intense" title="Intense Error">
              This is an intense error alert.
            </Alert>
          </VerticalStack>
        </VerticalStack>
      </VerticalStack>
    );
  },
];

// Dismissible alerts
export const Alert_with_dismiss_action: any = Template.bind({});
Alert_with_dismiss_action.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <Alert 
          variant="default"
          title="Dismissible Default Alert"
          onDismiss={() => alert("Default alert dismissed!")}
        >
          You can dismiss this default alert by clicking the X button.
        </Alert>
        <Alert 
          variant="success"
          title="Dismissible Success Alert"
          onDismiss={() => alert("Success alert dismissed!")}
        >
          You can dismiss this success alert by clicking the X button.
        </Alert>
        <Alert 
          variant="error"
          title="Dismissible Error Alert"
          onDismiss={() => alert("Error alert dismissed!")}
        >
          You can dismiss this error alert by clicking the X button.
        </Alert>
      </VerticalStack>
    );
  },
];

// Alerts with actions
export const Alert_with_primary_and_secondary_actions: any = Template.bind({});
Alert_with_primary_and_secondary_actions.decorators = [
  () => {
    return (
      <VerticalStack gap={4}>
        <Alert 
          variant="warning"
          title="Update Available"
          primaryAction={{
            children: "Update Now",
            onClick: () => alert("Update clicked!"),
          }}
          secondaryAction={{
            children: "Later",
            onClick: () => alert("Later clicked!"),
          }}
        >
          A new version is available. Would you like to update now?
        </Alert>
        
        <Alert 
          variant="error"
          title="Connection Failed"
          primaryAction={{
            children: "Retry",
            onClick: () => alert("Retry clicked!"),
          }}
          secondaryAction={{
            children: "Get Help",
            variant: "Link",
            onClick: () => alert("Help clicked!"),
          }}
        >
          Unable to connect to the server. Please try again.
        </Alert>
        
        <Alert 
          variant="success"
          title="Task Completed"
          onDismiss={() => alert("Alert dismissed!")}
          primaryAction={{
            children: "View Details",
            onClick: () => alert("View details clicked!"),
          }}
        >
          Your task has been completed successfully.
        </Alert>
      </VerticalStack>
    );
  },
];