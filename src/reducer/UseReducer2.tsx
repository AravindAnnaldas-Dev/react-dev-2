import React, { useReducer } from "react";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  error: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FIELDS":
      return { ...state, [action.name]: action.value };
    case "ERROR":
      return { ...state, error: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const UseReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !state.firstname ||
      !state.lastname ||
      !state.email ||
      !state.password
    ) {
      dispatch({ type: "ERROR", value: "Fileds shouldn't be Empty" });
      return;
    } else {
      console.log(state, "state");
    }
    dispatch({ type: "RESET" });
    alert("Form Submitted Successfully!");
  };

  return (
    <>
      <form
        className="border border-[grey] w-[fit-content] p-6 flex flex-col"
        onSubmit={handlerSubmit}
      >
        <div className="w-full flex items-center justify-between gap-3 mb-4">
          <label htmlFor="firstname">FirstName:</label>
          <div className="border border-[grey]">
            <input
              className="w-full h-full bg-transparent py-2 px-4"
              type="text"
              name="firstname"
              placeholder="firstname"
              value={state.firstname}
              onChange={(e) => {
                dispatch({
                  type: "FIELDS",
                  name: e.target.name,
                  value: e.target.value,
                });
                dispatch({ type: "ERROR", value: "" });
              }}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-3 mb-4">
          <label htmlFor="lastname">LastName:</label>
          <div className="border border-[grey]">
            <input
              className="w-full h-full bg-transparent py-2 px-4"
              type="text"
              name="lastname"
              placeholder="lastname"
              value={state.lastname}
              onChange={(e) => {
                dispatch({
                  type: "FIELDS",
                  name: e.target.name,
                  value: e.target.value,
                });
                dispatch({ type: "ERROR", value: "" });
              }}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-3 mb-4">
          <label htmlFor="email">Email:</label>
          <div className="border border-[grey]">
            <input
              className="w-full h-full bg-transparent py-2 px-4"
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={(e) => {
                dispatch({
                  type: "FIELDS",
                  name: e.target.name,
                  value: e.target.value,
                });
                dispatch({ type: "ERROR", value: "" });
              }}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-3 mb-2">
          <label htmlFor="password">Password:</label>
          <div className="border border-[grey]">
            <input
              className="w-full h-full bg-transparent py-2 px-4"
              type="password"
              name="password"
              placeholder="password"
              value={state.password}
              onChange={(e) => {
                dispatch({
                  type: "FIELDS",
                  name: e.target.name,
                  value: e.target.value,
                });
                dispatch({ type: "ERROR", value: "" });
              }}
            />
          </div>
        </div>
        <div className="text-[red] text-xs">{state.error}</div>
        <button
          type="submit"
          className="border border-[grey] py-2 px-5 rounded-md mt-4 ml-auto"
        >
          submit
        </button>
      </form>
    </>
  );
};

export default UseReducer2;
