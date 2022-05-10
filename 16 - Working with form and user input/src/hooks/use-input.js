import { useState } from 'react';

// const useInput = (validateValue) => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [isTouched, setIsTouched] = useState(false);
//   const valueIsValid = validateValue(enteredValue);
//   const hasError = isTouched && !valueIsValid;
//   const valueChangeHandler = (e) => {
//     setEnteredValue(e.target.value);
//   };
//   const inputBlurHandler = (e) => {
//     setIsTouched(true);
//   };

//   const reset = () => {
//     setEnteredValue('');
//     setIsTouched(false);
//   };

//   return {
//     value: enteredValue,
//     isValid: valueIsValid,
//     hasError,
//     valueChangeHandler,
//     inputBlurHandler,
//     reset,
//   };
// };

// export default useInput;

const useInput = (validateInput) => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInput(inputValue);

  const hasError = isTouched && !inputIsValid;

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue('');
    setIsTouched('');
  };

  return {
    value: inputValue,
    isValid: inputIsValid,
    hasError,
    inputBlurHandler,
    inputValueHandler,
    reset,
  };
};

export default useInput;
