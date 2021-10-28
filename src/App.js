import "./App.css";
import { useState } from "react";
import Button from "./Button";
function App() {
  return (
    <div className="App">
      <Button
        color="red"
        text="myButton"
        type="submit"
        border="1px solid red"
      />
    </div>
  );
}

export default App;
