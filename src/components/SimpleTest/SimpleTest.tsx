import React, { useState } from "react";

const SimpleTest = (props: any) => {
  const { children } = props;
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Click {count}
      {children}
    </button>
  );
};

export default SimpleTest;
