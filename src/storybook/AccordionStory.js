import React, { useRef, useState } from "react";

function AccordionStory(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight + 20}px`);
  }

  return (
    <div className="story-documentation-section">
      <h3
        className={`p-10 story-documentation-heading ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <strong>{props.title}</strong>
        <span
          className={`${
            active
              ? "story-documentation-heading-arrow up"
              : "story-documentation-heading-arrow down"
          }`}
        >
          ⬆
        </span>
      </h3>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="story-documentation-section-data"
      >
        {props.content}
      </div>
    </div>
  );
}

export default AccordionStory;
