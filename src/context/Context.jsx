import { createContext, useContext } from "react";

export const CreatingContext = createContext({
  themeMode: "light",
});

export const CreatingProvide = CreatingContext.Provider;

export default function ContextHook() {
  return useContext(CreatingContext);
}
