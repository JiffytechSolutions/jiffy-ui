import React, { useState } from "react";
import { Card } from "../../..";
import SortableNew from "../SortableNew";
import SortableT, { SortableDataI } from "../SortableT";

export default {
  title: "Components/SortableNew",
  component: SortableNew,
  argTypes: {
    data: {
      description: "data is an array of object ",
      control: {
        type: true,
      },
    },
    onSortEnd: {
      description: "onSort function return changes an array",
      control: {
        type: "function",
      },
    },
    renderItem: {
      description: "renderItem inside reactNode",
      control: {
        type: "function",
      },
    },
    customClass: {
      description: "You can add extra class inside customClass props",
      control: {
        type: true,
      },
    },
  },
};

const Template = () => {
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
  return (
    <Card>
      <SortableNew
        data={itemsData}
        renderItem={(item: any, index: number) => (
          <Card title={`Card ${item.id} ${index}`} cardType="filled">
            <img
              src={item.imageUrl}
              alt="img"
              width={150}
              height={150}
              draggable={false}
            />
          </Card>
        )}
        // onSortEnd={(e) => console.log(e, "sorted data")}
        customClass="customClass"
      />
    </Card>
  );
};

export const Primary = Template.bind({});

export const NewSortableSum = ({...rest}) => {

  const [sortableData , setSortableData] = useState<SortableDataI[]>(Array(5).fill(0).map((_ , index) => ({
    id : index,
    content : <div className="soltable-item-story">{index+1}</div> as React.ReactNode
  }) ))

  return (
    <SortableT 
      data={sortableData}
      onChange={(newDataArray) => setSortableData(newDataArray)}
    />
  )
}