import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import InlineStack, { InlineStackProps } from './InlineStack';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';

const meta: Meta<InlineStackProps> = {
  title: 'Layout/InlineStack',
  component: InlineStack,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'InlineStack component arranges child elements horizontally in a flex layout with customizable spacing and alignment.',
      },
    },
  },
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5],
      description: 'Spacing between stack items',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
      description: 'Vertical alignment of items',
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Horizontal alignment of items',
    },
    wrap: {
      control: { type: 'boolean' },
      description: 'Whether items should wrap to the next line',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the stack should be full width',
    },
    centered: {
      control: { type: 'boolean' },
      description: 'Whether the stack should be centered',
    },
  },
};

export default meta;
type Story = StoryObj<InlineStackProps>;

// Demo components for showcasing
const DemoBox = ({ children, color = '#e3f2fd' }: { children: React.ReactNode; color?: string }) => (
  <div style={{
    padding: '0.5rem 1rem',
    backgroundColor: color,
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    minWidth: '60px',
    textAlign: 'center',
  }}>
    {children}
  </div>
);

export const Default: Story = {
  args: {
    gap: 2,
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </>
    ),
  },
};

export const WithButtons: Story = {
  args: {
    gap: 2,
    align: 'center',
    children: (
      <>
        <Button variant="Primary">Primary</Button>
        <Button variant="Secondary">Secondary</Button>
        <Button variant="Tertiary">Tertiary</Button>
      </>
    ),
  },
};

export const WithBadges: Story = {
  args: {
    gap: 1,
    align: 'center',
    children: (
      <>
        <Badge color='Positive'>Success</Badge>
        <Badge color='Notice'>Warning</Badge>
        <Badge color='Negative'>Error</Badge>
        <Badge color='Primary'>Info</Badge>
      </>
    ),
  },
};

export const DifferentGaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>Gap 0</h4>
        <InlineStack gap={0}>
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </InlineStack>
      </div>
      <div>
        <h4>Gap 1</h4>
        <InlineStack gap={1}>
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </InlineStack>
      </div>
      <div>
        <h4>Gap 3</h4>
        <InlineStack gap={3}>
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </InlineStack>
      </div>
      <div>
        <h4>Gap 5</h4>
        <InlineStack gap={5}>
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </InlineStack>
      </div>
    </div>
  ),
};

export const AlignmentOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>Align Start</h4>
        <InlineStack gap={2} align="start" style={{ backgroundColor: '#f5f5f5', minHeight: '80px', padding: '10px' }}>
          <DemoBox>Short</DemoBox>
          <DemoBox>Medium Content</DemoBox>
          <DemoBox>Very Long Content Item</DemoBox>
        </InlineStack>
      </div>
      <div>
        <h4>Align Center</h4>
        <InlineStack gap={2} align="center" style={{ backgroundColor: '#f5f5f5', minHeight: '80px', padding: '10px' }}>
          <DemoBox>Short</DemoBox>
          <DemoBox>Medium Content</DemoBox>
          <DemoBox>Very Long Content Item</DemoBox>
        </InlineStack>
      </div>
      <div>
        <h4>Align End</h4>
        <InlineStack gap={2} align="end" style={{ backgroundColor: '#f5f5f5', minHeight: '80px', padding: '10px' }}>
          <DemoBox>Short</DemoBox>
          <DemoBox>Medium Content</DemoBox>
          <DemoBox>Very Long Content Item</DemoBox>
        </InlineStack>
      </div>
    </div>
  ),
};

export const JustifyContentOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4>Justify Start</h4>
        <InlineStack gap={2} justifyContent="start" style={{ backgroundColor: '#f5f5f5', padding: '10px', width: '100%' }}>
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </InlineStack>
      </div>
      <div>
        <h4>Justify Center</h4>
        <InlineStack gap={2} justifyContent="center" style={{ backgroundColor: '#f5f5f5', padding: '10px', width: '100%' }}>
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </InlineStack>
      </div>
      <div>
        <h4>Justify Between</h4>
        <InlineStack gap={2} justifyContent="between" style={{ backgroundColor: '#f5f5f5', padding: '10px', width: '100%' }}>
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </InlineStack>
      </div>
      <div>
        <h4>Justify Around</h4>
        <InlineStack gap={2} justifyContent="around" style={{ backgroundColor: '#f5f5f5', padding: '10px', width: '100%' }}>
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </InlineStack>
      </div>
    </div>
  ),
};

export const WithWrapping: Story = {
  args: {
    gap: 2,
    wrap: true,
    style: { width: '300px' },
    children: (
      <>
        <DemoBox>Long Item 1</DemoBox>
        <DemoBox>Long Item 2</DemoBox>
        <DemoBox>Long Item 3</DemoBox>
        <DemoBox>Long Item 4</DemoBox>
        <DemoBox>Long Item 5</DemoBox>
        <DemoBox>Long Item 6</DemoBox>
      </>
    ),
  },
};

export const NoWrapping: Story = {
  args: {
    gap: 2,
    wrap: false,
    style: { width: '300px', overflow: 'auto' },
    children: (
      <>
        <DemoBox>Long Item 1</DemoBox>
        <DemoBox>Long Item 2</DemoBox>
        <DemoBox>Long Item 3</DemoBox>
        <DemoBox>Long Item 4</DemoBox>
        <DemoBox>Long Item 5</DemoBox>
        <DemoBox>Long Item 6</DemoBox>
      </>
    ),
  },
};

export const ResponsiveAlignment: Story = {
  args: {
    gap: 2,
    align: { sm: 'start', md: 'center', lg: 'end' },
    justifyContent: { sm: 'start', md: 'center', lg: 'between' },
    style: { backgroundColor: '#f5f5f5', padding: '10px', minHeight: '80px' },
    children: (
      <>
        <DemoBox>Responsive</DemoBox>
        <DemoBox>Alignment</DemoBox>
        <DemoBox>Example</DemoBox>
      </>
    ),
  },
};

export const Playground: Story = {
  args: {
    gap: 2,
    align: 'center',
    justifyContent: 'start',
    wrap: true,
    fullWidth: false,
    centered: false,
    children: (
      <>
        <Button variant="Primary" size="Small">Action</Button>
        <Button variant="Secondary" size="Small">Cancel</Button>
        <Badge color='Neutral'>New</Badge>
      </>
    ),
  },
};
