import React from "react";

const Child = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => props.click("React")}>Child Button</button>
    </div>
  );
};

export default Child;
