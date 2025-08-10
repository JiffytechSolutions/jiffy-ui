import React from "react";
import "./List.css";
export interface ListI {
  type: "ul" | "ol";
  unorderedStyle?: "Disc" | "Squire" | "Circle";
  orderedStyle?: "Decimal" | "Roman" | "Alfabet";
  children?: any;
}

const List = ({
  type = "ul",
  unorderedStyle = "Disc",
  orderedStyle = "Decimal",
  children = "",
  ...props
}: ListI) => {
  const checktype = (): string => {
    switch (type) {
      case "ul":
        return "jiffyui-list--unordered";
      case "ol":
        return "jiffyui-list--ordered";
      default:
        return "jiffyui-list--Unordered";
    }
  };

  const checkOrderedStyle = (): string => {
    switch (orderedStyle) {
      case "Decimal":
        return "jiffyui-olList--decimal";
      case "Roman":
        return "jiffyui-olList--roman";
      case "Alfabet":
        return "jiffyui-olList--alfabet";
      default:
        return "jiffyui-olList--decimal";
    }
  }
  const checkUnorderedStyle = (): string => {
    switch (unorderedStyle) {
      case "Disc":
        return "jiffyui-unList--disc";
      case "Squire":
        return "jiffyui-unList--squire";
      case "Circle":
        return "jiffyui-unList--circle";
      default:
        return "jiffyui-unList--disc";
    }
  }
  const listType = checktype();
  const olListStyle = checkOrderedStyle();
  const ulListStyle = checkUnorderedStyle();
  console.log(children)
  return (
    <div className={`${type === "ol" ? olListStyle + '__style' : ""} ${type === "ul" ? ulListStyle + '__style' : ""}`}>
      {type === "ul" ? (
        <ul className={`jiffyui-list ${ulListStyle} ${listType}`}>
          {children.map((item: any, index: number) => <React.Fragment key={index}>{item}</React.Fragment>)}
        </ul>
      ) : (
        <ol className={`jiffyui-list ${olListStyle} ${listType}`}>
          {children.map((item: any, index: number) => <React.Fragment key={index}>{item}</React.Fragment>)}
        </ol>
      )}
    </div>
  );
}

const Item = (props: any) => {
  const { children } = props;
  return (
    <li className="jiffyui-list--item">
      {children}
    </li>
  );
};

List.Item = Item;

export default List;
