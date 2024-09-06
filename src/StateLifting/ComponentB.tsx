import React from "react";
import { TstateLiftingCompB } from "../types/Types";

const ComponentB = (props: TstateLiftingCompB) => {
  return <h1>ComponentB count: {props.count}</h1>;
};

export default ComponentB;
