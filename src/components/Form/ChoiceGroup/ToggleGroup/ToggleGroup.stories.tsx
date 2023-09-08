import React, { useCallback, useState } from 'react'
import { Card } from '../../..'
import * as Icon from "../../../../storybook/Foundation/Icons/Icons";
import Toggle from '../../Toggle/Toggle';
import ToggleGroupDoc from './Document/ToggleGoupDoc';
import ToggleGroup from './ToggleGroup';

const allIcons: any = { ...Icon };

export default {
  title: 'Components/Form/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component: "<blockquote>Toggles are usually used to activate or deactivate a specific setting amongst the set.</blockquote>"
      },
    },
  },
  argTypes: {
    name: {
      description: "Name of component (Attribute)",
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
    options: {
      name: 'options',
      control: {
        disable: true
      },
      description: '<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string | React.ReactNode</code></td><td>The label for the option.</td></tr><tr><td><code>description</code></td><td><code>string | React.ReactNode</code></td><td>An optional description for the option.</td></tr><tr><td><code>value<span style="color: red;">*</span></code></td><td><code>any</code></td><td>The value of the option.</td></tr><tr><td><code>isDisable</code></td><td><code>boolean</code></td><td>To disable the option.</td></tr><tr><td><code>helpText</code></td><td><code>string</code></td><td>To show tooltip in label.</td></tr><tr><td><code>helpPosition</code></td><td><code>"left"|"right"|"top"|"bottom"</code></td><td>To set the position of tooltip</td></tr></tbody></table>'
    },
    direction: {
      description: "Direction of Toggle Buttons",
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical']
      },
      defaultValue: 'vertical'
    },
    controlStates: {
      description: "Change the status (color) of helpText section",
      control: {
        type: 'radio',
        options: ['success', 'warning', "error", "none"]
      },
      defaultValue: 'none'
    },
    title: {
      description: "Title of component",
      control: {
        type: 'text',
      },
      defaultValue: 'Title',
    },
    value: {
      description: "Value of Toggle Group",
      control: {
        type: 'text',
        disable: true,
      },
      defaultValue: 'Toggle1',
    },
    required: {
      description: "Set required true or false",
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    helpText: {
      description: "show help text below  Toggle Group",
      control: {
        type: 'text',
      },
      defaultValue: 'Error Message',
    },
    helpIcon: {
      description: "set icon beside help text",
      control: {
        type: "select",
        options: Object.keys(allIcons),
      },
      defaultValue: "Search"
    },
    customClass: {
      description: 'Add custom class',
      control: {
        type: 'text'
      },
      defaultValue: 'custom_class'
    },
  },
}


const Template = ({ ...rest }) => {
  const [grpVal, setGrpVal] = useState<any[]>([])

  const handleToggleGroupChange = useCallback((val: any[]) => {
    setGrpVal([...val])
  }, [])

  return (
    <Card>
      <ToggleGroup
        {...rest}
        title={rest.title}
        value={grpVal}
        onChange={handleToggleGroupChange}
        options={[
          {
            label: "Toggle1",
            description: "This is Toggle 1",
            value: "Toggle1",
            customClass: 'sdhfjsd',
            disable: true
          },
          {
            label: "Toggle2",
            description: "This is Toggle 1",
            value: "Toggle2"
          },
          {
            label: "Toggle3",
            description: "This is Toggle 1",
            value: "Toggle3"
          },
        ]}
      />
    </Card>
  )
}

export const Primary = Template.bind({})

export const ToggleGroupWithTitle: any = Template.bind({})
ToggleGroupWithTitle.decorators = [
  () => {
    const [grpVal, setGrpVal] = useState<any[]>([''])
    const handleToggleGroupChange = useCallback((val: any[]) => {
      setGrpVal([...val])
    }, [])
    return (
      <Card>
        <ToggleGroup
          title={'Titlee'}
          value={grpVal}
          onChange={handleToggleGroupChange}
          options={[
            {
              label: "Toggle1",
              description: "This is Toggle 1",
              value: "Toggle1"
            },
            {
              label: "Toggle2",
              description: "This is Toggle 1",
              value: "Toggle2"
            },
            {
              label: "Toggle3",
              description: "This is Toggle 1",
              value: "Toggle3",
              helpText: "hello",
              helpPosition: "bottom"
            },
          ]}
        />
      </Card>
    )
  }
]

export const ToggleGroupWithDefaultSelect: any = Template.bind({})
ToggleGroupWithDefaultSelect.decorators = [
  () => {
    const [grpVal, setGrpVal] = useState<any[]>(['Toggle2'])
    const handleToggleGroupChange = useCallback((val: any[]) => {
      setGrpVal([...val])
    }, [])
    return (
      <Card>
        <ToggleGroup
          title={'Tittle'}
          value={grpVal}
          onChange={handleToggleGroupChange}
          options={[
            {
              label: "Toggle1",
              description: "This is Toggle 1",
              value: "Toggle1"
            },
            {
              label: "Toggle2",
              description: "This is Toggle 1",
              value: "Toggle2"
            },
            {
              label: "Toggle3",
              description: "This is Toggle 1",
              value: "Toggle3"
            },
          ]}
        />
      </Card>
    )
  }
]



export const ToggleGroupWithError: any = Template.bind({})
ToggleGroupWithError.decorators = [
  () => {
    const [grpVal, setGrpVal] = useState<any[]>([''])
    const handleToggleGroupChange = useCallback((val: any[]) => {
      setGrpVal([...val])
    }, [])
    return (
      <Card>
        <ToggleGroup
          title={'Titlee'}
          value={grpVal}
          onChange={handleToggleGroupChange}
          helpText={'This a Error Message'}
          controlStates="error"
          options={[
            {
              label: "Toggle1",
              description: "This is Toggle 1",
              value: "Toggle1"
            },
            {
              label: "Toggle2",
              description: "This is Toggle 1",
              value: "Toggle2"
            },
            {
              label: "Toggle3",
              description: "This is Toggle 1",
              value: "Toggle3"
            },
          ]}
        />
      </Card>
    )
  }
]
//with tooltip
export const ToggleGroupWithTooltip: any = Template.bind({})
ToggleGroupWithTooltip.decorators = [
  () => {
    const [grpVal, setGrpVal] = useState<any[]>([''])
    const handleToggleGroupChange = useCallback((val: any[]) => {
      setGrpVal([...val])
    }, [])
    return (
      <Card>
        <ToggleGroup
          title={'Title'}
          value={grpVal}
          onChange={handleToggleGroupChange}
          helpText={'This a Error Message'}
          controlStates="error"
          options={[
            {
              label: "Toggle1",
              description: "This is Toggle 1",
              value: "Toggle1"
            },
            {
              label: "Toggle2",
              description: "This is Toggle 1",
              value: "Toggle2",
              helpText: "Text goes here",
              helpPosition: "right"
            },
          ]}
        />
      </Card>
    )
  }
]
export function Documentation() {
  return (
    <ToggleGroupDoc />
  );
}