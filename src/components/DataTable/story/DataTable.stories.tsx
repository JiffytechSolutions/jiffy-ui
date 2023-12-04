import React, { useEffect, useMemo, useState } from "react";
import { Card } from "../../Card";
import Pagination from "../../Pagination/Pagination";
import { dataSource } from "./DataSource";
import DataTable, { columnI } from "../DataTable";
import TemplateColumns from "./TemplateColumns";
import DataTableDoc from "../Document/DataTableDoc";
import Text from "../../Text/Text";
import { FlexLayout } from "../../FlexLayout";
import { NoProducts } from "../../../illustrations";

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
    isFixedHeader: {
      description: `Make Table Header Sticky to top. <br> Note<span style="color: red;">*</span> when tableHeader is FIxed then scrollX should be set`,
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    isLoading: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    isResizable: {
      description: "Make DataTable columns Resizable",
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
      description: `Give the minimum width to the table ( in what screen size the table should scroll). <br> Note<span style="color: red;">*</span> when tableHeader is FIxed then scrollX should be set`,
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
    stickyScrollBar: {
      description: 'Make horizontal scrollbar stick to the bottom',
      control: {
        type: "boolean",
      },
      defaultValue: true,
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
    width: 100,
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
      // scrollY={200}
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
        columns={primaryColumns.slice(0, 3)}
        scrollX={rest.scrollX || 700}
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
        dataSource={[...dataSource, ...dataSource]}
        columns={primaryColumns}
        scrollX={900}
        isFixedHeader={true}
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
      {/* <FlexLayout> */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores assumenda reiciendis porro expedita. Consectetur labore iste quidem eum modi a voluptate eligendi minus sint. Quasi ipsam dicta temporibus possimus similique dolorem praesentium ratione? Quam incidunt vitae, cum quaerat qui dolores sint iste eius temporibus cupiditate est amet voluptas adipisci suscipit! Vel in aperiam sapiente dolorem facere consequuntur nisi possimus ad architecto earum alias tempora, enim nobis deleniti nesciunt quis placeat. Eos, libero consequatur voluptatum magnam numquam odit dolores. Numquam doloribus deserunt doloremque? Tenetur ullam non nesciunt, aliquid rerum culpa laboriosam quasi et autem magnam pariatur? Facere repellat maxime recusandae? At repellat ipsam deleniti non harum aut iste rerum dignissimos quas laboriosam. Nemo voluptas quasi maxime hic deserunt ex eaque blanditiis ea adipisci. Ratione sed ad recusandae, iusto quidem nulla nemo, quod placeat esse saepe ipsa. Odio, dicta impedit? Blanditiis tempore est recusandae nostrum autem pariatur eligendi nesciunt ab atque amet odio, et rerum delectus maiores quae dignissimos cumque dolorum porro doloribus commodi illo. Repellendus quae, quaerat officia voluptatibus, velit doloremque incidunt numquam ex accusantium ratione consequatur quia eum quidem placeat tempore et autem, explicabo magni? In, dolore facere iusto voluptates, dolorem ducimus hic doloribus rem aperiam iure assumenda laborum debitis ipsum natus ipsam a quae quos modi inventore. Iusto ducimus dolore corrupti illo magni deleniti qui. Modi obcaecati reprehenderit magnam dignissimos vitae iure, veniam molestias asperiores. Animi tempore tempora aliquid accusantium amet sequi sapiente alias eligendi, incidunt fugiat nihil suscipit quod deleniti! Maiores delectus eligendi voluptatem, doloremque itaque temporibus. Iste, similique consectetur dolorum ab veritatis unde cum? Tempore nesciunt debitis officia voluptatibus, maiores fuga natus deleniti enim corporis qui aut architecto, laudantium error perspiciatis, pariatur culpa? Amet quae odit quos non repellendus labore consequuntur enim incidunt, blanditiis, qui deserunt eius iure fugiat. Unde laudantium et nihil ex nostrum itaque excepturi nemo quae ut nobis! Optio totam, facilis corporis quia praesentium dignissimos nulla quod, placeat iusto iste provident ullam, sed minima. Esse dolorem cumque voluptas vel dolores dicta provident soluta placeat saepe fugit porro, numquam quas totam aspernatur eius sapiente rem similique architecto voluptates aliquam, eligendi minus repellendus explicabo eos? Unde nobis velit deserunt dicta! Dicta architecto inventore dignissimos quasi rerum hic eligendi aliquid, alias maiores, exercitationem culpa! Numquam, vero magnam itaque, corrupti ad necessitatibus corporis voluptas perspiciatis, eligendi quam sapiente labore consectetur eveniet quidem vitae aliquid accusamus voluptate facilis esse rem odio non nam officia. Tempora temporibus at sequi unde, obcaecati amet odit quod voluptatem culpa porro impedit dicta, ducimus voluptas aspernatur aliquam molestiae maxime eum officiis esse! Quae atque quibusdam sit, quod accusantium ad distinctio minus. Expedita, optio sit exercitationem nisi blanditiis consequuntur, maxime facere id porro aut eos eaque quasi aspernatur dolor minus alias, assumenda provident reprehenderit perspiciatis? Vel cupiditate voluptates consequuntur. Qui consequuntur non architecto id vel fugit nam sapiente, voluptates, ad, laborum sed ea ducimus aperiam saepe veritatis nemo. Neque sunt ea quaerat enim doloremque molestias blanditiis dolorum voluptatem, consectetur ducimus? Velit, ea culpa. Quo totam repudiandae possimus, maiores numquam vel voluptate illum necessitatibus nihil!</p>
      <DataTable
        {...rest}
        dataSource={[...dataSource, ...dataSource]}
        columns={primaryColumns}
        isFixedHeader={true}
        scrollX={960}
      />
      {/* </FlexLayout> */}
    </Card>
  );
}

export const DataTableWithScrollBarSitckyAtBottom = ({ ...rest }) => {
  return <DataTable
    columns={TemplateColumns}
    isFixedHeader
    stickyScrollBar
    scrollX={2000}
    dataSource={Array(50).fill(0)}
    pagination={<Pagination
      type="fullLength"
      currentPage={1}
      totalitem={50}
      onPageChange={() => { }}
      onEnter={() => { }}
      onPrevious={() => { }}
      onNext={() => { }}
      onCountChange={() => { }}
      countPerPage={50}
    />}
  />
}

export const DataTableWithRowSelectionMulti: any = ({ ...rest }) => {
  return (
    <Card>
      <DataTable
        {...rest}
        scrollX={1000}
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
        scrollX={1000}
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

export const ResizableDataTable: any = ({ ...rest }) => {

  return <DataTable
    isResizable
    columns={TemplateColumns}
    scrollX={1000}
    dataSource={TemplateDataSource()}
  />
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
        scrollX={2000}
        isFixedHeader
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

  const TemplateColumnsT: columnI[] = [{
    title: "Sr No",
    key: "key",
    dataIndex: 'key',
    fixed: 'left',
    render: (data: any) => <>
      <FlexLayout spacing="mediumLoose" direction="vertical">
        {data + 1}
        {/* <Select
          options={[{ label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }]}
          value={selectValue[data]}
          onChange={(e) => handelSelectChangeN(data, e)}
        />
        <RadioGroup
          options={[{ label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }]}
          value={selectValue[data]}
          onChange={(e) => handelSelectChangeN(data, e)}
          direction="horizontal"
        /> */}
      </FlexLayout>
    </>
  }, ...TemplateColumns]

  console.log(selectedRowKey , "svmkdsmvmsa;ldv" , currentSelectedRowKeys)

  return (
    <Card>
      <DataTable
        {...rest}
        scrollX={1300}
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
            totalitem={60}
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

export const DataTableEmptyBody: any = ({ ...rest }) => {
  return (
    <Card>
      <DataTable
        {...rest}
        dataSource={[]}
        columns={primaryColumns}
        emptyTableUi={(
          <div style={{
            marginBottom : "4rem"
          }}>
            <div style={{
              margin : "4rem auto 2rem auto",
              width : "fit-content"
            }}><NoProducts /></div>
            <Text alignment="center" fontweight="bolder" type="T-4">No Data Found !!</Text>
          </div>
        )} />
    </Card>
  );
}

export function Documentation() {
  return <DataTableDoc />;
}