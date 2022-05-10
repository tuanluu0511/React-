import { useReducer } from 'react';
// import { useState } from 'react';

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

const initialState = { value: '', isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return initialState;
};

const useInput = (validateInput) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const inputIsValid = validateInput(inputState.value);

  const hasError = inputState.isTouched && !inputIsValid;

  const inputValueHandler = (e) => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET', value: '', isTouched: false });
  };

  return {
    value: inputState.value,
    isValid: inputIsValid,
    hasError,
    inputBlurHandler,
    inputValueHandler,
    reset,
  };
};

export default useInput;
