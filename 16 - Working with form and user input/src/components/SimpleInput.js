import { useState } from 'react';
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;
  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const inputNameClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input onChange={nameInputChangeHandler} type="text" id="name" value={enteredName} onBlur={nameInputBlurHandler} />
        {nameInputIsInvalid && <p className="error-text">Name can't be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
