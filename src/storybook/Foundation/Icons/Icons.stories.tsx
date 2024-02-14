import React, { useLayoutEffect, useState } from "react";
import {
  Card,
  CopyClipboard,
  TextField,
  VirtualScroll,
} from "../../../components";
import { IconsData } from "./IconsData";
import { Search } from "./Icons";
import useWindowResize from "../../../utilities/useWindowResize";
import "./Icons.css";
export default {
  title: "Foundation/Icons",
  parameters: {
    docs: {},
    design: {
      type: "figma",
      url: "https://www.figma.com/file/hjetwOUBL1uSAMRcn5MAkl/Ounce-ver3.0.2-(Production)?type=design&node-id=923-57246&mode=design&t=fJIBZJVp9olvgZpq-0",
    },
  },
  argTypes: {
    size: {
      description: "Font Size",
      control: {
        type: "radio",
        options: ["24", "20", "16"],
      },
      defaultValue: "24",
    },
    color: {
      description: "Color Name",
      control: {
        type: "color",
      },
      defaultValue: "#1c2433",
    },
    strokeWidth: {
      description: "Stroke Width (2 suites best)",
      control: {
        type: "number",
      },
      defaultValue: "2",
    },
    customClass: {
      description: "Add custom class",
      control: {
        type: "text",
      },
      defaultValue: "",
    },
  },
};
const Template = ({ ...rest }: any) => {
  const { width } = useWindowResize();
  const icons: any = IconsData({ ...rest });
  const [input, setInput] = useState("");
  const [data, setData] = useState<any>(icons);
  const [innerHeight, setInnerHeight] = useState(400);
  useLayoutEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);
  const getItemsPerRow = () => {
    if (width > 1100) return 4;
    if (width > 900) return 3;
    if (width > 500) return 2;
    return 1;
  };
  const groupData = () => {
    const itemsPerRow = getItemsPerRow();
    const groupedData = [];
    let rowIndex = 0;
    let items = input !== "" ? data : icons;
    for (let i = 0; i < items.length; i += itemsPerRow) {
      groupedData[rowIndex] = items.slice(i, i + itemsPerRow);
      rowIndex += 1;
    }
    return groupedData;
  };
  //function to search icons
  const searchIcons = (e: string) => {
    setInput(e);
    const text = e.toLowerCase();
    const filteredIcons = icons.filter((icon: any) =>
      icon.data.some((k: string) => k.toLowerCase().includes(text))
    );
    setData(filteredIcons);
  };
  const dataItemsIcons = groupData().map((row) => {
    return row.map((item: any, ind: number) => (
      <div
        className="list-items"
        key={ind}
        style={{
          flex: `0 0 ${100 / getItemsPerRow()}%`,
          height: "88px",
          padding: "0.5rem",
        }}
      >
        <Card cardType="bordered" customClass="inte-icon-inner">
          <span>{item.icon}</span>
          <CopyClipboard
            align="fill"
            value={`<${item?.name} size="${rest.size}" color="${rest.color}" />`}
            label={item?.name}
          ></CopyClipboard>
        </Card>
      </div>
    ));
  });

  return (
    <>
      <TextField
        placeHolder={`Search by icon name`}
        customClass="inte-icon-search-bar"
        prefix={<Search size="20" color="rgb(195, 197, 201)" />}
        value={input}
        onChange={(e: string) => searchIcons(e)}
        onClear={() => {
          setInput("");
          searchIcons("");
        }}
        isClearable
        helpText={
          data.length > 0
            ? "Showing number of icons is " + "  " + data.length
            : ""
        }
      />

      <Card>
        <div className="inte-icons__wrapper">
          {data.length !== 0 ? (
            <VirtualScroll
              containerHeight={innerHeight - 110}
              itemHeight={88}
              customClass="inte-virtualised__iconsContainer"
            >
              {dataItemsIcons}
            </VirtualScroll>
          ) : (
            <div className="inte__icons-notFound">
              Sorry, no icon found for &ldquo;{input}&rdquo;
            </div>
          )}
        </div>
      </Card>
    </>
  );
};
export const Primary: any = Template.bind({});
