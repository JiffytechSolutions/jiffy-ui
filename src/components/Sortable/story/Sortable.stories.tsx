import React, { useState } from "react";
import { Card, Image, Text } from "../../..";
import Sortable, { sortableArray } from "../Sortable";
import './Sortable.stories.css'

export default {
  title: "Components/Behaviour/Sortable",
  component: Sortable,
  argTypes: {
    data: {
      description:
        "Array of Object and every object have below properties <br><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>id</td><td><code>string | number</code></td></tr><tr><td>content</td><td><code>React.ReactNode</code></td></tr></tbody></table>",
      control: {
        disable: true,
      },
    },
    animationDuration: {
      description: "Duration of animation",
      control: {
        type: "number",
      },
      defaultValue: 300,
    },
    customClass: {
      description: "set customClass ",
      control: {
        type: "text",
      },
      defaultValue:"",
    },
  },
};

const itemsData = [
  { id: 1, imageUrl: "https://picsum.photos/id/254/200/300" },
  { id: 2, imageUrl: "https://picsum.photos/id/239/200/300" },
  { id: 3, imageUrl: "https://picsum.photos/id/233/200/300" },
  { id: 4, imageUrl: "https://picsum.photos/id/235/200/300" },
  { id: 5, imageUrl: "https://picsum.photos/id/231/200/300" },
  { id: 6, imageUrl: "https://picsum.photos/id/230/200/300" },
  { id: 7, imageUrl: "https://picsum.photos/id/220/200/300" },
  { id: 8, imageUrl: "https://picsum.photos/id/221/200/300" },
  { id: 9, imageUrl: "https://picsum.photos/id/222/200/300" },
  { id: 10, imageUrl: "https://picsum.photos/id/223/200/300" },
  { id: 11, imageUrl: "https://picsum.photos/id/227/200/300" },
  { id: 12, imageUrl: "https://picsum.photos/id/225/200/300" },
  { id: 13, imageUrl: "https://picsum.photos/id/255/200/300" },
  { id: 14, imageUrl: "https://picsum.photos/id/256/200/300" },
  { id: 15, imageUrl: "https://picsum.photos/id/247/200/300" },
  { id: 16, imageUrl: "https://picsum.photos/id/249/200/300" },
  { id: 17, imageUrl: "https://picsum.photos/id/250/200/300" },
  { id: 18, imageUrl: "https://picsum.photos/id/251/200/300" },
  { id: 19, imageUrl: "https://picsum.photos/id/252/200/300" },
  { id: 20, imageUrl: "https://picsum.photos/id/253/200/300" },
  { id: 21, imageUrl: "https://picsum.photos/id/237/200/300" },
];
const dragData = [
  {
    id: 1,
    title: "Sortable Title",
  },
  {
    id: 2,
    title: "Sortable Title",
  },
  {
    id: 3,
    title: "Sortable Title",
  },
  {
    id: 4,
    title: "Sortable Title",
  },
  {
    id: 5,
    title: "Sortable Title",
  },
  {
    id: 6,
    title: "Sortable Title",
  },
  {
    id: 7,
    title: "Sortable Title",
  },
  {
    id: 8,
    title: "Sortable Title",
  },
  {
    id: 9,
    title: "Sortable Title",
  },
  {
    id: 10,
    title: "Sortable Title",
  },
  {
    id: 11,
    title: "Sortable Title",
  },
  {
    id: 12,
    title: "Sortable Title",
  },
  {
    id: 13,
    title: "Sortable Title",
  },
  {
    id: 14,
    title: "Sortable Title",
  },
  {
    id: 15,
    title: "Sortable Title",
  },
  {
    id: 16,
    title: "Sortable Title",
  },
  {
    id: 17,
    title: "Sortable Title",
  },
  {
    id: 18,
    title: "Sortable Title",
  },
  {
    id: 19,
    title: "Sortable Title",
  },
  {
    id: 20,
    title: "Sortable Title",
  },
];
const sortableArr: sortableArray = itemsData.map((item) => ({
  content: (
    <img
      // style={{ aspectRatio: 1, borderRadius: "0%" , minHeight:"100%" , minWidth:"100%" }}
      src={item.imageUrl}
      alt="img"
      width={150}
      height={150}

    />
  ),
  id: item.id,
}));

const tempData = itemsData.map((item) => ({
  content: (
    <Image
      customClass="template-img"
      src={item.imageUrl}
      alt="img"
      objectFit="fill"
    />
  ),
  id: item.id,
}))

const Template = ({ ...rest }) => {
  const [data, setData] = useState<sortableArray>(tempData);

  return (
    <Card>
      <Sortable
        data={data.slice(0, 9)}
        onChange={(newArr) => setData(newArr)}
        animationDuration={rest.animationDuration}
        customClass="template"
      />
    </Card>
  );
};

export const Primary = Template.bind({});

// Sortable vertical card
const verticalData: sortableArray = dragData.map((item) => ({
  content: (
    <Card title={item.title + " " + item.id}>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iste
        libero asperiores velit possimus. Ab fugiat veniam possimus perspiciatis
        qui id voluptates magnam nemo quos aspernatur, tenetur, consequatur
        minima est?
      </Text>
    </Card>
  ),
  id: item.id,
}));
export const SortableVertical = ({ ...rest }) => {
  const [data, setData] = useState(verticalData);

  return (
    <Card title="Sortable Vertical">
      <Sortable
        data={data}
        onChange={(newArr) => setData(newArr)}
        customClass="sortableVertical"
      />
    </Card>
  );
};

// Sortable horizontal card
const horizontalData: sortableArray = dragData.map((item) => ({
  content: (
    <Card title={item.title + " " + item.id}>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro iste
        libero asperiores
      </Text>
      <Image
        src="https://picsum.photos/id/251/200/300"
        height={150}
        width={150}
      />
    </Card>
  ),
  id: item.id,
}));
export const SortableHorizontal = ({ ...rest }) => {
  const [data, setData] = useState(horizontalData);

  return (
    <Card title="Sortable Horizontal">
      <Sortable
        data={data}
        onChange={(newArr) => setData(newArr)}
        customClass="sortableHorizontal"
      />
    </Card>
  );
};

//  Sortable Vertical With Images
export const SortableVerticalWithImages = ({ ...rest }) => {
  const [data, setData] = useState(sortableArr);

  return (
    <Card title="Sortable Vertical With Images">
      <Sortable
        data={data}
        onChange={(newArr) => setData(newArr)}
        animationDuration={rest.animationDuration}
        customClass="sortableVertical"
      />
    </Card>
  );
};

// Sortable Horizontal With Images
export const SortableHorizontalWithImages = ({ ...rest }) => {
  const [data, setData] = useState(sortableArr);
  return (
    <Card title="Sortable Horizontal With Images">
      <Sortable
        data={data}
        onChange={(newArr) => setData(newArr)}
        animationDuration={rest.animationDuration}
        customClass="sortableHorizontal"
      />
    </Card>
  );
};

// Sortable  Images Grid
const gridData: sortableArray = itemsData.map((item) => ({
  content: <Image src={item.imageUrl} width={200} height={200} />,
  id: item.id,
}));
export const SortableGrid = () => {
  const [data, setData] = useState(gridData);
  return (
    <Card title="Sortable Grid">
      <Sortable
        data={data}
        onChange={(newArr) => setData(newArr)}
        customClass="sortableGrid"
      />
    </Card>
  );
};
