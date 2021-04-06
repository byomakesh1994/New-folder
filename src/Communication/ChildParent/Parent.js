import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [state, setState] = useState("");
  const parentHandler = (data) => {
    console.log("hello");
    setState({ state: data });
  };

  return (
    <div>
      <h1>Parent Component {state}</h1>
      <Child click={parentHandler} />
    </div>
  );
};

export default Parent;
