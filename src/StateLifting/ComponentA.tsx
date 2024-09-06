import React, { useEffect } from "react";
import { TstateLiftingCompA } from "../types/Types";

const ComponentA = (props: TstateLiftingCompA) => {
  useEffect(() => {
    let countInterval = setInterval(() => {
      if (props.count < 10) {
        props.setCount(props.count + 1);
      }
    }, 1000);
    return () => clearInterval(countInterval);
  }, [props]);

  return (
    <>
      <h1>ComponentA count: {props.count}</h1>
      {/* <button onClick={() => props.setCount(props.count + 1)}>
        Click to increase the count
      </button> */}
    </>
  );
};

export default ComponentA;
