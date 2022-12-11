import InputGroup from "../components/shared/forms/InputGroup";

function App() {
  return (
    <div>
      <InputGroup
        name="title"
        placeholder={"Enter Your Title"}
        label={"Title"}
        value={"Clicked Here"}
        error={"Please Enter Right Keyword"}
      />
    </div>
  );
}

export default App;
