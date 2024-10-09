import "../App.css";
import React, { useReducer } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
};

const UseReducer = () => {
  // initializing the state
  const initalState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <div className="text-4xl">{state.count}</div>
      <button
        className="border border-white py-2 px-5 mr-1 rounded"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        INCREMENT
      </button>
      <button
        className="border border-white py-2 px-5 mr-1 rounded"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        DECREMENT
      </button>
      <button
        className="border border-white py-2 px-5 mr-1 rounded"
        onClick={() => dispatch({ type: "RESET" })}
      >
        RESET
      </button>
    </>
  );
};

export default UseReducer;
