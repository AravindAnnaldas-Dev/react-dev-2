import React from "react";
import { TmyFunction } from "./types/Types";

const ChildFile = (props: TmyFunction) => {
  const childData = "Hello from ChildFile";

  props.childToParent(childData);

  return <div>ChildFile</div>;
};

export default ChildFile;
