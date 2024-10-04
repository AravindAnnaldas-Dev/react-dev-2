import './App.css';
import AppRoutesFile from './AppRoutes/AppRoutesFile';
import ParentFile from './ParentToChildProps/ParentFile';
import ComponentsFolder from './StateLifting/ComponentsFolder';
import UsingHooks from './UsingHooks';
import ContextHook, { CreatingProvide } from './context/Context';
import UsingContextFile from './context/UsingContextFile';
import Home from './pages/Home';
import CleaningUpFunctions from './reactPractice/CleaningUpFunctions';
import Conditonal from './reactPractice/Conditonal';
import CustomHooks from './reactPractice/CustomHooks';
import DataFetching from './reactPractice/DataFetching';
import FormWithSingleState from './reactPractice/FormWithSingleState';
import LoadingData from './reactPractice/LoadingData';
import MountingAndUnmounting from './reactPractice/MountingAndUnmounting';
import PrimitiveAndNonPrimitive from './reactPractice/PrimitiveAndNonPrimitive';
import ReactNode from './reactPractice/ReactNode';
import SetState from './reactPractice/SetState';
import UpdatingObjectState from './reactPractice/UpdatingObjectState';

function App() {
  // useContext
  // const { themeMode } = ContextHook();

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
      {/* <AppRoutesFile /> */}

      {/* React Practice */}
      {/* <SetState /> */}
      {/* <Conditonal themeMode={false} /> */}
      {/* <UpdatingObjectState /> */}
      {/* <FormWithSingleState /> */}
      {/* <PrimitiveAndNonPrimitive /> */}
      {/* <LoadingData /> */}
      {/* <MountingAndUnmounting /> */}
      {/* <CustomHooks /> */}
      {/* <CleaningUpFunctions /> */}
      {/* <DataFetching /> */}
      {/* <ReactNode>Hello World!</ReactNode> */}
      <UsingHooks />
    </>
  );
}

export default App;
