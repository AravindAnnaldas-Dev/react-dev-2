import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const ComponentsFolder = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <ComponentA count={count} setCount={setCount} />
      <ComponentB count={count} />
    </>
  );
};

export default ComponentsFolder;
