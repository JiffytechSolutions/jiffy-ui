import React, { useState } from "react";
import { Card, Image, Text } from "../../..";
import Draggable, { dragableArray } from "../Draggable";

export default {
  title: "Components/Draggable",
  component: Draggable,
  argTypes: {
    data: {
      description:
        "Array of Object and every object have below properties <br><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>id</td><td><code>string | number</code></td></tr><tr><td>content</td><td><code>React.ReactNode</code></td></tr></tbody></table>",
      control: {
        disable: true,
      },
    },
    containerStyle: {
      description:
        "Make layout of the draggable container ( how elements were arranged in the container)",
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
    title: "Draggable Title",
  },
  {
    id: 2,
    title: "Draggable Title",
  },
  {
    id: 3,
    title: "Draggable Title",
  },
  {
    id: 4,
    title: "Draggable Title",
  },
  {
    id: 5,
    title: "Draggable Title",
  },
  {
    id: 6,
    title: "Draggable Title",
  },
  {
    id: 7,
    title: "Draggable Title",
  },
  {
    id: 8,
    title: "Draggable Title",
  },
  {
    id: 9,
    title: "Draggable Title",
  },
  {
    id: 10,
    title: "Draggable Title",
  },
  {
    id: 11,
    title: "Draggable Title",
  },
  {
    id: 12,
    title: "Draggable Title",
  },
  {
    id: 13,
    title: "Draggable Title",
  },
  {
    id: 14,
    title: "Draggable Title",
  },
  {
    id: 15,
    title: "Draggable Title",
  },
  {
    id: 16,
    title: "Draggable Title",
  },
  {
    id: 17,
    title: "Draggable Title",
  },
  {
    id: 18,
    title: "Draggable Title",
  },
  {
    id: 19,
    title: "Draggable Title",
  },
  {
    id: 20,
    title: "Draggable Title",
  },
];
const draggableArr: dragableArray = itemsData.map((item) => ({
  content: (
    <img
      style={{ aspectRatio: 1, borderRadius: "50%" }}
      src={item.imageUrl}
      alt="img"
      width={150}
      height={150}
    />
  ),
  id: item.id,
}));

const Template = ({ ...rest }) => {
  const [data, setData] = useState(draggableArr);

  return (
    <Card>
      <Draggable
        data={data}
        onChange={(newArr) => setData(newArr)}
        animationDuration={rest.animationDuration}
        containerStyle={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      />
    </Card>
  );
};

export const Primary = Template.bind({});

// draggable vertical card
const verticalData: dragableArray = dragData.map((item) => ({
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
export const DraggableVertical = ({ ...rest }) => {
  const [data, setData] = useState(verticalData);

  return (
    <Card title="Draggable Vertical">
      <Draggable
        data={data}
        onChange={(newArr) => setData(newArr)}
        containerStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          overflowY: "auto",
          maxHeight: "600px",
          margin: "auto",
        }}
      />
    </Card>
  );
};

// draggable horizontal card
const horizontalData: dragableArray = dragData.map((item) => ({
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
export const DraggableHorizontal = ({ ...rest }) => {
  const [data, setData] = useState(horizontalData);

  return (
    <Card title="Draggable Horizontal">
      <Draggable
        data={data}
        onChange={(newArr) => setData(newArr)}
        containerStyle={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
        }}
      />
    </Card>
  );
};

//  Draggable Vertical With Images
export const DraggableVerticalWithImages = ({ ...rest }) => {
  const [data, setData] = useState(draggableArr);

  return (
    <Card title="Draggable Vertical With Images">
      <Draggable
        data={data}
        onChange={(newArr) => setData(newArr)}
        animationDuration={rest.animationDuration}
        containerStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          overflowY: "auto",
          maxHeight: "600px",
          margin: "auto",
        }}
      />
    </Card>
  );
};

// Draggable Horizontal With Images
export const DraggableHorizontalWithImages = ({ ...rest }) => {
  const [data, setData] = useState(draggableArr);
  return (
    <Card title="Draggable Horizontal With Images">
      <Draggable
        data={data}
        onChange={(newArr) => setData(newArr)}
        animationDuration={rest.animationDuration}
        containerStyle={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
        }}
      />
    </Card>
  );
};

// Draggable  Images Grid
const gridData: dragableArray = itemsData.map((item) => ({
  content: <Image src={item.imageUrl} width={200} height={200} />,
  id: item.id,
}));
export const DraggableGrid = () => {
  const [data, setData] = useState(gridData);
  return (
    <Card title="Draggable Grid">
      <Draggable
        data={data}
        onChange={(newArr) => setData(newArr)}
        containerStyle={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          overflow: "auto",
          maxHeight: "600px",
        }}
      />
    </Card>
  );
};
