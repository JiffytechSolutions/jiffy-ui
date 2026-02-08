import React, { useState } from "react";
import { Settings, HelpCircle, Info, AlertCircle, Star, Heart, Zap, Shield } from "react-feather";
import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: 'A flexible and accessible accordion component with multiple variants, sizes, and customization options.',
      },
    },
  },
  argTypes: {
    accordionHeader: {
      description: "The header text or content for the accordion",
      control: { type: "text" },
    },
    isExpanded: {
      description: "Controls whether the accordion is expanded or collapsed",
      control: { type: "boolean" },
    },
    disabled: {
      description: "Disables the accordion interaction",
      control: { type: "boolean" },
    },
    variant: {
      description: "Visual variant of the accordion",
      control: { type: "select" },
      options: ["default", "bordered", "elevated"],
    },
   
    showChevron: {
      description: "Show or hide the chevron icon",
      control: { type: "boolean" },
    },
    chevronPosition: {
      description: "Position of the chevron icon",
      control: { type: "select" },
      options: ["left", "right"],
    },
    iconPosition: {
      description: "Position of the custom icon",
      control: { type: "select" },
      options: ["left", "right"],
    },
    withNumber: {
      description: "Show numbered indicator",
      control: { type: "boolean" },
    },
    numberPosition: {
      description: "Position of the number indicator",
      control: { type: "select" },
      options: ["left", "right"],
    },
    number: {
      description: "Number to display in the indicator",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Interactive Template
const Template: Story = {
  render: (args) => {
    const [expandedIndex, setExpandedIndex] = useState<number>(-1);
    
    const handleToggle = (index: number) => {
      setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
      <Accordion
        {...args}
        isExpanded={expandedIndex === 0}
        onClick={() => handleToggle(0)}
      />
    );
  },
};

// Default Story
export const Default: Story = {
  ...Template,
  args: {
    accordionHeader: "What is an accordion?",
    children: "An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content.",
    variant: "default",
    showChevron: true,
    chevronPosition: "right",
  },
};

// Variants Story
export const Variants = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const variants = [
    {
      variant: "default" as const,
      title: "Default Variant",
      content: "This is the default accordion variant with a simple bottom border.",
    },
    {
      variant: "bordered" as const,
      title: "Bordered Variant",
      content: "This variant has a full border around the entire accordion with rounded corners.",
    },
    {
      variant: "elevated" as const,
      title: "Elevated Variant",
      content: "This variant has a subtle shadow and elevated appearance for more prominence.",
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {variants.map((item, index) => (
        <Accordion
          key={index}
          accordionHeader={item.title}
          isExpanded={expandedIndex === index}
          onClick={() => handleToggle(index)}
          variant={item.variant}
          showChevron={true}
          chevronPosition="right"
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
};



// With Icons Story
export const WithIcons = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const accordionData = [
    {
      icon: <Settings size={16} />,
      title: "Settings & Configuration",
      content: "Learn about the various settings and configuration options available in our platform.",
      iconPosition: "left" as const,
    },
    {
      icon: <HelpCircle size={16} />,
      title: "Help & Support",
      content: "Find answers to common questions and get support when you need it.",
      iconPosition: "left" as const,
    },
    {
      icon: <Info size={16} />,
      title: "Information",
      content: "Important information and updates about our services and features.",
      iconPosition: "right" as const,
    },
    {
      icon: <AlertCircle size={16} />,
      title: "Alerts & Notifications",
      content: "Stay informed about important alerts and notifications in your account.",
      iconPosition: "right" as const,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          accordionHeader={item.title}
          isExpanded={expandedIndex === index}
          onClick={() => handleToggle(index)}
          icon={item.icon}
          iconPosition={item.iconPosition}
          variant="elevated"
          showChevron={true}
          chevronPosition="right"
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
};

// With Numbers Story
export const WithNumbers = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const accordionData = [
    {
      number: "1",
      title: "First Step",
      content: "This is the first step in the process. Complete this step to proceed to the next one.",
      numberPosition: "left" as const,
    },
    {
      number: "2",
      title: "Second Step",
      content: "This is the second step. Make sure you've completed the previous step before proceeding.",
      numberPosition: "left" as const,
    },
    {
      number: "3",
      title: "Third Step",
      content: "This is the third and final step. Complete this to finish the entire process.",
      numberPosition: "right" as const,
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          accordionHeader={item.title}
          isExpanded={expandedIndex === index}
          onClick={() => handleToggle(index)}
          withNumber={true}
          number={item.number}
          numberPosition={item.numberPosition}
          variant="bordered"
          showChevron={true}
          chevronPosition="right"
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
};

// Chevron Positions Story
export const ChevronPositions = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Accordion
        accordionHeader="Chevron on the Right (Default)"
        isExpanded={expandedIndex === 0}
        onClick={() => handleToggle(0)}
        showChevron={true}
        chevronPosition="right"
        variant="bordered"
      >
        This accordion has the chevron positioned on the right side, which is the default behavior.
      </Accordion>
      
      <Accordion
        accordionHeader="Chevron on the Left"
        isExpanded={expandedIndex === 1}
        onClick={() => handleToggle(1)}
        showChevron={true}
        chevronPosition="left"
        variant="bordered"
      >
        This accordion has the chevron positioned on the left side for a different visual layout.
      </Accordion>
      
      <Accordion
        accordionHeader="No Chevron"
        isExpanded={expandedIndex === 2}
        onClick={() => handleToggle(2)}
        showChevron={false}
        variant="bordered"
      >
        This accordion has no chevron icon, relying on other visual cues to indicate expandability.
      </Accordion>
    </div>
  );
};

// Disabled State Story
export const DisabledState = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Accordion
        accordionHeader="Enabled Accordion"
        isExpanded={false}
        onClick={() => alert('Clicked!')}
        variant="bordered"
        showChevron={true}
        chevronPosition="right"
      >
        This accordion is enabled and can be clicked to expand/collapse.
      </Accordion>
      
      <Accordion
        accordionHeader="Disabled Accordion"
        isExpanded={false}
        onClick={() => alert('This should not trigger')}
        disabled={true}
        variant="bordered"
        showChevron={true}
        chevronPosition="right"
      >
        This accordion is disabled and cannot be interacted with.
      </Accordion>
    </div>
  );
};

// Complex Example Story
export const ComplexExample = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const accordionData = [
    {
      icon: <Star size={16} />,
      number: "1",
      title: "Getting Started",
      content: (
        <div>
          <p>Welcome to our platform! Here's how to get started:</p>
          <ul>
            <li>Complete your profile setup</li>
            <li>Explore the dashboard</li>
            <li>Configure your preferences</li>
            <li>Invite team members</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Heart size={16} />,
      number: "2",
      title: "Advanced Features",
      content: (
        <div>
          <p>Discover advanced features to enhance your experience:</p>
          <ul>
            <li>Custom integrations</li>
            <li>Advanced analytics</li>
            <li>Automation workflows</li>
            <li>API access</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Zap size={16} />,
      number: "3",
      title: "Performance Tips",
      content: (
        <div>
          <p>Optimize your workflow with these performance tips:</p>
          <ul>
            <li>Use keyboard shortcuts</li>
            <li>Enable notifications</li>
            <li>Regular data backups</li>
            <li>Monitor usage metrics</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Shield size={16} />,
      number: "4",
      title: "Security & Privacy",
      content: (
        <div>
          <p>Keep your data secure with these best practices:</p>
          <ul>
            <li>Enable two-factor authentication</li>
            <li>Use strong passwords</li>
            <li>Regular security audits</li>
            <li>Data encryption</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          accordionHeader={item.title}
          isExpanded={expandedIndex === index}
          onClick={() => handleToggle(index)}
          icon={item.icon}
          withNumber={true}
          number={item.number}
          variant="elevated"
        
          
          showChevron={true}
          chevronPosition="right"
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
};

// FAQ Example Story
export const FAQExample = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const faqData = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password'. Enter your email address and follow the instructions sent to your inbox.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. Go to your account settings and click on 'Billing' to manage your subscription.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take security seriously. All data is encrypted in transit and at rest. We also comply with industry-standard security practices.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support team through email at support@example.com or through the live chat feature available in your dashboard.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.",
    },
  ];

  return (
    <div style={{ maxWidth: '800px' }}>
      <h2 style={{ marginBottom: '24px', color: 'var(--jf-naturalDark-1300)' }}>
        Frequently Asked Questions
      </h2>
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          accordionHeader={item.question}
          isExpanded={expandedIndex === index}
          onClick={() => handleToggle(index)}
          variant="bordered"
          showChevron={true}
          chevronPosition="right"
        >
          {item.answer}
        </Accordion>
      ))}
    </div>
  );
};
