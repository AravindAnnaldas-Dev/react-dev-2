// Sending porps from child to parent
export type TmyFunction = {
  childToParent: (gotProp: string) => void;
};

// State Lifting
export type TstateLiftingCompA = {
  count: number;
  setCount: (value: number) => void;
};

export type TstateLiftingCompB = {
  count: number;
};
