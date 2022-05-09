import { useState } from 'react';
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;
  const [enteredEmail, setEnteredEmail] = useState('');

  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes('@');

  const emailInputIsInvalid = enteredEmailTouched && !enteredEmailIsValid;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const inputNameClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const inputEmailClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input onChange={nameInputChangeHandler} type="text" id="name" value={enteredName} onBlur={nameInputBlurHandler} />
        {nameInputIsInvalid && <p className="error-text">Name can't be empty.</p>}
      </div>

      <div className={inputEmailClasses}>
        <label htmlFor="name">Your E-Mail</label>
        <input onChange={emailInputChangeHandler} type="email" id="email" value={enteredEmail} onBlur={emailInputBlurHandler} />
        {emailInputIsInvalid && <p className="error-text">Invalid email input.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
