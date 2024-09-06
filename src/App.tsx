import "./App.css";
import ParentFile from "./ParentToChildProps/ParentFile";
import ComponentsFolder from "./StateLifting/ComponentsFolder";

function App() {
  return (
    <>
      {/* Sending props from child to parent component */}
      {/* <ParentFile /> */}

      {/* State lifting */}
      <ComponentsFolder />
    </>
  );
}

export default App;
