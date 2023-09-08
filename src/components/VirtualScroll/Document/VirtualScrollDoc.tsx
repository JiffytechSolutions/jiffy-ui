import React from "react";
import StoryBookFooter from "../../../StorybookFooter/StoryBookFooter";

export const VirtualScrollDoc = () => {
  const codeContainerStyle: any = {
    backgroundColor: "rgb(229,229,229)",
    borderRadius: "4px",
    padding: "1rem",
  };
  const codeStyle = {
    fontFamily: "monospace",
    fontSize: "14px",
  };
  const noteStyle: any = {
    fontSize: "1.6rem",
    color: "rgb(76 89 95)",
    textAlign: "center",
    fontWeight: "bold",
    border: "2px solid rgb(137 135 135)",
    borderRadius: "4px",
    padding: "0.5rem",
  };
  return (
    <div className="story-documentation">
      <div className="block--section">
        <div style={codeContainerStyle}>
          <pre>
            <code style={codeStyle}>
              {`
          import React from 'react';
          import VirtualScroll from "../VirtualScroll";
          const Component = () => {
            const data = Array.from({ length: 10001 }).map((_, i) => (
                <div className="list">Item {i}</div>
              ));
            return (
                <VirtualScroll
                itemHeight={40}
                containerHeight={250}
                >
                  {data}
                </VirtualScroll>
            );
          };
        `}
            </code>
          </pre>
          <div style={noteStyle}>
            Note: Make sure to wrap your app inside the AppProvider
          </div>
        </div>
      </div>
      <hr className="section-devider" />
      <StoryBookFooter />
    </div>
  );
};
export default VirtualScrollDoc;
