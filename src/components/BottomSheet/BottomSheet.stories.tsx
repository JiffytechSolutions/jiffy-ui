import { useState } from "react";

import TextStyle from "../TextStyle/TextStyle";
import BottomSheet from "./BottomSheet";
import Button from "../Button/Button";
import VerticalStack from "../VerticalStack/VerticalStack";
import InlineStack from "../InlineStack/InlineStack";
import React from "react";

export default {
  title: "components/BottomSheet",
  component: BottomSheet,
  parameters: { 
    docs: { 
      autodocs: true,
      description: {
        component: 'A modern bottom sheet component with drag handle, backdrop blur, and size variants.'
      }
    }, 
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the bottom sheet'
    },
    showDragHandle: {
      control: { type: 'boolean' },
      description: 'Show/hide the drag handle indicator'
    },
    preventBackdropClose: {
      control: { type: 'boolean' },
      description: 'Prevent closing when clicking on backdrop'
    },
    heading: {
      control: { type: 'text' },
      description: 'Optional heading text'
    }
  },
};

const Template = ({ size, showDragHandle, preventBackdropClose, heading, ...rest }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} children="Open Bottom Sheet" />
      <BottomSheet 
        isOpen={isOpen} 
        onDismiss={() => setIsOpen(false)} 
        heading={heading}
        size={size}
        showDragHandle={showDragHandle}
        preventBackdropClose={preventBackdropClose}
        {...rest}
      >
        <VerticalStack gap={3}>
          <TextStyle as="p">
            This is an enhanced bottom sheet component with modern design features including:
          </TextStyle>
          <ul style={{ paddingLeft: '2rem' }}>
            <li>• Drag handle indicator</li>
            <li>• Backdrop blur effect</li>
            <li>• Size variants (small, medium, large)</li>
            <li>• Improved animations with spring-like effects</li>
            <li>• Better accessibility support</li>
            <li>• Mobile responsive design</li>
          </ul>
          <TextStyle as="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </TextStyle>
        </VerticalStack>
      </BottomSheet>
    </>
  );
};

// Default story
export const Default = Template.bind({});
(Default as any).args = {
  heading: "Bottom Sheet",
  size: "medium",
  showDragHandle: true,
  preventBackdropClose: false
};

// Size variants
export const SmallSize = Template.bind({});
(SmallSize as any).args = {
  heading: "Small Bottom Sheet",
  size: "small",
  showDragHandle: true
};

export const LargeSize = Template.bind({});
(LargeSize as any).args = {
  heading: "Large Bottom Sheet",
  size: "large",
  showDragHandle: true
};

// Without drag handle
export const WithoutDragHandle = Template.bind({});
(WithoutDragHandle as any).args = {
  heading: "No Drag Handle",
  size: "medium",
  showDragHandle: false
};

// Without heading
export const WithoutHeading = Template.bind({});
(WithoutHeading as any).args = {
  size: "medium",
  showDragHandle: true
};

// Prevent backdrop close
export const PreventBackdropClose = Template.bind({});
(PreventBackdropClose as any).args = {
  heading: "Cannot Close on Backdrop Click",
  size: "medium",
  showDragHandle: true,
  preventBackdropClose: true
};

// Interactive example with form
const FormTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
  };
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)} children="Open Form" />
      <BottomSheet 
        isOpen={isOpen} 
        onDismiss={() => setIsOpen(false)} 
        heading="Contact Form"
        size="medium"
        showDragHandle={true}
      >
        <form onSubmit={handleSubmit}>
          <VerticalStack gap={3}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
              <input 
                id="name"
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ 
                  width: '100%', 
                  padding: '0.8rem', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '0.4rem',
                  fontSize: '1.4rem'
                }}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
              <input 
                id="email"
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ 
                  width: '100%', 
                  padding: '0.8rem', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '0.4rem',
                  fontSize: '1.4rem'
                }}
                placeholder="Enter your email"
              />
            </div>
            <InlineStack gap={4} justify="end">
              <Button 
                type="button" 
                onClick={() => setIsOpen(false)}
                variant="Secondary"
              >
                Cancel
              </Button>
              <Button type="submit">
                Submit
              </Button>
            </InlineStack>
          </VerticalStack>
        </form>
      </BottomSheet>
    </>
  );
};

export const WithForm = FormTemplate.bind({});

// Legacy support
export const Primary = Default;