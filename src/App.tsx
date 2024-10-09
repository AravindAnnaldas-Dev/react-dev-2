import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import AppRoutesFile from "./AppRoutes/AppRoutesFile";
import ParentFile from "./ParentToChildProps/ParentFile";
import ComponentsFolder from "./StateLifting/ComponentsFolder";
import UsingHooks from "./UsingHooks";
import ContextHook, { CreatingProvide } from "./context/Context";
import UsingContextFile from "./context/UsingContextFile";
import Home from "./pages/Home";
import CleaningUpFunctions from "./reactPractice/CleaningUpFunctions";
import Conditonal from "./reactPractice/Conditonal";
import CustomHooks from "./reactPractice/CustomHooks";
import DataFetching from "./reactPractice/DataFetching";
import FormWithSingleState from "./reactPractice/FormWithSingleState";
import LoadingData from "./reactPractice/LoadingData";
import MountingAndUnmounting from "./reactPractice/MountingAndUnmounting";
import PrimitiveAndNonPrimitive from "./reactPractice/PrimitiveAndNonPrimitive";
import ReactNode from "./reactPractice/ReactNode";
import SetState from "./reactPractice/SetState";
import UpdatingObjectState from "./reactPractice/UpdatingObjectState";
import UseReducer from "./reducer/UseReducer";
import UseReducer2 from "./reducer/UseReducer2";
import UseQuery from "./usequery/UseQuery";

function App() {
  // useContext
  // const { themeMode } = ContextHook();

  // useQuery
  const queryClient = new QueryClient();

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

      {/* Custom Hooks */}
      {/* <UsingHooks /> */}

      {/* Use Reducer */}
      {/* <UseReducer /> */}
      {/* <UseReducer2 /> */}

      {/* useQuery */}
      <QueryClientProvider client={queryClient}>
        <UseQuery />
      </QueryClientProvider>
    </>
  );
}

export default App;
