import { useState } from "react";
import Tag from "../Tag/Tag";
import Table from "./Table";
import { useRowSelection } from "./useRowSelection";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import React from "react";
import { Heart, Star, User, Calendar, DollarSign, CreditCard } from "react-feather";

export default {
  title: "Components/Table",
  component: Table,
  parameters: { 
    docs: { autodocs: true },
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "minimal", "bordered", "striped"],
      description: "Visual variant of the table",
    },
    density: {
      control: { type: "radio" },
      options: ["comfortable", "compact", "spacious"],
      description: "Spacing density of the table",
    },
    responsive: {
      control: { type: "boolean" },
      description: "Enable responsive behavior",
    },
    stackOnMobile: {
      control: { type: "boolean" },
      description: "Stack rows as cards on mobile",
    },
    stickyHeader: {
      control: { type: "boolean" },
      description: "Make header sticky on scroll",
    },
    loading: {
      control: { type: "boolean" },
      description: "Show loading state",
    },
  },
};

// Sample data for stories
const sampleOrders = [
  {
    id: "1020",
    order: "#1020",
    date: "Jul 20 at 4:34pm",
    customer: "Jaydon Stanton",
    email: "jaydon@example.com",
    total: "$969.44",
    paymentStatus: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
    fulfillmentStatus: <Tag>Unfulfilled</Tag>,
    actions: (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button variant="Secondary" size="Small">View</Button>
        <Button variant="Primary" size="Small">Edit</Button>
      </div>
    ),
  },
  {
    id: "1019",
    order: "#1019",
    date: "Jul 20 at 3:46pm",
    customer: "Ruben Westerfelt",
    email: "ruben@example.com",
    total: "$701.19",
    paymentStatus: <Badge emphasis="Subtile" color="Negative" size="Medium" type="Full">Failed</Badge>,
    fulfillmentStatus: <Tag>Unfulfilled</Tag>,
    actions: (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button variant="Secondary" size="Small">View</Button>
        <Button variant="Primary" size="Small">Edit</Button>
      </div>
    ),
  },
  {
    id: "1018",
    order: "#1018",
    date: "Jul 20 at 3:44pm",
    customer: "Leo Carder",
    email: "leo@example.com",
    total: "$798.24",
    paymentStatus: <Badge emphasis="Subtile" color="Notice" size="Medium" type="Full">Waiting</Badge>,
    fulfillmentStatus: <Tag>Unfulfilled</Tag>,
    actions: (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button variant="Secondary" size="Small">View</Button>
        <Button variant="Primary" size="Small">Edit</Button>
      </div>
    ),
  },
  {
    id: "1017",
    order: "#1017", 
    date: "Jul 19 at 2:15pm",
    customer: "Sarah Chen",
    email: "sarah@example.com",
    total: "$1,234.56",
    paymentStatus: <Badge emphasis="Subtile" color="Positive" size="Medium" type="Full">Success</Badge>,
    fulfillmentStatus: <Tag>Fulfilled</Tag>,
    actions: (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button variant="Secondary" size="Small">View</Button>
        <Button variant="Primary" size="Small">Edit</Button>
      </div>
    ),
  },
];

const Template = (args: any) => {
  const tableRows = sampleOrders.map(
    ({ id, order, date, customer, email, total, paymentStatus, fulfillmentStatus, actions }) => (
      <Table.Row key={id} id={id}>
        <Table.Cell>{order}</Table.Cell>
        <Table.Cell>{date}</Table.Cell>
        <Table.Cell>{customer}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell align="right">{total}</Table.Cell>
        <Table.Cell>{paymentStatus}</Table.Cell>
        <Table.Cell>{fulfillmentStatus}</Table.Cell>
        <Table.Cell>{actions}</Table.Cell>
      </Table.Row>
    )
  );

  return (
    <Table
      headings={[
        { title: "Order", sortable: true },
        { title: "Date", sortable: true, align: "left" },
        { title: "Customer", sortable: true },
        { title: "Email", hideOnMobile: true, priority: 3 },
        { title: "Total", sortable: true, align: "right" },
        { title: "Payment", priority: 1 },
        { title: "Fulfillment", hideOnMobile: true, priority: 4 },
        { title: "Actions", align: "center", priority: 2 },
      ]}
      {...args}
    >
      {tableRows}
    </Table>
  );
};

export const Default = Template.bind({});
(Default as any).args = {
  variant: "default",
  density: "comfortable",
  responsive: true,
};

// Responsive Table
export const ResponsiveTable = Template.bind({});
(ResponsiveTable as any).args = {
  variant: "default",
  responsive: true,
  stackOnMobile: false,
  hideColumnsOnMobile: [3, 6], // Hide email and fulfillment columns on mobile
};

(ResponsiveTable as any).parameters = {
  docs: {
    description: {
      story: "Table that hides specific columns on mobile devices. Resize your browser to see the effect."
    }
  }
};

// Mobile Stacked Layout
export const MobileStackedTable = Template.bind({});
(MobileStackedTable as any).args = {
  variant: "bordered",
  responsive: true,
  stackOnMobile: true,
};
(MobileStackedTable as any).parameters = {
  docs: {
    description: {
      story: "Table that stacks rows as cards on mobile devices for better mobile UX."
    }
  }
};

// Table Variants
export const TableVariants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
    <div>
      <h3>Default Variant</h3>
      <Template variant="default" density="comfortable" />
    </div>
    <div>
      <h3>Minimal Variant</h3>
      <Template variant="minimal" density="comfortable" />
    </div>
    <div>
      <h3>Bordered Variant</h3>
      <Template variant="bordered" density="comfortable" />
    </div>
    <div>
      <h3>Striped Variant</h3>
      <Template variant="striped" density="comfortable" />
    </div>
  </div>
);

// Density Variants
export const DensityVariants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
    <div>
      <h3>Compact Density</h3>
      <Template variant="bordered" density="compact" />
    </div>
    <div>
      <h3>Comfortable Density (Default)</h3>
      <Template variant="bordered" density="comfortable" />
    </div>
    <div>
      <h3>Spacious Density</h3>
      <Template variant="bordered" density="spacious" />
    </div>
  </div>
);

// Sticky Header Table
export const StickyHeaderTable = Template.bind({});
(StickyHeaderTable as any).args = {
  variant: "bordered",
  stickyHeader: true,
  maxHeight: "300px",
};
(StickyHeaderTable as any).parameters = {
  docs: {
    description: {
      story: "Table with sticky header that remains visible while scrolling through content."
    }
  }
};

// Table with Selection
export const SelectableTable = () => {
  const { selectedRows, handleSelectionChange } = useRowSelection(sampleOrders);
  
  const tableRows = sampleOrders.map(
    ({ id, order, date, customer, email, total, paymentStatus, fulfillmentStatus, actions }) => (
      <Table.Row key={id} id={id} selected={selectedRows.includes(id)}>
        <Table.Cell>{order}</Table.Cell>
        <Table.Cell>{date}</Table.Cell>
        <Table.Cell>{customer}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell align="right">{total}</Table.Cell>
        <Table.Cell>{paymentStatus}</Table.Cell>
        <Table.Cell>{fulfillmentStatus}</Table.Cell>
        <Table.Cell>{actions}</Table.Cell>
      </Table.Row>
    )
  );

  return (
    <Table
      headings={[
        { title: "Order", sortable: true },
        { title: "Date", sortable: true },
        { title: "Customer", sortable: true },
        { title: "Email", hideOnMobile: true },
        { title: "Total", sortable: true, align: "right" },
        { title: "Payment" },
        { title: "Fulfillment", hideOnMobile: true },
        { title: "Actions", align: "center" },
      ]}
      selectable
      onRowSelection={handleSelectionChange}
      variant="bordered"
      responsive
    >
      {tableRows}
    </Table>
  );
};

// Table with Sorting
export const SortableTable = () => {
  const [sortedColumn, setSortedColumn] = useState({
    index: 1,
    direction: "ascending" as "ascending" | "descending",
  });

  const handleColumnSort = (index: number, direction: "ascending" | "descending") => {
    setSortedColumn({ index, direction });
  };

  const tableRows = sampleOrders.map(
    ({ id, order, date, customer, email, total, paymentStatus, fulfillmentStatus, actions }) => (
      <Table.Row key={id} id={id}>
        <Table.Cell>{order}</Table.Cell>
        <Table.Cell>{date}</Table.Cell>
        <Table.Cell>{customer}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell align="right">{total}</Table.Cell>
        <Table.Cell>{paymentStatus}</Table.Cell>
        <Table.Cell>{fulfillmentStatus}</Table.Cell>
        <Table.Cell>{actions}</Table.Cell>
      </Table.Row>
    )
  );

  return (
    <Table
      headings={[
        { title: "Order", sortable: true },
        { title: "Date", sortable: true },
        { title: "Customer", sortable: true },
        { title: "Email", sortable: false, hideOnMobile: true },
        { title: "Total", sortable: true, align: "right" },
        { title: "Payment", sortable: true },
        { title: "Fulfillment", sortable: true, hideOnMobile: true },
        { title: "Actions", sortable: false, align: "center" },
      ]}
      sortDirection={sortedColumn.direction}
      sortColumnIndex={sortedColumn.index}
      onSort={handleColumnSort}
      variant="striped"
      responsive
    >
      {tableRows}
    </Table>
  );
};

// Loading State
export const LoadingTable = Template.bind({});
(LoadingTable as any).args = {
  loading: true,
  loadingMessage: "Loading orders...",
  variant: "bordered",
};

// Empty State
export const EmptyTable = Template.bind({});
(EmptyTable as any).args = {
  emptyMessage: "No orders found",
  variant: "bordered",
};
(EmptyTable as any).decorators = [
  () => (
    <Table
      headings={[
        { title: "Order", sortable: true },
        { title: "Date", sortable: true },
        { title: "Customer", sortable: true },
        { title: "Total", sortable: true, align: "right" },
        { title: "Status" },
      ]}
      variant="bordered"
      emptyMessage="No orders to display"
    >
      {[]}
    </Table>
  ),
];

// Custom Empty State
export const CustomEmptyState = Template.bind({});
(CustomEmptyState as any).decorators = [
  () => (
    <Table
      headings={[
        { title: "Order" },
        { title: "Customer" },
        { title: "Total" },
        { title: "Status" },
      ]}
      variant="bordered"
      emptyState={
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🛒</div>
          <h3 style={{ margin: "0 0 0.5rem 0", color: "#374151" }}>No orders yet</h3>
          <p style={{ margin: "0 0 1rem 0", color: "#6b7280" }}>
            When customers place orders, they'll appear here.
          </p>
          <Button variant="Primary">Add Sample Order</Button>
        </div>
      }
    >
      {[]}
    </Table>
  ),
];
