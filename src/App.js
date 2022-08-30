import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disableButton, setDisableButton] = useState(false);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const handleClick = () => {
    setButtonColor(newButtonColor);
  };

  const handleCheckBox = () => {
    setCheckBoxChecked(!checkBoxChecked);
    setDisableButton(!disableButton);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: disableButton ? "grey" : buttonColor,
          color: "white",
        }}
        disabled={disableButton}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onChange={handleCheckBox} />
    </div>
  );
}

export default App;
