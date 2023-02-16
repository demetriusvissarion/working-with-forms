import { useState } from "react";

// validateValue will be a function
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangedHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  // Error style classes
  const styleClasses = hasError ? "form-control invalid" : "form-control";

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler: valueChangedHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
    styleClasses: styleClasses,
  };
};

export default useInput;
