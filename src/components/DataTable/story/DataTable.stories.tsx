import React, { useEffect, useMemo, useState } from "react";
import { Card } from "../../Card";
import Pagination from "../../Pagination/Pagination";
import { dataSource } from "./DataSource";
import DataTable, { columnI } from "../DataTable";
import TemplateColumns from "./TemplateColumns";
import { StoryContext } from '@storybook/react';
import DataTableDoc from "../Document/DataTableDoc";
import Text from "../../Text/Text";
import { RadioGroup, Select } from "../../Form";
import { FlexLayout } from "../../FlexLayout";

export default {
  title: "Components/DataTable And List/DataTable",
  component: DataTable,
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

const primaryColumns: columnI[] = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    fixed: "left",
    // width: 100,
    sortable: {
      // comparator: (a: any, b: any, order: any) => {
      //   return order === "asec" ? a - b : b - a;
      // },
      onSort: (item: columnI, order: "asec" | 'desc') => {
        console.log("item => ", item, "order => ", order)
      }
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (item: any) => {
      return <Text>{item}</Text>;
    },
    width:200,
    sortable: {
      comparator: (a: any, b: any, order: any) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return order === "asec" ? a.localeCompare(b) : b.localeCompare(a);
      },
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    // width: 300,
    render: (item: any) => {
      return <Text>{item}</Text>;
    },
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: 200,
    render: (item: any) => {
      return <Text>{item}</Text>;
    },
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
    fixed: "right",
    render: (item: any) => {
      return <a href={`http://${item}`}>{item}</a>;
    },
  },
];

interface InternalDataTableI {
  parent: { key: React.Key; state: boolean | "indeterminate" };
  selectedRowKey?: any;
  onSelectChange?: (newSelectedRow: any) => void;
}

const InternalDataTable = ({
  parent,
  selectedRowKey,
  onSelectChange,
}: InternalDataTableI) => {
  const [dataSource, setDataSource] = useState<any>([]);
  const [loading, setLoading] = useState(false)
  const columns = [
    {
      title: "User Id",
      dataIndex: "userId",
      key: "UserId",
    },
    {
      title: "Post Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
  ];
  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${parent.key}`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false)
        res.map((item: any) => (item.key = item.id));
        setDataSource([...res]);
        if (!selectedRowKey) {
          let t: any = {};
          res.map((item: any) => (t[item.key] = parent.state));
          if (onSelectChange) onSelectChange(t);
        }
      });
  }, []);

  return (
    <DataTable
      isLoading={loading}
      scrollY={200}
      dataSource={dataSource}
      columns={columns}
      rowSelection={{
        selectedRowKeys: selectedRowKey,
        onSelectChange: onSelectChange,
      }}
      hasHeader
    />
  );
};

const Template = ({ ...rest }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>({});
  const [dataSourceT, setDataSourceT] = useState<any[]>([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let seleRowKey: any = {};
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        json.map((item: any) => {
          item.key = item.id;
          seleRowKey[item.id] = { state: false, children: false };
        });
        setLoading(false)
        setSelectedRowKeys(seleRowKey);
        setDataSourceT([...json]);
      });
  }, []);

  const selKeysObj = (obj: any) => {
    let t: any = {};
    Object.keys(obj).map((i) => {
      t[i] = obj[i].state;
    });
    return t;
  };

  const changeChildren = (key: any, obj: any) => {
    selectedRowKeys[key].children = obj;
    if (Object.values(obj).every((i) => i === true))
      selectedRowKeys[key].state = true;
    else if (Object.values(obj).every((i) => i === false))
      selectedRowKeys[key].state = false;
    else selectedRowKeys[key].state = "indeterminate";
    setSelectedRowKeys({ ...selectedRowKeys });
  };

  return (
    <Card>
      <DataTable
      {...rest}
      isLoading={(loading || rest.loading)}
      dataSource={dataSourceT}
      columns={primaryColumns.slice(0,3)}
      scrollX={rest.scrollX}
      scrollY={500}
      rowSelection={{
        multi: true,
        selectedRowKeys: selKeysObj(selectedRowKeys),
        onSelectChange: (item: any) => {
          Object.keys(item).map((i) => {
            selectedRowKeys[i].state = item[i];
            if (selectedRowKeys[i].children && item[i] !== "indeterminate") {
              Object.keys(selectedRowKeys[i].children).map(
                (child) => (selectedRowKeys[i].children[child] = item[i])
              );
            }
          });
          setSelectedRowKeys({ ...selectedRowKeys });
        },
      }}
      expandable={{
        rowExpandable: (item) => ![5, 8].includes(item.key),
        expandedRowRender: (props: any) => {
          return (
            <InternalDataTable
              parent={{
                key: props.key,
                state: selectedRowKeys[props.key].state,
              }}
              selectedRowKey={selectedRowKeys[props.key].children}
              onSelectChange={(obj: any) => changeChildren(props.key, obj)}
            />
          );
        },
      }}
      pagination={
        <Pagination
          currentPage={1}
          totalitem={dataSource.length}
          onNext={() => {
            alert("next");
          }}
          countPerPage={10}
          optionPerPage={undefined}
          onPageChange={function (onPage: number): void {
            throw new Error("Function not implemented.");
          }}
        />
      }
    />
    </Card>
  );
};

export const primary: any = Template.bind({});

export const DataTableWithFixedHeader: any = ({ ...rest }) => {
  return (
    <Card>
      <DataTable
        {...rest}
        dataSource={dataSource}
        columns={primaryColumns}
        hasFixedHeader={true}
        scrollY={200}
        pagination={
          <Pagination
            currentPage={3}
            totalitem={200}
            onNext={() => { }}
            onEnter={() => {
              alert("onenter");
            }}
            countPerPage={10}
            optionPerPage={undefined}
            onPageChange={function (onPage: number): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
      />
    </Card>
  );
}

export const DataTableWithFixedColumns: any = ({ ...rest }) => {
  return (
    <Card>
      <DataTable
        {...rest}
        dataSource={dataSource}
        columns={primaryColumns}
        hasFixedHeader={true}
        scrollX={500}
      />
    </Card>
  );
}

export const DataTableWithRowSelectionMulti: any = ({ ...rest }) => {
  return (
    <Card>
      <DataTable
        {...rest}
        dataSource={dataSource}
        columns={primaryColumns}
        rowSelection={{}}
      />
    </Card>
  );
}

export const DataTableWithRowSelectionSingle: any = ({ ...rest }) => {
  const [selectedRowKey, setSelectedRowKey] = useState<any>({})
  const handelSelectChange = (item: any) => {
    setSelectedRowKey(item)
  }
  return (
    <Card>
      <DataTable
        {...rest}
        dataSource={dataSource}
        columns={primaryColumns}
        rowSelection={{
          multi: false,
          selectedRowKeys: selectedRowKey,
          onSelectChange: handelSelectChange
        }}
      />
    </Card>
  );
}


export const DataTableWithRowExpandable: any = ({ ...rest }) => {
  return (
    <Card>
      <DataTable
        {...rest}
        dataSource={dataSource.filter((i, ind) => ind > 7)}
        columns={primaryColumns}
        expandable={{
          rowExpandable: (item) => ![5, 8].includes(item.key),
          expandedRowRender: (item) => (
            <DataTable dataSource={dataSource} columns={primaryColumns} />
          ),
        }}
      />
    </Card>
  );
}


const TemplateDataSource = () => {
  let t: any = []
  Array(10).fill(0).map((i, ind) => {
    t.push({ key: ind })
  })
  return t
}

export const DataTableTemplate: any = ({ ...rest }) => {
  return (
    <Card>
      <DataTable
        {...rest}
        hasFixedHeader
        scrollY={600}
        columns={TemplateColumns}
        dataSource={TemplateDataSource()}
        rowSelection={{}}
        expandable={{
          rowExpandable: (item) => ![5, 8].includes(item.key),
          expandedRowRender: (item) => <p>{"Hello"}</p>,
        }}
      />
    </Card>
  )
}

const TemplateDataTableStory = ({ ...rest }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [selectedRowKey, setSelectedRowKey] = useState<any>({})

  const currTableData = useMemo(() => {
    const firstItemIndex = (currentPage - 1) * itemPerPage;
    const lastItemIndex = firstItemIndex + itemPerPage;
    let res: any = []
    for (let i = firstItemIndex; i < lastItemIndex; i++) {
      res.push({ key: i })
    }
    return res
  }, [currentPage, itemPerPage])

  function onCountChange(count: number) {
    setItemPerPage(count);
    setCurrentPage(1);
  }

  const onNext = () => {
    if (typeof currentPage == "string") {
      setCurrentPage(parseInt(currentPage) + 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (typeof currentPage == "string") {
      setCurrentPage(parseInt(currentPage) - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const onEnter = (page: any) => {
    setCurrentPage(page);
  };
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handelSelectChange = (newSelectedKeys: any) => {
    console.log(newSelectedKeys)
    let newKeys = { ...selectedRowKey }
    Object.keys(newSelectedKeys).map(item => {
      newKeys[item] = newSelectedKeys[item]
    })
    setSelectedRowKey({ ...newKeys })
  }

  const currentSelectedRowKeys = useMemo(() => {
    const firstItemIndex = (currentPage - 1) * itemPerPage;
    const lastItemIndex = firstItemIndex + itemPerPage;
    let res: any = {}
    for (let i = firstItemIndex; i < lastItemIndex; i++) {
      res[i] = selectedRowKey[i]
    }
    return res
  }, [selectedRowKey, currentPage, itemPerPage])

  const [selectValue, setSelectValue] = useState<{ [key: string]: string }>({})

  const handelSelectChangeN = (ind: number, value: any) => {
    setSelectValue(prev => ({ ...prev, [ind]: value }))
  }

  const TemplateColumnsT = [{
    title: "Sr No",
    key: "key",
    dataIndex: 'key',
    fixed: 'left',
    width: 200,
    render: (data: any) => <>
      <FlexLayout spacing="mediumLoose" direction="vertical">
        <Select
          options={[{ label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }]}
          value={selectValue[data]}
          onChange={(e) => handelSelectChangeN(data, e)}
        />
        <RadioGroup
          options={[{ label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }]}
          value={selectValue[data]}
          onChange={(e) => handelSelectChangeN(data, e)}
          direction="horizontal"
        />
      </FlexLayout>
    </>
  }, ...TemplateColumns]

  return (
    <Card>
      <DataTable
        {...rest}
        scrollY={rest.scrollY > 0 ? rest.scrollY : 500}
        columns={TemplateColumnsT}
        dataSource={currTableData}
        rowSelection={{
          selectedRowKeys: currentSelectedRowKeys,
          onSelectChange: handelSelectChange
        }}
        pagination={
          <Pagination
            type="fullLength"
            currentPage={currentPage}
            totalitem={5000}
            onPageChange={onPageChange}
            onEnter={onEnter}
            onPrevious={onPrevious}
            onNext={onNext}
            onCountChange={onCountChange}
            countPerPage={itemPerPage}
          />
        }
      />
    </Card>
  )
}


export const DataTableWithPaginationTemplate: any = TemplateDataTableStory.bind({})
DataTableWithPaginationTemplate.decorators = [
  (Story: any, context: StoryContext) => {
    const [controls, setControls] = useState({});
    const updateControl = (name: string, value: any) => {
      setControls((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const actions = {
      updateControl,
    };
    return <Story {...context} actions={actions} />
  }
]

export const DataTableEmptyBody: any = ({ ...rest }) => {
  return (
    <Card>
      <DataTable
        {...rest}
        dataSource={[]}
        columns={primaryColumns}
        emptyTableUi={<h1>Fallback Ui from story</h1>}
      />
    </Card>
  );
}

export function Documentation() {
  return <DataTableDoc />;
}