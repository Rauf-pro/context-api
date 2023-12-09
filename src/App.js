import "./App.css";
import Display from "./components/display/Display";
import Form from "./components/form/Form";
import { FormProvider } from "./context/FormContext";
import { ColorProvider } from "./context/colorContext";

function App() {
  return (
    <div className="App">
      <h1>Mentor Lesson</h1>
      <FormProvider>
        <ColorProvider>
          <Form />
          <Display />
        </ColorProvider>
      </FormProvider>
    </div>
  );
}

export default App;
