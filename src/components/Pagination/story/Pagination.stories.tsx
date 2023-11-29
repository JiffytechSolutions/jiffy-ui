import React, { useMemo, useState } from "react";
import { Button, Card, FlexLayout, ToolTip } from "../..";
import { AlertCircle } from "../../../storybook/Foundation/Icons/Icons";
import DataTable from "../../DataTable/DataTable";
import PaginationDoc from "../Document/PaginationDoc";
import Pagination from "../Pagination";
import { dataSource } from "./Data";

export default {
  title: "Components/Navigation/Pagination",
  component: Pagination,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-3.0-(Production)?node-id=6026-285231&t=tzMhm7j5DhR6wij0-0",
    },
    docs: {
      description: {
        component:
          "<div style='margin-top: 15px;'><h4 class='Paragraph  inte__text--light none inte__font--normal inte__Paragraph--font--large'>Pagination let users navigate through a paged group of ordered items.  This component provides direct access to the previous and next content item, and also displays the user's location.</h4><blockquote>Pagination enables better product searching and cataloging.</blockquote></div>",
      },
    },
  },

  argTypes: {
    totalitem: {
      description: "Total number of data items",
      control: {
        type: "number",
      },
      defaultValue: 1000,
    },
    type: {
      description: "Here two type pagination",
      control: {
        type: "radio",
        options: ["navButton", "fullLength"],
      },
      defaultValue: "fullLength",
    },
    currentPage: {
      description: "set current page",
      control: {
        type: "number",
      },
      defaultValue: 1,
    },
    onNext: {
      description: "onNext function click button then move next page",
      control: {
        disable: true,
      },
    },
    countPerPage: {
      description: "set count of page",
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
    optionPerPage: {
      description: `<div><strong>Simple Array of objects:-</strong></div><i>Accepted key value pairs:</i><table bgcolor="#f5f5f5"><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>label</td><td>label(String)</td></tr><tr><td>value</td><td>value(String | Number)</td></tr></tbody></table>`,
      control: {
        type: "array",
      },
      defaultValue: [
        { label: "10", value: 10 },
        { label: "15", value: 15 },
        { label: "25", value: 25 },
        { label: "30", value: 30 },
        { label: "40", value: 40 },
        { label: "45", value: 45 },
        { label: "50", value: 50 },
        { label: "55", value: 55 },
        { label: "60", value: 60 },
        { label: "65", value: 65 },
        { label: "70", value: 70 },
        { label: "75", value: 75 },
        { label: "80", value: 80 },
        { label: "85", value: 85 },
        { label: "90", value: 90 },
        { label: "95", value: 95 },
        { label: "100", value: 100 },
      ],
    },
    onPrevious: {
      description: "onPrevious function click button then move previous page",
      control: {
        disable: true,
      },
    },
    onCountChange: {
      description: "This function count total number of page",
      control: {
        disable: true,
      },
    },
    siblingCount: {
      table: {
        disable: true,
      },
    },
    customClass: {
      description: "Add extra class in pagination",
      control: {
        disable: true,
      },
    },
    onPageChange: {
      description: "This sets number of items to show per page",
      control: {
        disable: true,
      },
    },
  },
};
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (item: any) => {
      return (
        <ToolTip
          activator={<Button icon={<AlertCircle />} type="outlined" />}
          direction="right"
          helpText={
            <FlexLayout direction="vertical" spacing="mediumLoose">
              <React.Fragment>
                Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu
                is going
              </React.Fragment>
              <FlexLayout halign="fill" valign="center">
                <Button
                  content="Less More"
                  onClick={() => alert("Less More Clicked")}
                  type="dangerPlain"
                />
                <Button
                  content="Show More"
                  onClick={() => alert("Show More Clicked")}
                  type="textButton"
                />
              </FlexLayout>
            </FlexLayout>
          }
          isOpen={false}
        />
      );
    },
  },
];
const Template = ({ ...rest }) => {
  const [currentPage, setCurrentPage] = useState<number>(rest.currentPage);
  const [countPerPage, setCountPerPage] = useState(rest.countPerPage);

  return (
    <Card>
      <Pagination
        type={rest.type}
        currentPage={currentPage}
        countPerPage={countPerPage}
        totalitem={rest.totalitem}
        onPageChange={(e) => setCurrentPage(e)}
        onEnter={(e) => setCurrentPage(e)}
        onPrevious={() => setCurrentPage(currentPage - 1)}
        onNext={() => setCurrentPage(currentPage + 1)}
        onCountChange={(count) => {
          setCountPerPage(count);
          setCurrentPage(1);
        }}
        optionPerPage={rest.optionPerPage}
      />
    </Card>
  );
};

export const Primary = Template.bind({});

// Pagination of types
const PaginationType = ["navButton", "fullLength"];
export const Pagination__Type: any = Template.bind({});
Pagination__Type.decorators = [
  () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [countPerPage, setCountPerPage] = useState(10);
    function onCountChange(count: number) {
      setCountPerPage(count);
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
    return (
      <Card title={"Pagination of types"}>
        <FlexLayout
          spacing="extraLoose"
          tabWidth="100"
          desktopWidth="100"
          mobileWidth="100"
        >
          {PaginationType.map((variant: any) => {
            return (
              <Card title={variant} cardType="bordered">
                <Pagination
                  type={variant}
                  currentPage={currentPage}
                  totalitem={200}
                  onPageChange={onPageChange}
                  onEnter={onEnter}
                  onPrevious={onPrevious}
                  onNext={onNext}
                  onCountChange={onCountChange}
                  countPerPage={countPerPage}
                  optionPerPage={[
                    { label: "10", value: "10" },
                    { label: "15", value: "15" },
                    { label: "20", value: "20" },
                    { label: "25", value: "25" },
                    { label: "50", value: "50" },
                  ]}
                />
              </Card>
            );
          })}
        </FlexLayout>
      </Card>
    );
  },
];

// Pagination with Table
export const Table_Width_Pagination: any = Template.bind({});
Table_Width_Pagination.decorators = [
  () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [countPerPage, setCountPerPage] = useState(10);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * countPerPage;
      const lastPageIndex = firstPageIndex + countPerPage;
      return dataSource.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, countPerPage]);

    function onCountChange(count: number) {
      setCountPerPage(count);
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

    return (
      <Card>
        <DataTable
          // scrollY={450}
          columns={columns}
          dataSource={currentTableData}
          pagination={
            <Pagination
              type="fullLength"
              currentPage={currentPage}
              totalitem={dataSource.length}
              onPageChange={onPageChange}
              onEnter={onEnter}
              onPrevious={onPrevious}
              onNext={onNext}
              onCountChange={onCountChange}
              countPerPage={countPerPage}
              optionPerPage={[
                { label: "10", value: "10" },
                { label: "15", value: "15" },
                { label: "20", value: "20" },
                { label: "25", value: "25" },
                { label: "50", value: "50" },
                { label: "60", value: "60" },
                { label: "70", value: "70" },
                { label: "80", value: "80" },
                { label: "90", value: "90" },
                { label: "100", value: "100" },
                { label: "200", value: "200" },
                { label: "300", value: "300" },
                { label: "400", value: "400" },
                { label: "500", value: "500" },
                { label: "600", value: "600" },
                { label: "700", value: "700" },
                { label: "800", value: "800" },
                { label: "900", value: "900" },
                { label: "1000", value: "1000" },
              ]}
            />
          }
        />
      </Card>
    );
  },
];

export function Documentation() {
  return <PaginationDoc />;
}
