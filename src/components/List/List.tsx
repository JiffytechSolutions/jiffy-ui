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
        return "jf-list--unordered";
      case "ol":
        return "jf-list--ordered";
      default:
        return "jf-list--Unordered";
    }
  };

  const checkOrderedStyle = (): string => {
    switch (orderedStyle) {
      case "Decimal":
        return "jf-olList--decimal";
      case "Roman":
        return "jf-olList--roman";
      case "Alfabet":
        return "jf-olList--alfabet";
      default:
        return "jf-olList--decimal";
    }
  }
  const checkUnorderedStyle = (): string => {
    switch (unorderedStyle) {
      case "Disc":
        return "jf-unList--disc";
      case "Squire":
        return "jf-unList--squire";
      case "Circle":
        return "jf-unList--circle";
      default:
        return "jf-unList--disc";
    }
  }
  const listType = checktype();
  const olListStyle = checkOrderedStyle();
  const ulListStyle = checkUnorderedStyle();
  console.log(children)
  return (
    <div className={`${type === "ol" ? olListStyle + '__style' : ""} ${type === "ul" ? ulListStyle + '__style' : ""}`}>
      {type === "ul" ? (
        <ul className={`jf-list ${ulListStyle} ${listType}`}>
          {children.map((item: any, index: number) => <React.Fragment key={index}>{item}</React.Fragment>)}
        </ul>
      ) : (
        <ol className={`jf-list ${olListStyle} ${listType}`}>
          {children.map((item: any, index: number) => <React.Fragment key={index}>{item}</React.Fragment>)}
        </ol>
      )}
    </div>
  );
}

const Item = (props: any) => {
  const { children } = props;
  return (
    <li className="jf-list--item">
      {children}
    </li>
  );
};

List.Item = Item;

export default List;
