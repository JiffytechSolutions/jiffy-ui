import { useState } from "react";
import  Tag  from "../Tag/Tag";
import  Table  from "./Table";
import { useRowSelection } from "./useRowSelection";
import  Badge  from "../Badge/Badge";
import React from "react";

export default {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};

const Template = () => {
  const orders = [
    {
      id: "1020",
      order: "#1020",
      date: "Jul 20 at 4:34pm",
      customer: "Jaydon Stanton",
      total: "$969.44",
      paymentStatus: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
      fulfillmentStatus: <Tag>Unfulfilled</Tag>,
    },
    {
      id: "1019",
      order: "#1019",
      date: "Jul 20 at 3:46pm",
      customer: "Ruben Westerfelt",
      total: "$701.19",
      paymentStatus: <Badge emphasis="Subtile" color="Negative" size="Medium" type="Full">Failed</Badge>,
      fulfillmentStatus: <Tag>Unfulfilled</Tag>,
    },
    {
      id: "1018",
      order: "#1018",
      date: "Jul 20 at 3.44pm",
      customer: "Leo Carder",
      total: "$798.24",
      paymentStatus: <Badge emphasis="Subtile" color="Notice" size="Medium" type="Full">Wating</Badge>,
      fulfillmentStatus: <Tag>Unfulfilled</Tag>,
    },
  ];
  const tableRow = orders.map(
    (
      { id, order, date, customer, total, paymentStatus, fulfillmentStatus },
      index
    ) => (
      <Table.Row key={id} id={id}>
        <Table.Cell>
          <p>{order}</p>
        </Table.Cell>
        <Table.Cell>{date}</Table.Cell>
        <Table.Cell>{customer}</Table.Cell>
        <Table.Cell>
          <p>{total}</p>
        </Table.Cell>
        <Table.Cell>{paymentStatus}</Table.Cell>
        <Table.Cell>{fulfillmentStatus}</Table.Cell>
      </Table.Row>
    )
  );
  return (
    <Table
      headings={[
        { title: "Order" },
        { title: "Date" },
        { title: "Customer" },
        { title: "Total" },
        { title: "Payment status" },
        { title: "Fulfillment status" },
      ]}
      sortable={[false, true, false, true, false, false]}

    >
      {tableRow}
    </Table>
  );
};
export const Default = Template.bind({});

export const TableWithSelectable: any = Template.bind({});
TableWithSelectable.decorators = [
  () => {
    const orders = [
      {
        id: "1020",
        order: "#1020",
        date: "Jul 20 at 4:34pm",
        customer: "Jaydon Stanton",
        total: "$969.44",
        paymentStatus: <Tag>Paid</Tag>,
        fulfillmentStatus: <Tag>Unfulfilled</Tag>,
      },
      {
        id: "1019",
        order: "#1019",
        date: "Jul 20 at 3:46pm",
        customer: "Ruben Westerfelt",
        total: "$701.19",
        paymentStatus: <Tag>Paid</Tag>,
        fulfillmentStatus: <Tag>Unfulfilled</Tag>,
      },
      {
        id: "1018",
        order: "#1018",
        date: "Jul 20 at 3.44pm",
        customer: "Leo Carder",
        total: "$798.24",
        paymentStatus: <Tag>Paid</Tag>,
        fulfillmentStatus: <Tag>Unfulfilled</Tag>,
      },
    ];
    const { selectedRows, allRowsSelected, handleSelectionChange } =
      useRowSelection(orders);
    const tableRow = orders.map(
      (
        { id, order, date, customer, total, paymentStatus, fulfillmentStatus },
        index
      ) => (
        <Table.Row key={id} id={id} selected={selectedRows.includes(id)}>
          <Table.Cell>
            <p>{order}</p>
          </Table.Cell>
          <Table.Cell>{date}</Table.Cell>
          <Table.Cell>{customer}</Table.Cell>
          <Table.Cell>
            <p>{total}</p>
          </Table.Cell>
          <Table.Cell>{paymentStatus}</Table.Cell>
          <Table.Cell>{fulfillmentStatus}</Table.Cell>
        </Table.Row>
      )
    );
    return (
      <Table
        headings={[
          { title: "Order" },
          { title: "Date" },
          { title: "Customer" },
          { title: "Total" },
          { title: "Payment status" },
          { title: "Fulfillment status" },
        ]}
        selectable={true}
        onRowSelection={handleSelectionChange}
      >
        {tableRow}
      </Table>
    );
  },
];

export const TableWithSorting: any = Template.bind({});

TableWithSorting.decorators = [
  () => {
    const [sortedColumn, setSortedColumn] = useState<any>({
      index: 1,
      direction: "ascending",
    });
    const orders = [
      {
        id: "1020",
        order: "#1020",
        date: "Jul 20 at 4:34pm",
        customer: "Jaydon Stanton",
        total: "$969.44",
        paymentStatus: <Tag>Paid</Tag>,
        fulfillmentStatus: <Tag>Unfulfilled</Tag>,
      },
      {
        id: "1019",
        order: "#1019",
        date: "Jul 20 at 3:46pm",
        customer: "Ruben Westerfelt",
        total: "$701.19",
        paymentStatus: <Tag>Paid</Tag>,
        fulfillmentStatus: <Tag>Unfulfilled</Tag>,
      },
      {
        id: "1018",
        order: "#1018",
        date: "Jul 20 at 3.44pm",
        customer: "Leo Carder",
        total: "$798.24",
        paymentStatus: <Tag>Paid</Tag>,
        fulfillmentStatus: <Tag>Unfulfilled</Tag>,
      },
    ];
    const tableRow = orders.map(
      (
        { id, order, date, customer, total, paymentStatus, fulfillmentStatus },
        index
      ) => (
        <Table.Row key={id} id={id}>
          <Table.Cell>
            {order}
          </Table.Cell>
          <Table.Cell>{date}</Table.Cell>
          <Table.Cell>{customer}</Table.Cell>
          <Table.Cell>
            {total}
          </Table.Cell>
          <Table.Cell>{paymentStatus}</Table.Cell>
          <Table.Cell>{fulfillmentStatus}</Table.Cell>
        </Table.Row>
      )
    );
    const handleColumnSort = (index: any, direction: any) => {
      setSortedColumn({ index: index, direction: direction });
    };

    return (
      <Table
        headings={[
          { title: "Order" },
          { title: "Date" },
          { title: "Customer" },
          { title: "Total" },
          { title: "Payment status" },
          { title: "Fulfillment status" },
        ]}
        sortDirection={sortedColumn["direction"]}
        sortColumnIndex={sortedColumn["index"]}
        sortable={[true, true, false, false, true, true]}
        onSort={handleColumnSort}
      >
        {tableRow}
      </Table>
    );
  },
];
