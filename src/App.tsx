import "./App.css";
import AppRoutesFile from "./AppRoutes/AppRoutesFile";
import ParentFile from "./ParentToChildProps/ParentFile";
import ComponentsFolder from "./StateLifting/ComponentsFolder";
import ContextHook, { CreatingProvide } from "./context/Context";
import UsingContextFile from "./context/UsingContextFile";
import Home from "./pages/Home";

function App() {
  // useContext
  const { themeMode } = ContextHook();

  return (
    // <CreatingProvide value={{ themeMode }}>
    //   {/* useContext */}
    //   <UsingContextFile themeMode={themeMode} />
    // </CreatingProvide>

    <>
      {/* Sending props from child to parent component */}
      {/* <ParentFile /> */}

      {/* State lifting */}
      {/* <ComponentsFolder /> */}

      {/* Routing */}
      <AppRoutesFile />
    </>
  );
}

export default App;
