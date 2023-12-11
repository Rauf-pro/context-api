import "./App.css";
import Display from "./components/display/Display";
import Form from "./components/form/Form";
import LampControl from "./components/lampControl/LampControl";
import { FormProvider } from "./context/FormContext";
import { LampProvider } from "./context/LampContext";
import { ColorProvider } from "./context/colorContext";

function App() {
  return (
    <div className="App">
      {/* <h1>Mentor Lesson</h1> */}
      <FormProvider>
        <ColorProvider>
          <LampProvider>
            {/* <Form />
            <Display /> */}
            <LampControl/>
          </LampProvider>
        </ColorProvider>
      </FormProvider>
    </div>
  );
}

export default App;
