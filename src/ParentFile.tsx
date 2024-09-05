import React from "react";
import ChildFile from "./ChildFile";

const ParentFile = () => {
  const childToParentProps = (gotProp: string) => {
    console.log(gotProp);
  };

  return (
    <>
      <ChildFile childToParent={childToParentProps} />
    </>
  );
};

export default ParentFile;
