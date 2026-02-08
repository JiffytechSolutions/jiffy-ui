import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import VerticalStack from './VerticalStack';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';
import Card from '../Card/Card';

const meta: Meta<typeof VerticalStack> = {
  title: 'Layout/VerticalStack',
  component: VerticalStack,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'VerticalStack component arranges child elements vertically in a flex layout with customizable spacing and alignment.',
      },
    },
  },
  argTypes: {
    // Removed 'wrap' and 'fullHeight' from argTypes because they are not valid properties for this component
    // Removed 'centered' from argTypes because it is not a valid property for this component
    // No valid argTypes for this component, so argTypes is left empty to fix the lint error.
    },
};

export default meta;
type Story = StoryObj<typeof VerticalStack>;

// Demo components for showcasing
const DemoBox = ({ children, color = '#e3f2fd', height = '60px' }: { children: React.ReactNode; color?: string; height?: string }) => (
  <div style={{
    padding: '1rem',
    backgroundColor: color,
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    textAlign: 'center',
    height: height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {children}
  </div>
);

export const Default: Story = {
  render: (args) => (
    <VerticalStack gap={2}>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </VerticalStack>
  ),
};
       

export const WithButtons: Story = {
  render: () => (
    <VerticalStack gap={2} align="center">
      <Button variant="Primary" size="Medium">Primary Action</Button>
        <Button variant="Secondary" size="Medium">Secondary Action</Button>
        <Button variant="Tertiary" size="Medium">Tertiary Action</Button>
      </VerticalStack>
    ),
  }


export const WithMixedContent: Story = {
  render: () => (
    <VerticalStack gap={3} align="stretch">
      <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>Header Section</h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>This is a header with some description</p>
        </div>
        <DemoBox color="#e8f5e8" height="80px">Content Area</DemoBox>
        <div style={{ padding: '1rem', backgroundColor: '#fff3e0', borderRadius: '4px', textAlign: 'right' }}>
          <Button variant="Primary" size="Small">Action</Button>
        </div>
      </VerticalStack>
    ),
}


export const DifferentGaps: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem' }}>
      <div style={{ flex: 1 }}>
        <h4>Gap 0</h4>
        <VerticalStack gap={0}>
          <DemoBox height="40px">Item 1</DemoBox>
          <DemoBox height="40px">Item 2</DemoBox>
          <DemoBox height="40px">Item 3</DemoBox>
        </VerticalStack>
      </div>
      <div style={{ flex: 1 }}>
        <h4>Gap 2</h4>
        <VerticalStack gap={2}>
          <DemoBox height="40px">Item 1</DemoBox>
          <DemoBox height="40px">Item 2</DemoBox>
          <DemoBox height="40px">Item 3</DemoBox>
        </VerticalStack>
      </div>
      <div style={{ flex: 1 }}>
        <h4>Gap 4</h4>
        <VerticalStack gap={4}>
          <DemoBox height="40px">Item 1</DemoBox>
          <DemoBox height="40px">Item 2</DemoBox>
          <DemoBox height="40px">Item 3</DemoBox>
        </VerticalStack>
      </div>
    </div>
  ),
};

export const AlignmentOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ flex: 1 }}>
        <h4>Align Start (Default)</h4>
        <VerticalStack gap={2} align="start" style={{ backgroundColor: '#f5f5f5', padding: '1rem', minHeight: '200px' }}>
          <DemoBox height="40px">Short</DemoBox>
          <DemoBox height="40px">Medium Content</DemoBox>
          <DemoBox height="40px">Very Long Content Item</DemoBox>
        </VerticalStack>
      </div>
      <div style={{ flex: 1 }}>
        <h4>Align Center</h4>
        <VerticalStack gap={2} align="center" style={{ backgroundColor: '#f5f5f5', padding: '1rem', minHeight: '200px' }}>
          <DemoBox height="40px">Short</DemoBox>
          <DemoBox height="40px">Medium Content</DemoBox>
          <DemoBox height="40px">Very Long Content Item</DemoBox>
        </VerticalStack>
      </div>
      <div style={{ flex: 1 }}>
        <h4>Align Stretch</h4>
        <VerticalStack gap={2} align="stretch" style={{ backgroundColor: '#f5f5f5', padding: '1rem', minHeight: '200px' }}>
          <DemoBox height="40px">Short</DemoBox>
          <DemoBox height="40px">Medium Content</DemoBox>
          <DemoBox height="40px">Very Long Content Item</DemoBox>
        </VerticalStack>
      </div>
    </div>
  ),
};

export const JustifyContentOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ flex: 1 }}>
        <h4>Justify Start (Default)</h4>
        <VerticalStack gap={2} justifyContent="start" style={{ backgroundColor: '#f5f5f5', padding: '1rem', height: '250px' }}>
          <DemoBox height="40px">Item 1</DemoBox>
          <DemoBox height="40px">Item 2</DemoBox>
          <DemoBox height="40px">Item 3</DemoBox>
        </VerticalStack>
      </div>
      <div style={{ flex: 1 }}>
        <h4>Justify Center</h4>
        <VerticalStack gap={2} justifyContent="center" style={{ backgroundColor: '#f5f5f5', padding: '1rem', height: '250px' }}>
          <DemoBox height="40px">Item 1</DemoBox>
          <DemoBox height="40px">Item 2</DemoBox>
          <DemoBox height="40px">Item 3</DemoBox>
        </VerticalStack>
      </div>
      <div style={{ flex: 1 }}>
        <h4>Justify Between</h4>
        <VerticalStack gap={2} justifyContent="between" style={{ backgroundColor: '#f5f5f5', padding: '1rem', height: '250px' }}>
          <DemoBox height="40px">Item 1</DemoBox>
          <DemoBox height="40px">Item 2</DemoBox>
          <DemoBox height="40px">Item 3</DemoBox>
        </VerticalStack>
      </div>
    </div>
  ),
};

export const FullHeight: Story = {
  render: () => (
    <VerticalStack
      gap={2}
      fullHeight
      justifyContent="between"
      style={{ border: '2px dashed #ccc', minHeight: '300px' }}
    >
      <DemoBox color="#e8f5e8">Header Content</DemoBox>
      <DemoBox color="#fff3e0">Main Content</DemoBox>
      <DemoBox color="#fce4ec">Footer Content</DemoBox>
    </VerticalStack>
  ),
};
      

export const ResponsiveAlignment: Story = {
  render: () => (
    <VerticalStack
      gap={2}
      align={{ sm: 'start', md: 'center', lg: 'end' }}
      justifyContent={{ sm: 'start', md: 'center', lg: 'between' }}
      style={{ backgroundColor: '#f5f5f5', padding: '1rem', minHeight: '250px' }}
    >
      <DemoBox>Responsive Item 1</DemoBox>
      <DemoBox>Responsive Item 2</DemoBox>
      <DemoBox>Responsive Item 3</DemoBox>
    </VerticalStack>
  ),
};

export const SidebarLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '400px', border: '1px solid #ccc', borderRadius: '8px' }}>
      {/* Sidebar */}
      <VerticalStack 
        gap={1} 
        style={{ 
          width: '200px', 
          backgroundColor: '#f8f9fa', 
          padding: '1rem',
          borderRight: '1px solid #dee2e6'
        }}
      >
        <h5 style={{ margin: '0 0 1rem 0' }}>Navigation</h5>
        <Button variant="Ghost" size="Small">Dashboard</Button>
        <Button variant="Ghost" size="Small">Projects</Button>
        <Button variant="Ghost" size="Small">Settings</Button>
        <div style={{ marginTop: 'auto' }}>
          <Badge color='Notice'>v2.1.0</Badge>
        </div>
      </VerticalStack>
      
      {/* Main content */}
      <VerticalStack gap={3} style={{ flex: 1, padding: '2rem' }}>
        <h3 style={{ margin: 0 }}>Main Content Area</h3>
        <DemoBox color="#e3f2fd" height="120px">Content Block 1</DemoBox>
        <DemoBox color="#e8f5e8" height="120px">Content Block 2</DemoBox>
      </VerticalStack>
    </div>
  ),
};

export const CardStack: Story = {
  render: () => (
    <VerticalStack gap={3} align="stretch" style={{ maxWidth: '400px' }}>
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          border: '1px solid #dee2e6', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ margin: '0 0 1rem 0' }}>Card Title 1</h4>
          <p style={{ margin: '0 0 1rem 0', color: '#666' }}>This is the first card with some content.</p>
          <Button variant="Primary" size="Small">Read More</Button>
        </div>
        
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          border: '1px solid #dee2e6', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ margin: '0 0 1rem 0' }}>Card Title 2</h4>
          <p style={{ margin: '0 0 1rem 0', color: '#666' }}>This is the second card with different content.</p>
          <Button variant="Secondary" size="Small">Learn More</Button>
        </div>
        
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          border: '1px solid #dee2e6', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ margin: '0 0 1rem 0' }}>Card Title 3</h4>
          <p style={{ margin: '0 0 1rem 0', color: '#666' }}>This is the third card completing the stack.</p>
          <Button variant="Tertiary" size="Small">View Details</Button>
        </div>
      </VerticalStack>
  ),
}

export const Playground: Story = {
  render: (args) => (
    <VerticalStack
      gap={2}
      align="center"
      justifyContent="start"
      fullHeight={false}
      centered={false}
    >
      <Button variant="Primary">Primary Button</Button>
      <Button variant="Secondary">Secondary Button</Button>
      <Badge color='Positive'>Success Badge</Badge>
      <DemoBox color="#f0f8ff">Custom Content</DemoBox>
    </VerticalStack>
  ),
};
    
