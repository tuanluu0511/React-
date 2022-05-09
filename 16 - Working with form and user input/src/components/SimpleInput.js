import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    // setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const inputNameClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const inputEmailClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input onChange={nameChangeHandler} type="text" id="name" value={enteredName} onBlur={nameBlurHandler} />
        {nameInputHasError && <p className="error-text">Name can't be empty.</p>}
      </div>

      <div className={inputEmailClasses}>
        <label htmlFor="name">Your E-Mail</label>
        <input onChange={emailChangeHandler} type="email" id="email" value={enteredEmail} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">Invalid email input.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
