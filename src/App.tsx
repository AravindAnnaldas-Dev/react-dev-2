import "./App.css";
// import ParentFile from "./ParentToChildProps/ParentFile";
// import ComponentsFolder from "./StateLifting/ComponentsFolder";
import ContextHook, { CreatingProvide } from "./context/Context";
import UsingContextFile from "./context/UsingContextFile";

function App() {
  // useContext
  const { themeMode } = ContextHook();

  return (
    // <>
    //   {/* Sending props from child to parent component */}
    //   {/* <ParentFile /> */}

    //   {/* State lifting */}
    //   {/* <ComponentsFolder /> */}
    // </>
    <CreatingProvide value={{ themeMode }}>
      {/* useContext */}
      <UsingContextFile themeMode={themeMode} />
    </CreatingProvide>
  );
}

export default App;
