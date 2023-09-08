import React, { useState } from "react";
import { Edit2, MoreVertical, Trash } from "../../../storybook/Foundation/Icons/Icons";
import ActionList from "../../ActionList/ActionList";
import Avatar from "../../Avatar/Avatar";
import AvatarGroup from "../../AvatarGroup/AvatarGroup";
import Badge from "../../Badge/Badge";
import Button from "../../Button/Button";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import { FlexLayout } from "../../FlexLayout";
import Popover from "../../Popover/Popover";
import Toggle from "../../Form/Toggle/Toggle";
import ToolTip from "../../ToolTip/ToolTip";
import { columnI } from "../DataTable";
import mainLogo from "./assets/Image.png";

const customAvatar = (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
    }}
  >
    <Avatar
      size="small"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQST2nAH6t7BtFKLO1wGtaVTrRECYmNcYeUg2aufp9dLA&usqp=CAU&ec=48600112"
    />
    <span>Data</span>
  </div>
);

const badgeGroup = (
  <FlexLayout wrap="noWrap" spacing="loose">
    <Badge size="small" type="primary">
      primary
    </Badge>
    <Badge size="small" type="secondary">
      secondary
    </Badge>
    <Badge size="small" type="error">
      error
    </Badge>
    <Badge size="small" type="warning">
      warning
    </Badge>
  </FlexLayout>
);

const Action = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      activator={
        <Button
          size="extraThin"
          icon={<MoreVertical />}
          onClick={() => {
            setOpen(!open);
          }}
          type="outlined"
        />
      }
      onClose={() => {
        setOpen(false);
      }}
      isOpen={open}
    // options={[
    //   {
    //     items: [
    //       {
    //         content: "Action 1",
    //         onClick: function noRefCheck() {},
    //       },
    //       {
    //         content: "Action 1",
    //         onClick: function noRefCheck() {},
    //       },
    //       {
    //         content: "Action 1",
    //         onClick: function noRefCheck() {},
    //       },
    //     ],
    //     title: "Action List Title",
    //   },
    // ]}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis at suscipit repellendus ea ab corrupti, aspernatur voluptatem accusantium velit, exercitationem omnis nam pariatur voluptates perspiciatis. Odit, necessitatibus explicabo. Ex at soluta autem officia mollitia non nostrum distinctio reprehenderit deserunt vitae? Natus nihil cupiditate aliquid eligendi. Laboriosam consequuntur consectetur reiciendis.
    </Popover>
  );
};



const TemplateColumns: columnI[] = [
  {
    title: "Image",
    key: "image",
    render: () => {
      return <img src={mainLogo} alt="product image" />;
    },
    fixed: "left",
  },
  {
    title: "Data",
    key: "data",
    render: () => {
      return "Data";
    },
    // fixed: "left",
  },
  {
    title: "Avatar",
    key: "avatar",
    render: () => {
      return customAvatar;
    },
  },
  {
    title: "Badge",
    key: "badge",
    render: () => {
      return (
        <Badge type="success" size="small">
          Active
        </Badge>
      );
    },
  },
  {
    title: (
      <ToolTip
        helpText={
          <FlexLayout direction="vertical" spacing="mediumLoose">
            Lorem ipsum dolaaler isseu is going Lorem ipsum dolaaler isseu is
            going Lorem ipsum dolaaler isseu
            <FlexLayout halign="fill" valign="center">
              <Button content="Less" type="dangerPlain" />
              <Button content="Show More" type="textButton" />
            </FlexLayout>
          </FlexLayout>
        }
        activator={<div>Avatar Group</div>}
      />
    ),
    width: 150,
    key: "avatar",
    render: () => {
      return (
        <AvatarGroup customClass="" maxCount={4} size="small">
          <Avatar
            size="small"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
          <Avatar
            size="small"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
          <Avatar
            size="small"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
          <Avatar
            size="small"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
          <Avatar
            size="small"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
          <Avatar
            size="small"
            image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
        </AvatarGroup>
      );
    },
  },
  {
    title: "Button Group",
    key: "btnGrp",
    render: () => {
      return (
        <ButtonGroup segmented>
          <Button
            size="extraThin"
            type="outlined"
            icon={<Edit2 size="20" color="#1c2433" />}
          />
          <Button
            size="extraThin"
            type="outlined"
            icon={<Trash size="20" color="#1c2433" />}
          />
          <Button size="extraThin" type="outlined">
            Button
          </Button>
        </ButtonGroup>
      );
    },
  },
  {
    title: "Toggle",
    key: "toggle",
    render: () => {
      return <Toggle checked={true} />;
    },
  },
  {
    title: "Badge Group",
    key: "badgeGrp",
    render: () => {
      return badgeGroup;
    },
  },
  {
    title: "Action",
    key: "Action",
    render: () => {
      return <Action />;
    },
    fixed: "right",
  },
];

export const generateTableData = (currPage:number , itemPerPage:number) => {
  const firstItemIndex = (currPage - 1)*itemPerPage;
  const lastItemIndex = firstItemIndex + itemPerPage
  const res: columnI[] = []

  for(let i = firstItemIndex ; i< lastItemIndex ; i++) {
    const currItem = TemplateColumns[i % TemplateColumns.length];
    currItem.key = `${i}`;
    res.push(currItem)
  }

  return [...res]
}

export default TemplateColumns;
