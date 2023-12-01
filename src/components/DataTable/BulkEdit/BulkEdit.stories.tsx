import React from "react";

import BulkEditStoryHelper from "./BulkEditStoryHelper";

export default {
  title: "Components/DataTable And List/BulkEdit",
  // component: BulkEdit,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=4722-255314&t=hv9tP9u88L0agClr-0",
    },
  },
  argTypes: {
    hasFixedHeader: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    isLoading: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    isResizable: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    emptyTableUi: {
      description: "Fallback UI when dataSource is empty",
      control: {
        disable: true
      }
    },
    columns: {
      description: `<table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>title<span style="color: red;">*</span></code></td>
            <td>The title of the column.</td>
            <td><code>string | React.ReactNode</code></td>
          </tr>
          <tr>
            <td><code>dataIndex</code></td>
            <td>The key of the data to display in the column.</td>
            <td><code>string</code></td>
          </tr>
          <tr>
            <td><code>key<span style="color: red;">*</span></code></td>
            <td>The unique key of the column.</td>
            <td><code>string</code></td>
          </tr>
          <tr>
            <td><code>width</code></td>
            <td>The width of the column.</td>
            <td><code>number</code></td>
          </tr>
          <tr>
            <td><code>align</code></td>
            <td>The horizontal alignment of the cell content.</td>
            <td><code>"start" | "end" | "left" | "right" | "center" | "justify" | "match-parent"</code></td>
          </tr>
          <tr>
            <td><code>fixed</code></td>
            <td>Set the direction in which it is fixed in dataTable.</td>
            <td><code><code>left | right</code></code></td>
          </tr>
          <tr>
            <td><code>sortable</code></td>
            <td>An object containing a function to use for sorting the column.</td>
            <td>{<br><code>comparator: (a: any, b: any, order: any) => number</code> <br> <code> onSort : (columnWhichIsClicked : ColumnI , order : 'asec' | 'desc') => void;</code><br>}</td>
          </tr>
          <tr>
            <td><code>render</code></td>
            <td>A function to customize the rendering of the cell content.</td>
            <td><code>(item: any) => React.ReactNode</code></td>
          </tr>
        </tbody>
      </table>`,
      control: {
        type: "text",
        disable: true,
      },
      table: {
        type: { summary: 'ColumnI[]' },
      },
    },
    dataSource: {
      description: `<table>
        <thead>
          <tr>
            <th colspan="2">Array of Objects</th>
          </tr>
          <tr>
            <th>Property</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>key<span style="color: red;">*</span></code></td>
            <td><code>string</code></td>
          </tr>
          <tr>
            <td><code>[any key]</code></td>
            <td><code>any</code></td>
          </tr>
        </tbody>
      </table>
      `,
      control: {
        type: "text",
        disable: true,
      },
    },
    scrollX: {
      control: {
        type: "number",
      },
      defaultValue: 0
    },

    scrollY: {
      control: {
        type: "number",
      },
      defaultValue: 0
    },
    hasHeader: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    rowSelection: {
      description: `<table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>multi</code></td>
            <td><code>Boolean</code></td>
            <td>Whether to enable multiple row selection or not</td>
            <td><code>true</code></td>
          </tr>
          <tr>
            <td><code>onSelectChange</code></td>
            <td>
              <code>(newSelectedKeysObj : {dataSourceKey : currentState (i,e :- "true" | "false" | 'indeterminate) , ...}) => void</code> <br><br>
              Note <span style="color: red;">*</span> in case of<code>multi === false </code> in <code>newSelectedKeysObj</code> have only single key value pair and value can only be <code>boolean</code>
            </td>
            <td>Callback function that will be called when the selected rows change</td>
            <td><code>() => {}</code></td>
          </tr>
          <tr>
            <td><code>selectedRowKeys</code></td>
            <td>
              Object <code>{dataSourceKey : currentState (i,e :- "true" | "false" | 'indeterminate) , ...}</code><br><br>
              Note <span style="color: red;">*</span> in case of<code>multi === false </code> in <code>selectedRowKeys</code> Obj have only single key value pair and value can only be <code>boolean</code>
            </td>
            <td>An object representing the keys of the currently selected rows</td>
            <td><code>{}</code></td>
          </tr>
        </tbody>
      </table>
      `,
      control: {
        type: "text",
        disable: true,
      },
    },
    expandable: {
      description: `<table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>expandedRowRender<span style="color: red;">*</span></code></td>
            <td><code>(item: dataSource-obj-which-was-clicked) =&gt; React.ReactNode</code></td>
            <td>A function that returns the React node to render as the expanded content of the row when the row is expanded.</td>
          </tr>
          <tr>
            <td><code>rowExpandable</code></td>
            <td><code>(item: dataSource-obj-which-was-clicked) =&gt; boolean</code></td>
            <td>An optional function that determines whether a row is expandable or not. If this function is not provided, all rows will be expandable by default.</td>
          </tr>
        </tbody>
      </table>`,
      control: {
        type: "text",
        disable: true,
      },
    },
    pagination: {
      control: {
        type: "text",
        disable: true,
      },
    },
    customClass: {
      description: 'Add custom class',
      control: {
        type: 'text'
      },
      defaultValue: 'custom_class'
    },

  },
};




const Template = ({ ...rest }) => {
  return <BulkEditStoryHelper />
}

export const Primary: any = Template.bind({})