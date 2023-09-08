import React from "react";
import getClassNames from "../../utilities/getClassnames";
import "./List.css";

const List: React.FC<ListI> = ({
  children = <></>,
  type,
  src = "",
  customClass = "",
}: ListI) => {
  const childrenArray = React.Children.toArray(children);
  const listStyle =
    type === "image"
      ? { listStyleImage: `url('${src}')` }
      : { listStyleType: type };

  const ElementTag = type === "lower-roman" || type === "decimal" ? "ol" : "ul";
  return (
    <ElementTag
      style={listStyle}
      className={getClassNames({
        "inte-list": true,
        "inte-list--withImage": type === "image",
        [customClass]: customClass,
      })}
    >
      {childrenArray.map((child: React.ReactNode, index: number) => (
        <li className="inte-list__Item" key={index}>
          {child}
        </li>
      ))}
    </ElementTag>
  );
};
export interface ListI {
  children: React.ReactNode;
  type?:
    | "disc"
    | "circle"
    | "square"
    | "lower-roman"
    | "decimal"
    | "image";
  src?: string;
  customClass?: string;
}
export default List;
