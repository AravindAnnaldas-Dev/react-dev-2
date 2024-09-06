import { useState } from "react";
import "./pages.css";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState("2");

  if (isNaN(result)) {
    setResult(0);
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onAddition = () => {
    let myResult = result + parseFloat(inputValue);
    setResult(myResult);
  };

  const onSubtraction = () => {
    let myResult = result - parseFloat(inputValue);
    setResult(myResult);
  };

  const onMultiplication = () => {
    let myResult = result * parseFloat(inputValue);
    setResult(myResult);
  };

  const onDivision = () => {
    let myResult = result / parseFloat(inputValue);
    setResult(myResult);
  };

  const onResetInputField = () => {
    setInputValue("0");
  };

  const onResetResult = () => {
    setResult(0);
  };

  return (
    <div className="calc_section">
      <div className="calc_container">
        <div className="calc_wrapper">
          <h1 className="calc_heading">Mini Calculator</h1>
          <div className="calc_result">Result: {result}</div>
          <input
            id="calc_input"
            type="number"
            value={inputValue}
            className="calc_input_field"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeInput(e)
            }
          />
          <div className="calc_buttons_ctn">
            <button className="calc_btn clr_green" onClick={onAddition}>
              Addition
            </button>
            <button className="calc_btn clr_red" onClick={onSubtraction}>
              Subtraction
            </button>
            <button className="calc_btn clr_blue" onClick={onMultiplication}>
              Multiplication
            </button>
            <button className="calc_btn clr_pink" onClick={onDivision}>
              Division
            </button>
            <button className="calc_btn clr_orange" onClick={onResetInputField}>
              Reset Input
            </button>
            <button className="calc_btn clr_orange" onClick={onResetResult}>
              Reset Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
